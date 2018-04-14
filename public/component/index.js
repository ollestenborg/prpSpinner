//import Header from "./header.js"

export default function(app ){
	window.component={}
var thisPath=app.path
if(document.location.hostname.indexOf("localhost") != 0){
thisPath +="actions/"
}

window.hej=["streamDetails","manageDomels","appSelector","header","getStream","mountCriteriaTemplate","mountResultRow"].map(component=>{
import(thisPath+component+".js")
    .then((module) => {
	    if(component=="header"||component=="appSelector"||component=="manageDomels"||component=="streamDetails"){
      window.component[component]=new module.default(app);
	    }
	    else {
      window.component[component]=module.default(app);
}
	console.log(module)
    });
    });

 //       const header=new Header(state)

console.log(window.component.getStream)
        //document.body.appendChild(header.render())
	//document.body.appendChild(as.getStream)
	document.body.appendChild(document.createElement("hr"))
	return {
		component:window.component
}
}
