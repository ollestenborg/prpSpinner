export default function({helper, dispatcher}){
	const mockObj={}
return function(item=mockObj){
		    if(!item.id){
x.body.id=helper.uuid()
		    }
		fs.db.collection("event").doc(x.body.id).set(Object.assign(x.body, {
                    inserted: new Date()
                })).then(function() {
                        x.body.streamid = x.body.id
                    const message = {
                        type: "mountCriteria",
                        body: x.body,
                        sender: "rxfs"
                    }
			dispatcher(message)
                    
                   // window.sub.next(message)
                })

}}

