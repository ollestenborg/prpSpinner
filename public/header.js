	export default class stream {
	    constructor({
	        helper
	    }) {
	        //this.store=store
	        this.helper = helper
	    }
	    render() {
		    this.identity="headers.js"
	        this.opt = this.helper.datalist(domels.map(na => na.name))
	        this.divElement = document.createElement('div')
	        this.a = document.createElement('button')
	        this.inpu = document.createElement('input')
	        this.streamid = document.createElement('input')
		    this.streamid.value="tyu"
	        this.opt.id = "types"
	        this.inpu.setAttribute("list", "types")
	        this.inpu.onchange = function() {}
	        this.a.streamid = this.streamid
	        this.a.inpu = this.inpu
	        this.a.innerText = 'create stream'
	            //this.a.store=this.store
	        this.a.onclick = function() {
	            window.sub.next({
	                    type: 'persist',
	                    sender: this.identity,
	                    body: {
	                        format: "ar",
	                        type: this.inpu.value,
	                        streamid: this.streamid.value
	                    }
	                })
	                //this.store.dispatch({type:'createStream',body:[{format:"ar",type:this.inpu.value,streamid:this.streamid.value}]})	
	            console.log("inpu", this.inpu.value)
	        }
	        console.log(this.identity)
	        this.divElement.appendChild(this.opt)
	        this.divElement.appendChild(this.inpu)
	        this.divElement.appendChild(this.a)
	        this.divElement.appendChild(this.streamid)
	        return this.divElement
	    }
	}
