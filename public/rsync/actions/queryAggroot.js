export default function({helper, dispatcher}) {
	const mockObj=[{value:"whty",field:"type",op:"=="}]
return function(query=mockObj) {
                 var fsto = window.fs.db.collection("read")
                 query.map((crit) => {
                     fsto = fsto.where(crit["field"], crit["op"], crit["value"])
                 })
                 fsto.get().then(function(docs) {
docs.forEach(doc=>{
                     dispatcher({
                         type: "mountResultRow",
                         sender: "aggroot.js deleteAggroot onclick()",
                         body: [Object.assign(doc.data(),{streamid:doc.id})]
                     })
                 })
			 document.body.appendChild(document.createElement("hr"))
                 })
             }}
