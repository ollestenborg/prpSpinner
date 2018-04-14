export default function (app){
return function (message){
	const domEffects=app.htmlHelpers.domEffects
				//window.sub.next(message)
				console.log("disp",message)
				if(message.type=="addPrpAttr"){
const elem=window.component["mountCriteriaTemplate"](message.body[0])
					domEffects(elem,message.body[0])
					console.log(elem)
				}
				if(message.type=="mountResultRow"){
const elem=window.component["mountResultRow"](message.body)
					domEffects(elem, message.body)
					console.log(elem)
				}
				if(message.type=="mountCriteria"){
const elem=window.component["mountCriteriaTemplate"](message.body)
					domEffects(elem, message.body)
					console.log(elem)
				}
				if(message.type=="getStream"){
                                window.actions.getStream(message.body)
				}
				if(message.type=="addInstanceOfArch"){
window.actions.newInstanceFromType(message.body[0].name)
				}
				if(message.type=="delete_ar"){
fs.db.collection("read").doc(message.body[0].streamid).delete().then(()=>{
console.log("read deleted")
fs.db.collection("event").where("streamid","==",message.body[0].streamid).get().then(items=>{
	items.forEach(item=>{
	item.ref.delete()
console.log("event deleted")
})
}).catch(function(error) {
    console.error("Error removing evevt document: ", error);
});
}).catch(function(error) {
    console.error("Error removing read document: ", error);
});


					}
				if(message.type=="getInstances"){
window.actions.queryAggroot([{field:"type",op:"==",value:message.body[0].name}])
				}
			}}
