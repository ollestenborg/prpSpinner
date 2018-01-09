        import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js" 
	import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js" 
	import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js" 
	import Firebase from "./firebase.js" 
	import aggroot from "./aggroot.js" 
	import rxfs from "./rxfs.js" 
        import Criteria from "./criteria.js"; 
	import Header from "./header.js"; 
        import GetStream from "./getStream.js"; 
	import mountStreams from "./mountStreams.js"; 
	import mountCriteria from "./mountCriteria.js"; 
	import rxlog from "./rxlog.js"; 
[{format:"a"},{format:"b"}]
export default function(){
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
	rxlog()
	const fs=new Firebase(localStorage.getItem('apiKey')) 
	window.fs=fs 
	const helper = {options, datalist, fs,dynamicSort} 
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
