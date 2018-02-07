import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"

export default function(Criteria, domels) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("mountCriteria")
            const item = x.body
                //if (x.type == "mountCriteria" && x.body.format == "criteria") {
            if (x.type == "mountObject" && x.body.format == "keyval") {
                console.log("mountCriteria.js", x)
                console.log("see template", template(x.body))
                const divElement = template(x.body)
		    const streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#keyval');
                streamDiv.appendChild(divElement)
                return divElement
            }
        })
}
const template = (item) => {
    this.item = item
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
    const deleteCriteria = document.createElement("button")

    streamid.innerText = item.streamid

    streamid.id = item.streamid
    streamid.setAttribute("streamid",item.streamid)
    row.className = "keyval"
    field.id = "field"
    field.value = item.field

    format.value = item.format

    value.key = field.value
    value.id = "value"
    value.key = field.value
    value.value = item.value
    deleteCriteria.innerText = "deleteCriteria"
    deleteCriteria.objId = item.id
    deleteCriteria.onclick = function(e) {
            window.sub.next({
                type: "delete",
                sender: "mountKeyval.js",
                body: this.objId
            })
        }
        //hade to save state in insertCriteria in order to not get last item state in loop
    insertCriteria.item =
        insertCriteria.innerText = "insertKeyVal"
    insertCriteria.streamid = item.streamid
    insertCriteria.onclick = function(e) {
        const parentDiv = e.currentTarget.parentElement
        const hmv = parentDiv.querySelector("#value").value
        const obj = {
            format: format.value,
            field: field.value,
            streamid: streamid.innerText,
            value: hmv
        }
        window.sub.next({
            type: "persist",
            body: obj,
            sender: "mountCriteria.js, insertCriteria onclick"
        })
    }

    const arr = [field, value, streamid, format, insertCriteria, deleteCriteria,id]
    arr.map((el) => row.appendChild(el))
    return row
}
