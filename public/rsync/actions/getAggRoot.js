	export default function({helper, dispatcher}) {
        return function(item={streamid:"984e7a79-aaf2-bfef-41c5-9192911063d1"}) {
	                    var read = fs.db.collection("read")
		if(item.streamid){
	                    read.doc(item.streamid).get().then((doc) => {
				    const obj=doc.data()
	                        dispatcher({
	                            type: 'mountResultRow',
	                            sender: "getAggRoot",
                                    body: [Object.assign(doc.data(),{streamid:doc.id})]
	                        })
	                    })
		}
	            }
	    }
	    
