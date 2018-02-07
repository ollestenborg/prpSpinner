import Search from "./search.js"
import StreamContainer from "./streamContainer.js"
export default ({helper})=>{
const searchFun=Search({helper})
const streamContainer=StreamContainer({helper})
return (item)=>{
	const elements=[]
	const div=document.createElement("div")
	const search=document.createElement("button")
	search.innerText="search"
search.id="btnSearch"
	search.onclick=function(e){
		searchFun(e)
	}
	if(item.field=="type"&&item.op==":"){
	  streamContainer().map((item)=> elements.push(item))
	  elements.push(search)
	}
return elements
}}
