export default function ({helper}){
return function (){
const valueType=helper.el("input", {value:"string"
             })
	valueType.setAttribute("list","typeListvalueType")
	valueType.style.display="none"
	return [valueType]
	}}
