import Search from "../actions/search.js"
import StreamContainer from "./streamContainer.js"
import CriteriaContainer from "./criteriaContainer.js"
export default ({helper})=>{
const searchFun=Search({helper})
const streamContainer=StreamContainer({helper})
const criteriaContainer=CriteriaContainer({helper})
return (item)=>{
	const elements=[]
	const div=document.createElement("div")
	const search=document.createElement("button")
	window.streamContainer=streamContainer
	search.innerText="search"
search.id="btnSearch"
	search.onclick=function(e){
		searchFun(e)
	}
	if(item.field=="type"&&item.op==":"){
	  streamContainer().map((item)=> elements.push(item))
	  elements.push(search)
	}
	else {
	  criteriaContainer().map((item)=> elements.push(item))
	}
return elements
}}
