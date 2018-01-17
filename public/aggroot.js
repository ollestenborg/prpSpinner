 export default function({
     domels,
     helper
 }) {
     window.sub.subscribe(function(x) {
         if (x.type == "mountObject" && x.body.format == "ar") {
         console.log("aggroot.js",x)
             const type = domels.filter(it => it.name == x.body.type)[0]
		 const item=x.body
             const paramElement = document.createElement("div")
             const criteriaContainer = document.createElement("div")
             criteriaContainer.setAttribute("streamid",x.body.streamid)
             const addCriteria = document.createElement("button")
             const addKeyVal = document.createElement("button")
             const deleteAggroot = document.createElement("button")
		 deleteAggroot.innerText="delete aggroot"
deleteAggroot.onclick=(e)=> {
 window.sub.next({
                     type: "delete",
                     sender: "aggroot.js deleteAggroot onclick()",
                     body:item
                 })
}
		 
             const streamid = document.createElement("span")
             const typeEl = document.createElement("span")
		 typeEl.innerText=x.body.type
             streamid.innerText = x.body.streamid
             const id = document.createElement("input")
             const fieldEl = document.createElement("input")
             id.value = x.body.id
             const format = document.createElement("input")
             format.value = x.body.format
                          fieldEl.setAttribute('list', 'typeList'+type.name)
             addCriteria.innerText = "addCriteria"
             addKeyVal.innerText = "addKeyVal"
             addCriteria.onclick = (e) => {
                 var typeObj = type.p[fieldEl.value]
                 var crit = {}
                 crit.field = fieldEl.value
                 //crit.field = "hejheje"
                 crit.op = "=="
                 crit.value = ""
                 crit.streamid = item.id
                 crit.format = "criteria"
                 window.sub.next({
                     type: "persist",
                     sender: "aggroot.js",
                     streamid: crit.streamid,
                     body: crit
                 })
             }
addKeyVal.onclick = (e) => {
                 var typeObj = type.p[fieldEl.value]
                 var crit = {}
                 crit.field = fieldEl.value
                 crit.value = ""
                     crit.streamid=item.id,
                 crit.format = "keyval"
	debugger
                 window.sub.next({
                     type: "persist",
                     sender: "aggroot.js",
                     streamid: item.streamid,
                     body: crit
                 })
             }
             const search = document.createElement("button")
		 search.formToObj=helper.formToObj
             search.innerText = "search"
             search.onclick = (e) => {
console.log(helper.formToObj(e.currentTarget.parentElement))
var tryy=Array.from(e.currentTarget.parentElement.querySelector("[streamid]").children)
.map((ele)=>{ return Array.from(ele.children)})
.map((field)=>{ 
	const obj={value:field.filter(it => it.id=='value')[0].value,field:field.filter(it => it.id=='field')[0].value,op:field.filter(it => it.id=='op')[0].value }
	return obj })

	    var fsto=window.fs.db.collection("event")
		     console.log(tryy)
tryy.map((crit) => {
            fsto = fsto.where(crit["field"], crit["op"], crit["value"])
        })
        fsto.get().then(function(docs) {
            docs.forEach((doc) => {
                console.log("criteria.js send()",doc.data());
            })
        })
	     }

             paramElement.appendChild(streamid)
             paramElement.appendChild(typeEl)
             paramElement.appendChild(fieldEl)
             paramElement.appendChild(addCriteria)
             paramElement.appendChild(addKeyVal)
             paramElement.appendChild(search)
             paramElement.appendChild(id)
             paramElement.appendChild(format)
             paramElement.appendChild(criteriaContainer)
             paramElement.appendChild(deleteAggroot)


             document.body.appendChild(paramElement)
         }
     })
 }
