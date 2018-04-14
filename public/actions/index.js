// from ../index.js
export default function({helper,dispatcher, path, htmlHelpers}) { 
const getKeyval=(e,key)=>{
return Array.from(e.parentElement.parentElement.querySelectorAll("[evententityid]")).filter(item => item.querySelector("#field").value == key && item.querySelector("#op").value == ":")[0].querySelector("#value").value
}
//getKeyval("name")
var thisPath=app.path
if(document.location.hostname.indexOf("localhost") != 0){
thisPath +="actions/"
}
const actions={}
window.hej=["newStream","persistEvent","mountApp","mountDomels","getInstances","newInstanceFromType","queryAggroot","newPrp","search","getStream","getAggRoot","addPrpAttr","mountResRows","mountCriteria"].map(component=>{
import(thisPath+component+".js")
    .then((module) => {
      window.actions[component]=module.default({helper, dispatcher, htmlHelpers});
	console.log(module)
    });
    });
	return actions
}
