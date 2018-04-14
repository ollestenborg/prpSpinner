import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"
import SpecialFields from "./specialFields.js"
import MountCriteriaTemplate from "./mountCriteriaTemplate.js"

export default function({helper, dispatcher}) {
const specialFields=SpecialFields({helper})
return function(item) {
    window.sub.subscribe(
        function(x) {
            this.identity = ("mountCriteria")
            const item = x.body
            if (x.type == "mountObject") {
                const divElement = template(x.body)
		    if(x.body.field=="type" && x.body.op==":"){
	const crit=helper.el("div",{id:"criteria"})
divElement.appendChild(crit)
	divElement.setAttribute("streamcontainer",x.body.id)
                document.body.appendChild(divElement)
}else{
var streamDiv
			    if(x.body.op==":"){
		    streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#keyval');
			    }
			    else if(x.body.op=="=="){
		    streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#criteria');
			    }

			    else if(x.body.op=="rel"){
		    streamDiv=document.querySelector('[streamcontainer="'+x.body.streamid+'"]>#relation');
			    
			    }
                streamDiv.appendChild(divElement)
}
	    
                return divElement
}
})

}
}
