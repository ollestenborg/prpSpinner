export default function({
    helper, dispatcher
}) {

	return function(type="sase") {
		return new Promise((resolve, reject) => {
const name=prompt("name")
	const inserted=new Date()

			const id= helper.uuid()

fs.db.collection("event").doc(id).set({field:"type",value:type,op:":",streamid:id}).then((back1)=> {
fs.db.collection("event").doc(id).set({field:"name",value:name,op:":",streamid:id}).then((back)=> {

fs.db.collection("read").doc(id).set({type:type,name:name,inserted:inserted,streamid:id}).then((back)=> {
fs.db.collection("read").doc(id).get().then((readObj)=>{
	const theObj=readObj.data()
	theObj.id=readObj.id
	theObj.streamid=theObj.id
	console.log(theObj)
document.querySelector('domels-details').addAr(theObj)
	actions.getStream(theObj)

						resolve(theObj)

})
})
	})
	})
	})
}}



//fetch("https://us-central1-blazing-fire-5166.cloudfunctions.net/triggerInsert",{body:doc,mode: 'cors'}).then((data)=>{
//resolve(data)
//})


