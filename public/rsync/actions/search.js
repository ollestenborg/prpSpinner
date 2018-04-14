export default function({helper}) {
return function(e) {

                 e.currentTarget.parentElement.querySelector("#resultList").setAttribute("open", true)
                 const parentElement = e.currentTarget.parentElement
	debugger
                 console.log("formtoobj", helper.formToObj(e.currentTarget.parentElement.querySelector("#criteria>.criteria")))
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
                         streamid: parentElement.getAttribute("streamcontainer"),
                         sender: "aggroot.js deleteAggroot onclick()",
                         body: doc.docs
                     })
                 })
             }}
