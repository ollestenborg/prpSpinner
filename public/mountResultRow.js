import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"

export default function(Criteria, domels) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("mountResultRow")
            const item = x.body
                //if (x.type == "mountCriteria" && x.body.format == "criteria") {
            if (x.type == "getResult") {
                console.log("mountCriteria.js", x)
                console.log("see template", template(x.body))
                const divElement = template(x.body, x.streamid)
		    const streamDiv=document.querySelector('[streamid="'+x.streamid+'"]');
                streamDiv.appendChild(divElement)
                return divElement
            }
        })
}
const template = (docs) => {
const result=document.createElement('div')
docs.map(docc=> {
	const ele=document.createElement('div')
const obj=docc.data()
	ele.onclick=e=>{
sub.next({
	type:"getStream",
	body:{streamid:obj.id}
	})	
	}
	ele.innerText=JSON.stringify(obj)
	result.appendChild(ele)
})
	return result
}
