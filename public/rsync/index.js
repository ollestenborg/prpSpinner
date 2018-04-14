	import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
	import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
	import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"
	import Template from "https://rawgit.com/ollestenborg/public_repo/master/template.js"
	import formToObj from "https://rawgit.com/ollestenborg/public_repo/master/formToObj.js"
	//import HtmlHelpers from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/common/htmlHelpers.js"
	import HtmlHelpers from "./common/htmlHelpers.js"
        //import initData from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/init_data.js";
	//import Firebase from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/firebase.js"
	//import rxfs from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/rxfs.js"
	//import Header from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/component/header.js";
	//import Actions from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/actions/index.js";
	//import Componensts from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/component/index.js";
	//import HtmlHelpers from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/common/htmlHelpers.js";
	//import Dispatcher from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/dispatcher.js";

	export default function() {
		const app={}
		console.log(document.location.hostname.indexOf("storage.googleapis.com") == 0)
	app.path="https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/"
if(document.location.hostname.indexOf("localhost") == 0){
app.path="./"
}	
		app.store = {}
		app.htmlHelpers=HtmlHelpers()
	     var fs
		window.fs=fs
import("./firebase.js")
    .then((module) => {
      window.fs=new module.default(localStorage.getItem('apiKey'));
	console.log(module)
    });

import("./domEffects.js")
    .then((module) => {
      app.htmlHelpers.domEffects=module.default(app);
	console.log(module)
    });


import(app.path+"actions/index.js")
    .then((module) => {
      app["actions"]=module.default(app);
	console.log(module)
    });
window.hej=["dispatcher"].map(component=>{
import(app.path+component+".js")
    .then((module) => {
      app[component]=module.default(app);
	console.log(module)
    });
    });
window.component=app.component
window.app=app

	    const template = Template()
	    window.fs = fs
	    app.helper = {
	        options,
	        datalist,
	        fs,
	        formToObj,
	        uuid,
	        el: app['htmlHelpers']['el'],
	        template,
	        html: app.htmlHelpers
	    }



	    setTimeout(()=>{
window.hej=["component/index.js","rxfs.js","init_data.js"].map(component=>{
import(app.path+component)
    .then((module) => {
      app[component]=module.default(app);
	console.log(module)
    });
    });
	    },500)

	    
		window.actions=app.actions


	    window.component = app.component
	}
