export default function(){
return {el:function(element,obj){
	return Object.assign(document.createElement(element),obj)
	}
}
}
