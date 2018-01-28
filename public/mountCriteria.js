import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"

export default function(Criteria, domels) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("mountCriteria")
            const item = x.body
                //if (x.type == "mountCriteria" && x.body.format == "criteria") {
            if (x.type == "mountObject" && x.body.format == "criteria") {
                console.log("mountCriteria.js", x)
                console.log("see template", template(x.body))
                const divElement = template(x.body)
		    const streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#criteria');
                streamDiv.appendChild(divElement)
                return divElement
            }
        })
}
const template = (item) => {
    item
    var that = this
    const row = document.createElement("div")
	row.setAttribute("eventEntityId",item.id) 
    const streamid = document.createElement("span")
    const value = document.createElement("input")
    const id = document.createElement("input")
    id.value=item.id
 
    const format = document.createElement("input")
    const field = document.createElement("input")
    const insertCriteria = document.createElement("button")

    streamid.innerText = item.streamid
    streamid.id = item.streamid
    streamid.setAttribute("streamid",item.streamid)
    row.className = "criteria"
    field.id = "field"
    field.value = item.field

    const operator = options(["==", ">", "<"])
    operator.value = item.op
    operator.setAttribute("id","op")
    format.value = item.format
const getFormat=function(){
return format.value
}

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
    insertCriteria.streamid = item.streamid
		const insertCriteriaOnclick= function() {
        const obj = {
            format: format.value,
            field: field.value,
            streamid: streamid.innerText,
            value: value.value,
            op: operator.value
        }
        window.sub.next({
            type: "persist",
            body: obj,
            sender: "mountCriteria.js, insertCriteria onclick"
        })
    }
insertCriteria.addEventListener('click', insertCriteriaOnclick)

    const arr = [field, operator, value, streamid, format, insertCriteria, deleteCriteria,id]
    arr.map((el) => row.appendChild(el))
    return row
}
