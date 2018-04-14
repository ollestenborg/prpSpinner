//import Header from "./header.js"

export default function(app ){
	window.component={}


window.hej=["getStream","mountCriteriaTemplate","mountResultRow"].map(component=>{
import(app.path+"component/"+component+".js")
    .then((module) => {
      window.component[component]=module.default(app);
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
