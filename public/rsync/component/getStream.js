export default function({dispatcher}) {
	        const divElement = document.createElement('div')
	        const a = document.createElement('button')
	        const streamid = document.createElement('input')
	        streamid.value = "jmxJib3gw1OMqRDrMWZX"
	        a.innerText = 'getStream'
	        a.onclick = () => {
	            dispatcher({
	                type: "getStream",
	                body: {
	                    streamid: streamid.value
	                }
	            })
	        }
	        divElement.appendChild(streamid)
	        divElement.appendChild(a)
	        return divElement
	    }
