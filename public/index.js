	import initData from "./init_data.js"; 
        import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js" 
	import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js" 
	import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js" 
	import Template from "https://rawgit.com/ollestenborg/public_repo/master/template.js" 
        import formToObj from "https://rawgit.com/ollestenborg/public_repo/master/formToObj.js"
	import Firebase from "./firebase.js" 
	import aggroot from "./aggroot.js" 
	import rxfs from "./rxfs.js" 
        import Criteria from "./criteria.js"; 
	import Header from "./header.js"; 
        import GetStream from "./getStream.js"; 
	import mountStreams from "./mountStreams.js"; 
	import mountCriteria from "./mountCriteria.js"; 
	import mountResult from "./mountResultRow.js"; 
	import mountRelation from "./mountRelation.js"; 
	import mountKeyVal from "./mountKeyVal.js"; 
	import rxlog from "./rxlog.js"; 
export default function(){
	const template=Template()
	const fs=new Firebase(localStorage.getItem('apiKey'))
	window.fs=fs
	function el(element,obj){
		console.log(obj)
	return Object.assign(document.createElement(element),obj)
	}
function qd(query,obj){
	return Object.assign(document.querySelector(query),obj)
	}
function qda(query){
	return document.querySelectorAll(query)
	}
	const helper = {options, datalist, fs,formToObj,uuid,el}
	window.helper=helper
        initData({helper}) 
	rxlog({helper})
	aggroot({domels,helper})
	const headerHTML =new Header({helper})
	const getStream =new GetStream({helper})
	mountCriteria()
	mountKeyVal()
        mountResult()
        mountRelation({helper})
	rxfs({ helper})
	window.stream=headerHTML
	const criteriaDependencies={}
	const criteria=Criteria.constructor({domels,helper}) 
	const headerDependencies={}
	document.body.appendChild(headerHTML.render())
	document.body.appendChild(getStream.render())
	document.body.appendChild(document.createElement("hr"))
}
