export default function({
    helper, dispatcher
}) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("rxfs")
            const item = x.body


            if (x.type == "get_data_from_db") {
                x.body.filter.map(crit => {
                    const fsto = fs.db.collection("event")
                    fsto = fsto.where(crit["field"], crit["op"], crit["value"])
                    fsto.get().then(function(docs) {
                        docs.forEach((doc) => {
                            console.log("criteria.js send()", doc.data());

                            window.events.push(doc.data())
                            localStorage.setItem(helper.uuid(), JSON.stringify(doc.data()))
                        })
                    })
                })
            }


            if (x.type == "addAgg") {
console.log("rxfs persist", x)
		    if(!x.body.id){
x.body.id=helper.uuid()
		    }
		fs.db.collection("event").doc(x.body.id).set(Object.assign(x.body, {
                    inserted: new Date()
                })).then(()=> {
                        x.body.streamid = x.body.id
				debugger
		fs.db.collection("read").doc(x.body.id).set({type:x.body.value}).then(docRef=>{
fs.db.collection("read").doc(x.body.id).get().then((data)=>{
const obj=data.data()
	obj.streamid=data.id
	obj.id=data.id
                   console.log(data.data()) 
const message = {
                        type: "mountResultRow",
                        body: obj,
                        sender: "rxfs"
                    }
	dispatcher(message)
})
			})
		    })}
            if (x.type == "persist") {
                console.log("rxfs persist", x)
		    if(!x.body.id){
x.body.id=helper.uuid()
		    }
		fs.db.collection("event").doc(x.body.id).set(Object.assign(x.body, {
                    inserted: new Date()
                })).then(function() {
                        x.body.streamid = x.body.id
                    const message = {
                        type: "mountCriteria",
                        body: x.body,
                        sender: "rxfs"
                    }
                    
                    window.sub.next(message)
                })
            }  
		else if (x.type == "delete_ar") {
	fs.db.collection("read").doc(x.body).delete().then(function() {
                    console.log("Deleted on read: ", x.body);
                })
fs.db.collection("event").doc(x.body).delete().then(function() {
                    console.log("Deleted: ", x.body);
                    document.querySelector('[evententityid="' + x.body + '"]').remove()
                })
	}
		else if (x.type == "delete") {
		    
                console.log("rxfs persist", x)
                fs.db.collection("event").doc(x.body).delete().then(function() {
                    console.log("Deleted: ", x.body);
                    document.querySelector('[evententityid="' + x.body + '"]').remove()
                })
            }
        }
    )
}
