export default function(Criteria, domels) {
window.sub.subscribe(
        function(x) {
		this.identity="mountStream"
            const item = x.body
            if (x.type == "mountStream" && x.body.format == "criteria") {
            console.log("mountStreams",x)
const ele = document.getElementById('crits')
                ele.innerHTML = ""
                const newEle = document.createElement('div')
                newEle.id = item.streamid
                ele.appendChild(newEle)

                const that = this
	        this.divElement = document.createElement('div')
	        this.a = document.createElement('a')
	        this.streamid = document.createElement('input')
	        this.value = document.createElement('input')

	        this.value = x.body.value
//this.streamid.id=x.body.streamid;
	        this.field= x.body.field
	        this.a.onclick = function() {
console.log(that.streamid.value, that.field.value, that.value.value)
	            //this.getStream(this.streamid.value, that)
	        }
	        console.log(1)
	        this.divElement.appendChild(this.a)
	        this.divElement.appendChild(this.streamid)
	        console.log(this.divElement)
	        document.body(this.divElement)
		    return this.divElement
		    
            }
        })
}
