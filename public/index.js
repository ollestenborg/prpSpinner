import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js";
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js";
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js";
import Template from "https://rawgit.com/ollestenborg/public_repo/master/template.js";
import formToObj from "https://rawgit.com/ollestenborg/public_repo/master/formToObj.js";
//	import HtmlHelpers from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/common/htmlHelpers.js"
//import HtmlHelpers from "./common/htmlHelpers.js"
//import initData from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/init_data.js";
//import Firebase from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/firebase.js"
//import rxfs from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/rxfs.js"
//import Header from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/component/header.js";
//import Actions from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/actions/index.js";
//import Componensts from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/component/index.js";
//import HtmlHelpers from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/common/htmlHelpers.js";
//import Dispatcher from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/dispatcher.js";

export default function() {
  const app = {};
  app.actions = {};
  window.actions = app.actions;
  app.component = {};
  window.component = app.component;
  app.helper = {};
  app.store = {};
  app.firebaseApiKey = localStorage.getItem("apiKey");
  window.actions = app.actions;
  app.endPoint = {
    google:
      "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/",
    localhost: "localhost:3040"
  };
  app.webFiles = [
    {
      name: "firebase",
      fileType: "js",
      endPoint:"https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/",
      relativePath: "",
      returnType: "class"
    },
    {
      name: "htmlHelpers",
      fileType: "js",
      relativePath: "helper",
      endPoint:"https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/",
      returnType: "fun"
    },
    {
      name: "domEffects",
      fileType: "js",
      relativePath: "",
      returnType: "fun"
    },
    {
      name: "index",
      fileType: "js",
      relativePath: "actions",
      returnType: "fun"
    },
    {
      name: "index",
      fileType: "js",
      relativePath: "component",
      returnType: "fun",
      dependencies: ["helperhtmlHelpers"]
    },
    {
      name: "dispatcher",
      fileType: "js",
      relativePath: "",
      returnType: "fun",
      dependencies: ["helperhtmlHelpers"]
    },
    {
      name: "init_data",
      fileType: "js",
      relativePath: "",
      returnType: "fun",
      dependencies: ["firebase"]
    },
    {
      name: "rxfs",
      fileType: "js",
      relativePath: "",
      returnType: "fun"
    },
    {
      name: "start_app",
      fileType: "js",
      relativePath: "",
      returnType: "fun",
      dependencies: ["actionsindex"]
    },{
      name: "mountAppSelector",
      returnType: "execInline",
	    code:function(){

		    const menuHeader=new window.component.header.constructor();
		    const appSelector=new window.component.header.constructor();
		    menuHeader.dispatcher=function(item)
		    {
document.querySelector('domels-details').renderHeader(item)
document.querySelector('domels-details').clearAr()
window.actions.queryAggroot([{field:"type",op:"==",value:item.name}]).subscribe((data)=> {
	console.log("domels-details",data)
document.querySelector('domels-details').addAr(data)
//document.body.appendChild(component.mountResultRow(data))
})
		    }
		    appSelector.dispatcher=window.actions.mountApp
		    appSelector.id="app-selector"
		    menuHeader.id="menu-header"
		    document.body.prepend(menuHeader)
		    document.body.prepend(appSelector);
	    },
      dependencies: ["componentindex"]
    }
  ];
  const depLoaded = (window.depLoaded = []);

  window.rol = {};
  app.scope = "import";
  const loadModule = function(component) {
    depLoaded.push(component.relativePath + component.name);
	  if(component.returnType=="execInline"){
		  setTimeout(function (){
         component.code()
		  },1500)
	  }
	  else {
    import("./" +
      component.relativePath +
      "/" +
      component.name +
      "." +
      component.fileType).then(module => {
      var scope = app;
      if (component.relativePath != "") {
        scope = app[component.relativePath];
      }
      var argument = app;
      if (component.arguement) {
        component.arguement = app[component.relativePath];
      }

      if (component.returnType == "fun") {
        scope[component.name] = module.default(app);
      } else if (component.returnType == "class") {
        scope[component.name] = new module.default(app);
      } else if (component.returnType == "object") {
      }
      loadModulesInOrder();
      console.log(module);
    });
	  }
  };

  function loadModulesInOrder() {
    window.hej = app.webFiles.map(component => {
      if (depLoaded.indexOf(component.relativePath + component.name) == -1) {
        if (
          !component.dependencies ||
          depLoaded.indexOf(component.dependencies[0]) >= 0
        ) {
          loadModule(component);
        }
      }
    });
  }

  loadModulesInOrder();
  window.load = loadModulesInOrder;
  app.component = window.component;
  const dependencies = [];
  app.dispatcher = msg => {
    if (window.actions[msg.type]) {
      window.actions[msg.type](msg.body);
    } else {
      window.component[msg.type](msg.body[0]);
    }
  };
  console.log(document.location.hostname.indexOf("localhost") == 0);
  app.path =
    "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/";
  if (document.location.hostname.indexOf("localhost") == 0) {
    app.path = "./";
  }

  //app.htmlHelpers=HtmlHelpers()

  window.component = app.component;
  window.app = app;

  const template = Template();
  app.helper = {
    options,
    datalist,
    formToObj,
    uuid,
    template,
    html: app.helper.htmlHelpers
  };
  window.actions = app.actions;
  window.component = app.component;
}
