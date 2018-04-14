// from ../index.js
export default function({helper,dispatcher, path, htmlHelpers}) { 

var thisPath=app.path
if(document.location.hostname.indexOf("localhost") != 0){
thisPath +="services/"
}
const services={}
window.hej=["queryAggroot"].map(component=>{
import(thisPath+component+".js")
    .then((module) => {
      services[component]=module.default({helper, dispatcher, htmlHelpers});
      window.services[component]=module.default({helper, dispatcher, htmlHelpers});
	console.log(module)
    });
    });
	console.log(33,services)
	return services
}
