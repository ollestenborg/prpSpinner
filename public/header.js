	export default class stream {
	    constructor({
	        helper
	    }) {
	        this.helper = helper
	    }
	    render() {
		this.identity="headers.js"
	        this.divElement = document.createElement('div')
		    this.divElement.setAttribute("header",true)
	        this.a = document.createElement('button')
	        this.inpu = document.createElement('input')
                this.saseHeader = document.createElement('button')
                this.saseHeader.innerText="saved Search"
this.saseHeader.onclick=function () {
sub.next({type:"getStream",body:{streamid:"H7aZzJgRGIKBtbIvgwLI"}})
}
const getTypes=helper.el("button",{
	innerText:"getTypes",
	onclick:()=>{
sub.next({type:"getStream",body:{streamid:"RlNCSNNBl5bqRYSdAbiW"}})
	    }
	    })
	        this.inpu.setAttribute("list", "types")
	        this.inpu.onchange = function() {}
	        this.a.streamid = this.streamid
	        this.a.inpu = this.inpu
	        this.a.innerText = 'create stream'
	        this.a.onclick = function() {
	            window.sub.next({
	                    type: 'persist',
	                    sender: this.identity,
	                    body: {
	                        field: "type",
	                        op: ":",
	                        value: this.inpu.value
	                    }
	                })
	            console.log("inpu", this.inpu.value)
	        }
	        console.log(this.identity)
    const arr = [this.saseHeader, getTypes, document.createElement('hr'), this.inpu, this.a]
arr.map((el) => this.divElement.appendChild(el))
	        return this.divElement
	    }
	}
