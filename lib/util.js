export function getLocation(){
    return new Promise((resolve,reject)=>{
        dd.device.location.get ({
          onSuccess: function(data) {
            console.log(data)
            resolve(data)
          },
          onFail: function(error) {
               console.log(1)
              reject(error)
          }
        })
    })

}
export function formatLocation(res) {
	var regex = /^(北京市|天津市|重庆市|上海市|香港特别行政区|澳门特别行政区)/;
	var REGION_PROVINCE = [];
	var addressBean = {
		REGION_PROVINCE: null,
		REGION_COUNTRY: null,
		REGION_CITY: null,
		ADDRESS: null
	};

	function regexAddressBean(address, addressBean) {
		regex = /^(.*?[市]|.*?地区|.*?特别行政区)(.*?[市区县])(.*?)$/g
        
		var addxress = regex.exec(address)
		addressBean.REGION_CITY = addxress[1]
		addressBean.REGION_COUNTRY = addxress[2]
		addressBean.ADDRESS = addxress[3] +" "+  res.name 
	}
	if (!(REGION_PROVINCE = regex.exec(res.address))) {
		regex = /^(.*?(省|自治区))(.*?)$/
		REGION_PROVINCE = regex.exec(res.address)
		addressBean.REGION_PROVINCE = REGION_PROVINCE[1]
		regexAddressBean(REGION_PROVINCE[3], addressBean)
	} else {
		addressBean.REGION_PROVINCE = REGION_PROVINCE[1]
		regexAddressBean(res.address, addressBean)
	}
	return addressBean
};