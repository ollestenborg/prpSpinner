	export default function({helper, dispatcher}) {
        return function(itemss) {
	                    var events = fs.db.collection("event")
		Array.from(itemss).map(item=>{
		if(item.streamid){
			{merge:true}
	                    events.where("streamid","==",item.streamid).get().then((docs) => {
				    docs.forEach((doc)=>{
				    const obj=doc.data()
					    console.log("resut",obj)
					    obj.id=doc.id
	                        dispatcher({
	                            type: 'mountCriteria',
	                            sender: "getStream",
	                            body: {
	                                field: obj.field,
	                                op: obj.op,
	                                value: obj.value,
	                                streamid: obj.streamid,
	                                id: obj.id
	                            }
	                        })
				    })
	                    })
				    document.body.appendChild(document.createElement("hr"))
		}
		})
	            }
	    }
	    
