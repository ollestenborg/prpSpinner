const mockObj={streamid:"getStream",id:"123",value:"valVal",field:"fieldField",op:":"}
export default ({helper, dispatcher}) => {
return (item=mockObj) => {
    const row = document.createElement("div")

row.style.padding = "8px"
             row.style.margin = "8px"
             row.style.borderStyle = "solid"
             row.style.borderColor = "green"
             row.style.borderWidth = "thin"




	row.item=item
console.log("whathere",item)
	row.setAttribute("streamid",item.streamid) 
	row.setAttribute("eventEntityId",item.id) 
    const streamid = document.createElement("span")
	streamid.style.display="none"
    const value = document.createElement("input")
    const id = document.createElement("input")
	id.style.display="none"
    id.value=item.id
 
    const format = document.createElement("input")
	format.style.display="none"
    const field = document.createElement("input")
    field.id="field"
    const insertCriteria = document.createElement("button")

    streamid.innerText = item.streamid
    streamid.id = item.streamid
    streamid.setAttribute("streamid",item.streamid)
    row.className = "criteria"
    field.id = "field"
    field.value = item.field
    field.setAttribute("list","typeList"+item.value)
    const operator = helper.options(["==", ">", "<",":","rel"])
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


        

    const arr = [field, operator, value, streamid, format, insertCriteria, deleteCriteria,id]
    arr.map((el) => row.appendChild(el))

    return row
}
}
