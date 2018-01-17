export default function({
    helper
}) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("rxfs")
            const item = x.body


            if (x.type == "get_data_from_db") {
		    x.body.filter.map(crit => {
const fsto=fs.db.collection("event")
            fsto = fsto.where(crit["field"], crit["op"], crit["value"])
fsto.get().then(function(docs) {
            docs.forEach((doc) => {
                console.log("criteria.js send()",doc.data());

		window.events.push(doc.data())
		localStorage.setItem(helper.uuid(),JSON.stringify(doc.data()))
            })
        })
})
}


            if (x.type == "persist") {
            console.log("rxfs persist", x)

                fs.db.collection("event").add(Object.assign(x.body,{inserted:new Date()})).then(function(docRef) {
                    const obj = Object.assign(x.body, {
                        id: docRef.id
                    })
			if(obj.format=="ar"){
		obj.streamid=obj.id
		}
				
                    const message = {
                        type: "mountObject",
                        body: obj,
                        sender: "rxfs"
                    }
                    window.sub.next(message)
                    console.log("Document written with ID: ", docRef.id);
                })
            } else if (x.type == "delete") {
            console.log("rxfs persist", x)
                fs.db.collection("event").doc(x.body).delete().then(function(docRef) {
                    console.log("Deleted: ", docRef);
                })
            }
        }
    )
}
