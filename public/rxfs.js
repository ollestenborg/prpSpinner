export default function({
    helper
}) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("rxfs")
            const item = x.body
            if (x.type == "persist") {

            console.log("rxfs persist", x)
                fs.db.collection("event").add(x.body).then(function(docRef) {
                    const obj = Object.assign(x.body, {
                        id: docRef.id
                    })
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
                fs.db.collection("event").doc(x.body.id).delete().then(function(docRef) {
                    console.log("Deleted: ", docRef);
                })
            }
        }
    )
}
