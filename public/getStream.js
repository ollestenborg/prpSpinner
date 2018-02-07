	export default class stream {
	    constructor({
	        helper
	    }) {
	        //this.store=store
	        this.helper = helper
	        this.getStream()
	    }
	    getStream() {
	        window.sub.subscribe(
	            function(x) {
	                const item = x.body
	                if (x.type == "getStream") {
	                    var events = fs.db.collection("event")
	                    events.doc(item.streamid).get().then(function(doc) {
	                        console.log("int", doc.data())
	                        const obj = doc.data()
	                        obj.streamid = doc.id
	                        obj.id = doc.id
	                        window.sub.next({
	                            type: 'mountObject',
	                            sender: "getStream",
	                            body: {
	                                format: "criteria",
	                                field: "type",
	                                op: ":",
	                                value: obj.value,
	                                streamid: obj.streamid,
	                                id: doc.id
	                            }

	                        })
	                        //window.sub.next({
	                        //    type: "mountObject",
	                        //    sender: "rxfs",
	                        //    streamid: item.streamid,
	                        //    body: {
	                        //        field: "name",
	                        //        op: ":",
	                        //        value: "",
	                        //        format: "criteria",
	                        //        streamid: item.streamid
	                        //    }
	                        //})
	                    })
	                    events.where("streamid", "==", item.streamid)
	                        .get().then(function(docs) {
	                            const bodies = docs.docs.map(it => {
	                                return Object.assign(it.data(), {
	                                    id: it.id
	                                })
	                            })

	                            setTimeout(
	                                bodies.map(body => {
	                                    window.sub.next({
	                                        type: 'mountObject',
	                                        sender: "getStream",
	                                        body: body
	                                    })
	                                }), 500)

	                            //const body = docs.docs.map(it => it.data())
	                        })
	                }
	            })
	    }
	    render() {
	        console.log("getStream")
	        const that = this
	        this.divElement = document.createElement('div')
	        this.a = document.createElement('button')
	        this.streamid = document.createElement('input')
	        this.streamid.value = "jmxJib3gw1OMqRDrMWZX"
	        this.a.streamid = this.streamid
	        this.a.inpu = this.inpu
	        this.a.innerText = 'getStream'
	            //this.a.store=this.store
	        this.a.getStream = this.getStream
	        this.a.onclick = function() {
	            sub.next({
	                type: "getStream",
	                body: {
	                    streamid: this.streamid.value
	                }
	            })
	        }
	        this.divElement.appendChild(this.streamid)
	        this.divElement.appendChild(this.a)
	        return this.divElement
	    }
	}
