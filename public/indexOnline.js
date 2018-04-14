	import initData from "https://rawgit.com/ollestenborg/public_repo/master/init_data.js"; 
        import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js" 
	import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js" 
	import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js" 
	import Template from "https://rawgit.com/ollestenborg/public_repo/master/template.js" 
        import formToObj from "https://rawgit.com/ollestenborg/public_repo/master/formToObj.js"
	import Firebase from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/firebase.js" 
	import aggroot from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/aggroot.js" 
	import rxfs from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/rxfs.js" 
        import Criteria from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/criteria.js"; 
	import Header from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/header.js"; 
        import GetStream from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/getStream.js";
	import mountStreams from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/mountStreams.js"; 
	import MountCriteria from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/mountCriteria.js"; 
	import mountResult from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/mountResultRow.js"; 
	import mountRelation from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/mountRelation.js"; 
	import mountKeyVal from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/mountKeyVal.js"; 
	import NewInstanceFromType from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/newInstanceFromType.js"; 
	import NewPrp from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/newPrp.js"; 
	import GetInstances from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/getInstances.js";
	import rxlog from "https://storage.googleapis.com/blazing-fire-5166.appspot.com/public/rxlog.js"; 
var app2 = new Vue({
  el: '#crits',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
export default function() {
	    const store = {}
	    const template = Template()
	    const fs = new Firebase(localStorage.getItem('apiKey'))
	    const htmlHelpers = HtmlHelpers({})
	    window.fs = fs
	    const helper = {
	        options,
	        datalist,
	        fs,
	        formToObj,
	        uuid,
	        el: htmlHelpers.el,
	        template,
	        html: htmlHelpers
	    }
	    const dispatcher = Dispatcher({})
	    window.actions = Actions({
	        helper,
	        dispatcher
	    })
	    const state = {
	        actions: window.actions,
	        helper,
	        store,
	        dispatcher
	    }
	    window.component = Componensts(state)
	    window.helper = helper

	    rxlog({
	        helper
	    })
	    aggroot({
	        helper
	    })
	    rxfs(state)
	    initData({
	        helper
	    })
	}
