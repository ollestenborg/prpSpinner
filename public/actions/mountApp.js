export default function({helper, dispatcher}) {
        return function(item) {
	                    var events = fs.db.collection("event")
	                    events.where("streamid","==",item.id).get().then((docs) => {
				   const toReturn=[] 
				    docs.forEach((doc)=>{
				    const obj=doc.data()
					    obj.name=obj.value
					    console.log("resut",obj)
					    obj.id=doc.id
					    toReturn.push(obj)
				    })
				    console.log(toReturn)
const lol=document.querySelector('#menu-header')
lol.render(toReturn)
	                    })
		}
	 }
