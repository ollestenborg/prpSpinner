	export default class stream {
	    constructor({
	        helper
	    }) {
	        //this.store=store
	        this.helper = helper
	    }

	    getStream(streamid, that) {
	        return new Promise((resolve, reject) => {
	            var events = fs.db.collection("event")
	            events.where("streamid", "==", streamid)
	                .get().then(function(docs) {
	                    const bodies=docs.docs.map(it => {
				   return Object.assign(it.data(),{id:it.id})
			    })
		const ar=bodies.filter(body => body.format=="ar")[0]

window.sub.next({
	                            type: 'mountObject',
	                            sender: "getStream",
	                            body: ar
	                        })

		const criterias=bodies.filter(body => body.format=="criteria")
				setTimeout(
	                    criterias.map(body => {

	                        window.sub.next({
	                            type: 'mountObject',
	                            sender: "getStream",
	                            body: body
	                        })
	                    }),500)
	                    const body = docs.docs.map(it => it.data())
	                        // resolve({type:'createStream',body:body})
	                })
	        })
	    }
	    render() {
		    console.log("getStream")
	        const that = this
	        this.divElement = document.createElement('div')
	        this.a = document.createElement('button')
	        this.streamid = document.createElement('input')
this.streamid.value="tyu"
	        this.a.streamid = this.streamid
	        this.a.inpu = this.inpu
	        this.a.innerText = 'getStream'
	            //this.a.store=this.store
	        this.a.getStream = this.getStream
	        this.a.onclick = function() {

	            this.getStream(this.streamid.value, that)
	        }
	        this.divElement.appendChild(this.streamid)
	        this.divElement.appendChild(this.a)
	        return this.divElement
	    }
	}
