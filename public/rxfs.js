export default function({
    helper
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


            if (x.type == "persist") {
                console.log("rxfs persist", x)
		    if(!x.body.id){
x.body.id=helper.uuid()
		    }
		fs.db.collection("event").doc(x.body.id).set(Object.assign(x.body, {
                    inserted: new Date()
                })).then(function() {
                    if (x.body.field=="type" && x.body.op==":") {
                        x.body.streamid = x.body.id
                    }
                    const message = {
                        type: "mountObject",
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
