	import initData from "./init_data.js"; 
        import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js" 
	import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js" 
	import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js" 
	import Template from "https://rawgit.com/ollestenborg/public_repo/master/template.js" 
        import formToObj from "https://rawgit.com/ollestenborg/public_repo/master/formToObj.js"
	import Firebase from "./firebase.js" 
	import aggroot from "./aggroot.js" 
	import rxfs from "./rxfs.js" 
        import Criteria from "./component/criteria.js"; 
	import Header from "./component/header.js"; 
        import GetStream from "./actions/getStream.js";
	import mountStreams from "./component/mountStreams.js"; 
	import MountCriteria from "./component/mountCriteria.js"; 
	import mountResult from "./component/mountResultRow.js"; 
	import mountRelation from "./component/mountRelation.js"; 
	import mountKeyVal from "./component/mountKeyVal.js"; 
	import NewInstanceFromType from "./actions/newInstanceFromType.js"; 
	import NewPrp from "./actions/newPrp.js";
	import GetInstances from "./actions/getInstances.js";
	import Actions from "./actions/index.js";
	import Componensts from "./component/index.js";
	import rxlog from "./rxlog.js";



var app2 = new Vue({
  el: '#crits',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
	        export default function(){
			const store={}
			var dispatcher=function (message){
				window.sub.next(message)
				console.log("disp",message)
				if(message.type=="mountCriteria"){
window.component["mountCriteria"](message.body)
				}

		
			}
	const template=Template()
const fs=new Firebase(localStorage.getItem('apiKey'))
	window.fs=fs
const helper = {options, datalist, fs,formToObj,uuid,el,template}
        const actions=Actions(helper)
			window.actions=actions
	const state={actions,helper,store,dispatcher}
        const component=Componensts(state)
window.component=component
	

	function el(element,obj){
	return Object.assign(document.createElement(element),obj)
	}

	window.helper=helper

	const getStream =new GetStream({helper})
	rxlog({helper})
	aggroot({helper})
	
	const mountCriteria=MountCriteria({helper})

		rxfs({ helper})
	        initData({helper}) 
}
