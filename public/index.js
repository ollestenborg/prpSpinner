	//import initData from "./init_data.js"; 
        import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js" 
	import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js" 
	import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js" 
        import formToObj from "https://rawgit.com/ollestenborg/public_repo/master/formToObj.js"
	import Firebase from "./firebase.js" 
	import aggroot from "./aggroot.js" 
	import rxfs from "./rxfs.js" 
        import Criteria from "./criteria.js"; 
	import Header from "./header.js"; 
        import GetStream from "./getStream.js"; 
	import mountStreams from "./mountStreams.js"; 
	import mountCriteria from "./mountCriteria.js"; 
	import rxlog from "./rxlog.js"; 
export default function(){
	const fs=new Firebase(localStorage.getItem('apiKey'))
	window.fs=fs 
	const helper = {options, datalist, fs,formToObj,uuid}
	rxlog({helper})
	aggroot({domels,helper})
	const headerHTML =new Header({helper})
	const getStream =new GetStream({helper})
	mountCriteria()
	rxfs({ helper})
	window.stream=headerHTML
	const criteriaDependencies={}
	const criteria=Criteria.constructor({domels,helper}) 
	const headerDependencies={}
	document.body.appendChild(headerHTML.render())
	document.body.appendChild(getStream.render())
}
