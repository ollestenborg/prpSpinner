	export default function({helper, dispatcher}) {
        return function(itemss={streamid:"edc67eed-a4ce-3ee3-d496-3227e00c9798",name:"mockStuff"}) {

var events = fs.db.collection("event");
document.querySelector("stream-details").renderHeader(itemss)
      events
        .where("streamid", "==", itemss.streamid)
        .get()
        .then(docs => {
const stde=document.querySelector("stream-details")
		  stde.clear()
          docs.forEach(doc => {
document.querySelector("stream-details").addCriteria(doc.data())
document.querySelector('#openDialog').click()
          });
        });
	            }
	    }
	    
