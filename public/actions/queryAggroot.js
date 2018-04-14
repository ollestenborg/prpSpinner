export default function({helper, dispatcher}) {
	const mockObj=[{value:"whty",field:"type",op:"=="}]
return function(query=mockObj) {
	return new Rx.Observable(observer => {
                 var fsto = window.fs.db.collection("read")
                 query.map((crit) => {
                     fsto = fsto.where(crit["field"], crit["op"], crit["value"])
                 })
                 return fsto.get().then(function(docs) {
docs.forEach(doc=>{
	observer.next(Object.assign(doc.data(),{streamid:doc.id}))
                 })
			 document.body.appendChild(document.createElement("hr"))
                 })
	})
             }}
