// from ../index.js
import GetInstances from "./getInstances.js"
import NewInstanceFromType from "./newInstanceFromType.js"
import NewPrp from "./newPrp.js"
import Search from "./search.js"
import GetStream from "./getStream.js"
import GetAggRoot from "./getAggRoot.js"
import AddPrpAttr from "./addPrpAttr.js"

import QueryAggroot from "./queryAggroot.js"

export default function({helper,dispatcher, path}) { 
const getKeyval=(e,key)=>{
return Array.from(e.parentElement.parentElement.querySelectorAll("[evententityid]")).filter(item => item.querySelector("#field").value == key && item.querySelector("#op").value == ":")[0].querySelector("#value").value
}
//getKeyval("name")
window.actions={}
window.hej=["getInstances","newInstanceFromType","queryAggroot","newPrp","search","getStream","getAggRoot","addPrpAttr"].map(component=>{
import(path+"actions/"+component+".js")
    .then((module) => {
      window.actions[component]=module.default({helper, dispatcher});
	console.log(module)
    });
    });
	return {
		actions:window.actions
}
}

