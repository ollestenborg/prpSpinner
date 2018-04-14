import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"
//document.body.appendChild(component.mountResultRow())
export default function({helper, dispatcher}) {
	helper.el=helper.htmlHelpers.el
	const mockObj=[{id:"getStream",name:"nameVal",type:"typeVal",streamid:"getStream"}]
return function(aggregateDocs=mockObj) {
	const list = aggregateDocs.length?aggregateDocs:[aggregateDocs]
       const row = document.createElement('div')
             row.style.padding = "8px"
             row.style.margin = "8px"
             row.style.borderStyle = "solid"
             row.style.borderWidth = "thin"
	row["data-toggle"]="modal"
	row["data-target"]="#exampleModal"
	row.setAttribute("data-target","#exampleModal")
	row.setAttribute("data-toggle","modal")
	row.onclick=function (){
	}
	row.fileName="mountResultRow"
        list.map(docc => {
	docc.elementInstance=helper.uuid()
	const ele=document.createElement('div')
        row.setAttribute("streamcontainer",docc.streamid)
        window.actionList.map(item=>{
	const btn= Object.assign(document.createElement("button"), {
            innerText: item.name,
		className:"btn-lg btn-outline-primary",
		type:"button",
            onclick: e => {
                dispatcher({
                    type: item.name,
                    sender: "criteria.js > "+item.name,
                    body: [docc]
                })
            }
        })
btn.setAttribute("contextmenu",e => {
               console.log(btn) 
            })
	ele.appendChild(btn)
		btn.style.margin="8px"
		console.log(btn.onclick)
	})
const text=document.createElement('span')
	switch(docc.type) {
		case "whty":
			
	text.innerText=docc.name ? docc.name : "xxx"
	//text.innerText+=docc.id
			break;
		default:
	text.innerText=JSON.stringify(docc)
			    break;
	}
	const details=document.createElement("details")
const detailsList=["criteria","actions","diagnos","keyval","relation","resultList"].map(item=>{
	const criteria = helper.el("details", {
		id: item,open:true
        })

          criteria.appendChild(helper.el("summary", {
            innerText: item
        }))
details.appendChild(criteria)
		return criteria
	})
	details.id="details"

	row.appendChild(text)
	row.appendChild(ele)
	row.appendChild(details)
})
	return row
}}
