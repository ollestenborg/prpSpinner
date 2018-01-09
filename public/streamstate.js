export default function(Criteria, domels) {
    const newEle = document.createElement('div')
    window.sub.subscribe(
        function(x) {
            console.log(x)
            const item = x.body
            if (item.type == "createStream") {
                fs.db.collection("event").add(item).then(function(docRef) {
                    const obj = docRef.data()
                    obj.id = docRef.id
                    const message = {
                        type: "created",
                        body: obj
                    }
                    window.sub.next(obj)
                    console.log("Document written with ID: ", docRef.id);
                })
            }
            switch (x.body.format) {
                case "ar":
                    newEle.id = item.streamid
                    const thisType = domels.filter((data) => data.name == item.type)[0]
                    debugger
                    Criteria.constructor(thisType, newEle, item.streamid)
                    break;
                case "cirteria":
                    console.log(item)
                    break;
                default:
                    debugger
                    console.log('Next: %s', x);
                    break;
            }
            console.log('Next: %s', x);
        })
}
