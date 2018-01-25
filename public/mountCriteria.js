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
    this.item = item
    var that = this
    const row = document.createElement("div")
	row.setAttribute("eventEntityId",item.id) 
    this.streamid = document.createElement("span")
    this.value = document.createElement("input")
    this.id = document.createElement("input")
    id.value=item.id
 
    this.format = document.createElement("input")
    this.field = document.createElement("input")
    const insertCriteria = document.createElement("button")
    this.streamid.innerText = item.streamid

    this.streamid.id = item.streamid
    this.streamid.setAttribute("streamid",item.streamid)
    row.className = "criteria"
    this.field.id = "field"
    this.field.value = item.field

    this.operator = options(["==", ">", "<"])
    this.operator.value = item.op
    this.operator.setAttribute("id","op")
    this.format.value = item.format

    this.value.key = this.field.value
    this.value.id = "value"
    this.value.key = this.field.value
    this.value.value = this.item.value
    const deleteCriteria=Object.assign(document.createElement("button"),{
	    innerText: "deleteCriteria",
	    objId:that.item.id,
	    onclick:e=> {
            window.sub.next({
                type: "delete",
                sender: "criteria.js",
                body: that.item.id
            })
        }})
        //hade to save state in insertCriteria in order to not get last item state in loop
    insertCriteria.item =
        insertCriteria.innerText = "insertCriteria"
    insertCriteria.streamid = item.streamid
    insertCriteria.onclick = function(e) {
        const parentDiv = e.currentTarget.parentElement
        const hmv = parentDiv.querySelector("#value").value
        const obj = {
            format: that.format.value,
            field: that.field.value,
            streamid: that.streamid.innerText,
            value: hmv,
            op: that.operator.value
        }
        window.sub.next({
            type: "persist",
            body: obj,
            sender: "mountCriteria.js, insertCriteria onclick"
        })
    }

    this.arr = [this.field, this.operator, this.value, this.streamid, this.format, insertCriteria, deleteCriteria,this.id]
    this.arr.map((el) => row.appendChild(el))
    return row
}
