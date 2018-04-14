export default function({
    helper, dispatcher
}) {

	return function(body={name:"test123"}) {
		return new Promise((resolve, reject) => {
const doc=Object.assign(body, {
                    inserted: new Date()
                })
			const id= helper.uuid()
fs.db.collection("event").doc(id).set({field:"type",value:doc.type,op:":"}).then((back)=> {
	

fs.db.collection("read").doc(id).set({type:doc.type}).then((back)=> {
fs.db.collection("read").doc(id).get().then((readObj)=>{
	const theObj=readObj.data()
	theObj.id=readObj.id
						resolve(theObj)
})
})
	})
	})
}}



//fetch("https://us-central1-blazing-fire-5166.cloudfunctions.net/triggerInsert",{body:doc,mode: 'cors'}).then((data)=>{
//resolve(data)
//})

