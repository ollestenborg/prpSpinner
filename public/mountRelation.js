import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"

export default function({Criteria, domels,helper}) {
    window.sub.subscribe(
        function(x) {
            this.identity = "mountRelation"
            const item = x.body
                //if (x.type == "mountCriteria" && x.body.format == "criteria") {
            if (x.type == "mountObject" && x.body.format == "relation") {
                console.log("mountRelation.js", x)
                const divElement = template(x.body)
		    const streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#relation');
                streamDiv.appendChild(divElement)
                return divElement
            }
        })
}
const template = (item) => {
    this.item = item
    var that = this
		    const streamDiv=document.querySelector('[selectedLatest=true]');
	console.log("mountRelation",item)
    const row = document.createElement("div")
	row.setAttribute("eventEntityId",item.id)
    this.streamid = document.createElement("span")
    this.value = helper.el("input",{
	    key : this.field.value,
            id : "value",
            key : this.field.value,
            value : this.item.value,
    placeholder:"value"
    })

    this.id= helper.el("input",{
    value:item.id,
    placeholder:"id"
    })

    this.from = helper.el("input",{
value: document.querySelector('[selectedLatest=true]') ? document.querySelector('[selectedLatest=true]').getAttribute('streamcontainer'):"",
	    placeholder:"from"
    })



    this.dataSourceList = options(["firebaseid", "mongo", "filesystempath"])
    this.dataSource = helper.el("input",{
	    placeholder:"dataSource"
    })
	dataSource.setAttribute("list","dataSourceList")

    this.format = helper.el("input",{
    value : item.format,
	    placeholder:"format",
	    "data-tip":"formatadsfdsa"
    })

    this.field = helper.el("input",{
    id : "field",
    value : item.field,
	    placeholder:"field"
    })

    const insertCriteria = document.createElement("button")
//hade to save state in insertCriteria in order to not get last item state in loop
    insertCriteria.item =
        insertCriteria.innerText = "insertCriteria"
    insertCriteria.streamid = item.streamid
    insertCriteria.onclick = function(e) {
        const parentDiv = e.currentTarget.parentElement
        const hmv = parentDiv.querySelector("#value").value
        const obj = {
            dataSource: that.dataSource.value,
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



    const deleteCriteria = document.createElement("button")
    this.streamid.innerText = item.streamid

    this.streamid.id = item.streamid
    this.streamid.setAttribute("streamid",item.streamid)
    row.className = "criteria"
    
    this.operator = options(["none", "oposite", "<"])
    this.operator.value = item.op
    this.operator.setAttribute("id","relationType")

    
    deleteCriteria.innerText = "deleteCriteria"
    deleteCriteria.objId = item.id
    deleteCriteria.onclick = function(e) {
            window.sub.next({
                type: "delete",
                sender: "mountRelation.js",
                body: this.objId
            })
        }
        

    this.arr = [this.field, this.operator,this.dataSource, this.from, this.value, this.streamid, this.format, insertCriteria, deleteCriteria,this.id]
    this.arr.map((el) => row.appendChild(el))
	console.log(row)
    return row
}
