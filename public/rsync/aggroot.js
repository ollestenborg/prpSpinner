 export default function({
     domels,
     helper
 }) {
     window.sub.subscribe(function(x) {
         if  (x.type == "mountObject" && x.body.format == "ar") {
             console.log("aggroot.js", x)
             const type = domels.filter(it => it.name == x.body.type)[0]
             const item = x.body
             const paramElement = document.createElement("div")
             paramElement.style.padding = "8px"
             paramElement.style.margin = "8px"
             paramElement.style.borderStyle = "solid"
             paramElement.style.borderWidth = "thin"

             const criteria = helper.el("details", {
                 id: "criteria"
             })
             criteria.appendChild(helper.el("summary", {
                 innerText: "criteria"
             }))

             const actions = helper.el("details", {
                 id: "actions"
             })
             actions.appendChild(helper.el("summary", {
                 innerText: "actions"
             }))

             const diagnos = helper.el("details", {
                 id: "diagnos"
             })
             diagnos.appendChild(helper.el("summary", {
                 innerText: "diagnos"
             }))

             const keyval = Object.assign(document.createElement("details"), {
                 id: "keyval",
                 open: true
             })
             keyval.appendChild(Object.assign(document.createElement("summary"), {
                 innerText: "properties"
             }))

             const relation = Object.assign(document.createElement("details"), {
                 id: "relation"
             })
             relation.appendChild(Object.assign(document.createElement("summary"), {
                 innerText: "relation"
             }))

             const resultList = Object.assign(document.createElement("details"), {
                 id: "resultList"
             })
             resultList.appendChild(Object.assign(document.createElement("summary"), {
                 innerText: "resultList"
             }))

             paramElement.setAttribute("streamContainer", x.body.streamid)
             paramElement.streamid = x.body.id

             const criteriaContainer = document.createElement("div")
             criteriaContainer.setAttribute("streamid", x.body.streamid)
             const addCriteria = document.createElement("button")
             const from = document.createElement("button")
             const addRelation = document.createElement("button")
             addRelation.innerText = "addRelation"

             const addRelationOnclick = function() {
                 window.sub.next({
                     type: "mountObject",
                     sender: "aggroot.js deleteAggroot onclick()",
                     body: Object.assign(item, {
                         format: 'relation'
                     })
                 })
             }
             addRelation.addEventListener('click', addRelationOnclick.bind(this))

             const addKeyVal = document.createElement("button")
             const deleteAggroot = document.createElement("button")
             deleteAggroot.innerText = "delete aggroot"
             deleteAggroot.onclick = (e) => {
                 window.sub.next({
                     type: "delete_ar",
                     sender: "aggroot.js deleteAggroot onclick()",
                     body: item.id
                 })
             }
             const streamid = document.createElement("span")
             const typeEl = document.createElement("span")
             typeEl.innerText = x.body.type
             streamid.innerText = x.body.streamid
             const id = document.createElement("input")
             const fieldEl = document.createElement("input")
             fieldEl.placeholder = "fieldEl"
             id.value = x.body.id
             const format = document.createElement("input")
             format.value = x.body.format
             fieldEl.setAttribute('list', 'typeList' + x.body.type)
             addCriteria.innerText = "addCriteria"
             from.innerText = "from"
             addKeyVal.innerText = "addKeyVal"
             from.onclick = (e) => {

                 const parentElement = e.currentTarget.parentElement
                 if ([...document.querySelectorAll("[streamcontainer]")]) {
                     [...document.querySelectorAll("[streamcontainer]")].map(item => {
                         item.style.background = "grey"
                         item.setAttribute("selectedLatest", false)
                     })
                 }
                 parentElement.setAttribute("selected", true)
                 parentElement.style.background = "white"
                 parentElement.setAttribute("selectedLatest", true)
                 console.log(parentElement)
             }
             addCriteria.onclick = (e) => {
                 var crit = {}
                 crit.field = fieldEl.value
                 crit.op = ":"
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
                 crit.op = ":"
                 crit.value = ""
                 crit.streamid = item.id,
                     crit.format = "keyval"
                 window.sub.next({
                     type: "persist",
                     sender: "aggroot.js",
                     streamid: item.streamid,
                     body: crit
                 })
             }
             const search = document.createElement("button")
             search.formToObj = helper.formToObj
             search.innerText = "search"
             search.onclick = (e) => {

                 e.currentTarget.parentElement.querySelector("#resultList").setAttribute("open", true)
                 const parentElement = e.currentTarget.parentElement
                 console.log("formtoobj", helper.formToObj(e.currentTarget.parentElement.querySelector("#criteria>.criteria")))
                 debugger
                 var tryy = Array.from(e.currentTarget.parentElement.querySelectorAll("#criteria>.criteria"))
                     .map((ele) => {
                         console.log(ele)
                         return Array.from(ele.children)
                     })
                     .map((field) => {
                         console.log(field)
                         const obj = {
                             value: field.filter(it => it.id == 'value')[0].value,
                             field: field.filter(it => it.id == 'field')[0].value,
                             op: field.filter(it => it.id == 'op')[0].value
                         }
                         return obj
                     })

                 var fsto = window.fs.db.collection("read")
                 console.log(tryy)
                 tryy.map((crit) => {
                     fsto = fsto.where(crit["field"], crit["op"], crit["value"])
                 })
                 fsto.get().then(function(doc) {
                     window.sub.next({
                         type: "getResult",
                         streamid: parentElement.streamid,
                         sender: "aggroot.js deleteAggroot onclick()",
                         body: doc.docs
                     })
                 })
             }

             const ee = [streamid, id, format, typeEl].map((el) => diagnos.appendChild(el))
             const dd = [deleteAggroot, from].map((el) => actions.appendChild(el))
             const arr = [
                 fieldEl,
                 addCriteria,
                 addRelation,
                 addKeyVal,
                 search,
                 criteriaContainer,
                 resultList,
                 criteria,
                 actions,
                 diagnos,
                 keyval,
                 relation
             ]
             arr.map((el) => paramElement.appendChild(el))
             document.body.appendChild(paramElement)
         }
     })
 }
