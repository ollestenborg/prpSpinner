	export default function({helper, dispatcher}) {
        return function(id) {
	                    var events = fs.db.collection("event")
	                    events.where("streamid","==",id).get().then((docs) => {
				   const toReturn=[] 
				    docs.forEach((doc)=>{
				    const obj=doc.data()
					    obj.value=obj.name
					    console.log("resut",obj)
					    obj.id=doc.id
					    toReturn.push(obj)
				    })
				    console.log(toReturn)

				    debugger
const lol=document.querySelector('#menu-header')
const domelsDetails=document.querySelector('domels-details')
domelsDetails.render(toRender)
lol.render(toReturn)
	                    })
		}
	 }
