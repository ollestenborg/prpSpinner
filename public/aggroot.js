 export default function({
     domels,
     helper
 }) {
     window.sub.subscribe(function(x) {
	     debugger
         if (x.type == "mountObject" && x.body.format == "ar") {
         console.log("aggroot.js",x)
             const type = domels.filter(it => it.name == x.body.type)[0]
		 const item=x.body
             const paramElement = document.createElement("div")
             const criteriaContainer = document.createElement("div")
             criteriaContainer.setAttribute("streamid",x.body.streamid)
             const addCriteria = document.createElement("button")
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
             streamid.innerText = x.body.streamid
             const id = document.createElement("input")
             const typeEl = document.createElement("input")
             id.value = x.body.id
             const format = document.createElement("input")
             format.value = x.body.format
             var select = helper.datalist(Object.keys(type.p))
             select.id = "typeList"
             typeEl.setAttribute('list', 'typeList')
             addCriteria.innerText = "addCriteria"
             addCriteria.onclick = (e) => {
                 var typeObj = type.p[typeEl.value]
                 var crit = {}
                 crit.field = typeEl.value
                 //crit.field = "hejheje"
                 crit.op = "=="
                 crit.value = ""
                 crit.streamid = x.body.streamid
                 crit.format = "criteria"
                 window.sub.next({
                     type: "mountObject",
                     sender: "aggroot.js",
                     streamid: crit.streamid,
                     body: crit
                 })
             }
             const search = document.createElement("button")
             search.innerText = "search"
             search.onclick = () => {}

             paramElement.appendChild(streamid)
             paramElement.appendChild(typeEl)
             paramElement.appendChild(select)
             paramElement.appendChild(addCriteria)
             paramElement.appendChild(search)
             paramElement.appendChild(id)
             paramElement.appendChild(format)
             paramElement.appendChild(criteriaContainer)
             paramElement.appendChild(deleteAggroot)

             document.body.appendChild(paramElement)
         }
     })
 }
