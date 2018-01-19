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
paramElement.streamid=x.body.id
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
		 
             const resultList = document.createElement("div")
             const streamid = document.createElement("span")
             const typeEl = document.createElement("span")
	     typeEl.innerText=x.body.type
             streamid.innerText = x.body.streamid
             const id = document.createElement("input")
             const fieldEl = document.createElement("input")
             id.value = x.body.id
             const format = document.createElement("input")
             format.value = x.body.format
                          fieldEl.setAttribute('list', 'typeList'+x.body.type)
             addCriteria.innerText = "addCriteria"
             addKeyVal.innerText = "addKeyVal"
             addCriteria.onclick = (e) => {
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
                 var crit = {}
                 crit.field = fieldEl.value
                 crit.value = ""
                     crit.streamid=item.id,
                 crit.format = "keyval"
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

	//const onclickk=function(e) { docs.forEach((doc) => { 
	//e.currentTarget.parentElement.appendChild(doc.data()) console.log("criteria.js send()",doc.data()); 
	 //}) }

             search.onclick = (e) => {
		     const parentElement=e.currentTarget.parentElement
console.log(helper.formToObj(e.currentTarget.parentElement))
var tryy=Array.from(e.currentTarget.parentElement.querySelector("[streamid]").children)
.map((ele)=>{ return Array.from(ele.children)})
.map((field)=>{ 
	const obj={value:field.filter(it => it.id=='value')[0].value,field:field.filter(it => it.id=='field')[0].value,op:field.filter(it => it.id=='op')[0].value }
	return obj })

	    var fsto=window.fs.db.collection("read")
		     console.log(tryy)
tryy.map((crit) => {
            fsto = fsto.where(crit["field"], crit["op"], crit["value"])
        })
        fsto.get().then(function (doc){
		debugger
 window.sub.next({
                     type: "getResult",
	        streamid: parentElement.streamid,
                     sender: "aggroot.js deleteAggroot onclick()",
                     body:doc.docs
                 })
})
}

             paramElement.appendChild(streamid)
             paramElement.appendChild(typeEl)
             paramElement.appendChild(fieldEl)
             paramElement.appendChild(addKeyVal)
             paramElement.appendChild(addCriteria)
             paramElement.appendChild(search)
             paramElement.appendChild(id)
             paramElement.appendChild(format)
             paramElement.appendChild(criteriaContainer)
             paramElement.appendChild(deleteAggroot)
             paramElement.appendChild(resultList)


             document.body.appendChild(paramElement)
         }
     })
 }
