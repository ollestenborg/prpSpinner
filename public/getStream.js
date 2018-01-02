	export default class stream {
		constructor({store,helper}) {
		this.store=store
			this.helper=helper
		}
getStream(streamid, that) {
return new Promise((resolve, reject) => {
var events=that.helper.fs.db.collection("event")
events.where("aggregateRootId","==",streamid)
.get().then(function (docs) {
	self.wtg=docs.docs.map(it => it.data())
const body=docs.docs.map(it => it.data())
    	           resolve({type:'createStream',body:body})
})


})
	}
render() {
	const that=this
	this.divElement=document.createElement('div')
	this.a=document.createElement('a')
	this.streamid=document.createElement('input')

	this.a.streamid=this.streamid
	this.a.inpu=this.inpu
	this.a.innerText='getStream'
	this.a.store=this.store
	this.a.getStream=this.getStream
        this.a.onclick=function (){
		debugger

        this.store.dispatchPromise(this.getStream(this.streamid.value, that))	
        }
console.log(1)
this.divElement.appendChild(this.a)
this.divElement.appendChild(this.streamid)
		return this.divElement
}
}
