import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"
import SpecialFields from "./specialFields.js"

export default function({helper}) {
const specialFields=SpecialFields({helper})
return function(item) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("mountCriteria")
            const item = x.body
            if (x.type == "mountObject") {
                console.log("mountCriteria.js", x)
                console.log("see template", template(x.body))
                const divElement = template(x.body)
		    if(x.body.field=="type" && x.body.op==":"){
	debugger
	const crit=helper.el("div",{id:"criteria"})
divElement.appendChild(crit)
	divElement.setAttribute("streamcontainer",x.body.id)
                document.body.appendChild(divElement)
}else{
var streamDiv
			    if(x.body.op==":"){
		    streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#keyval');
			    }
			    else if(x.body.op=="=="){
		    streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#criteria');
			    }

			    else if(x.body.op=="rel"){
		    streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#relation');
			    
			    }
                streamDiv.appendChild(divElement)






}
	    
                return divElement
}
        })

const template = (item) => {
    item
    var that = this
    const row = document.createElement("div")
	row.item=item
	row.setAttribute("eventEntityId",item.id) 
    const streamid = document.createElement("span")
    const value = document.createElement("input")
    const id = document.createElement("input")
    id.value=item.id
 
    const format = document.createElement("input")
    const field = document.createElement("input")
	field.id="field"
    const insertCriteria = document.createElement("button")

    streamid.innerText = item.streamid
    streamid.id = item.streamid
    streamid.setAttribute("streamid",item.streamid)
    row.className = "criteria"
    field.id = "field"
    field.value = item.field
field.setAttribute("list","typeListprpAttr")

    const operator = options(["==", ">", "<",":","rel"])
    operator.value = item.op
    operator.setAttribute("id","op")
    format.value = item.format
    value.key = field.value
    value.id = "value"
    value.key = field.value
    value.value = item.value
    const deleteCriteria=Object.assign(document.createElement("button"),{
	    innerText: "deleteCriteria",
	    objId:item.id,
	    onclick:e=> {
            window.sub.next({
                type: "delete",
                sender: "criteria.js",
                body: item.id
            })
        }})
        //hade to save state in insertCriteria in order to not get last item state in loop
        insertCriteria.innerText = "insertCriteria"
    insertCriteria.streamid = item.id
		const insertCriteriaOnclick= function() {
        const obj = {
            format: format.value,
            field: field.value,
            streamid: field.value=="type"&& op.value==":"?"notPersisted":streamid.innerText,
            value: value.value,
            op: operator.value
        }
			console.log(obj)
        window.sub.next({
            type: "persist",
            body: obj,
            sender: "mountCriteria.js, insertCriteria onclick"
        })
    }
insertCriteria.addEventListener('click', insertCriteriaOnclick)

if(item.field=="type" && item.op==":"){

            row.style.padding = "8px"
             row.style.margin = "8px"
             row.style.borderStyle = "solid"
             row.style.borderWidth = "thin"

}
        

    const arr = [...specialFields(item),field, operator, value, streamid, format, insertCriteria, deleteCriteria,id]
    arr.map((el) => row.appendChild(el))

    return row
}}
}
