	export default class stream {
	    constructor({
	        helper
	    }) {
	        //this.store=store
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
sub.next({type:"getStream",body:{streamid:"uPR61VKut1XbuLeRWGWN"}})
	    }
	    })

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
	                        type: this.inpu.value
	                    }
	                })
	                //this.store.dispatch({type:'createStream',body:[{format:"ar",type:this.inpu.value,streamid:this.streamid.value}]})	
	            console.log("inpu", this.inpu.value)
	        }
	        console.log(this.identity)
    const arr = [this.saseHeader, getTypes, document.createElement('hr'), this.inpu, this.a]
arr.map((el) => this.divElement.appendChild(el))
	        return this.divElement
	    }
	}
