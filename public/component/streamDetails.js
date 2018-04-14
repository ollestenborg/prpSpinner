export default class headerMenu extends HTMLElement {
	    constructor() {

		    super();
		    this.dispatcher=window.actions.queryAggroot
		    this.startMenu=[{value:"sase"}]
	    }

	    connectedCallback(startMenu) {
   this.render()
    }
	clear(){
this.querySelector("#list").innerHTML=""
	}
	renderHeader(item){
	const ele2=document.createElement("div")
ele2.innerHTML=`<button>add${item.name}</button>
		<button>${JSON.stringify(item)}</button>`

this.querySelector("#header").appendChild(ele2)
		console.log('ele2',ele2)
		return 1
	}
	addCriteria(ar){
		console.log(77,ar)
            const elem = window.component["mountCriteriaTemplate"](ar);
	this.querySelector("#list").appendChild(elem)
	}
render(startMenuArg){
	this
this.innerHTML=`
<div class="modal" id="exampleModal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
		<div id="header" style="border-width:1px">
		
		</div>
		<div id="list" style="border-width:1px">lol</div>
    </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
		    console.log(startMenuArg)

	if(startMenuArg){
	this.startMenu=startMenuArg
	}
this.startMenu.map((item2)=>{
	 const btn=document.createElement("button")
		btn.innerHTML=item2.name
		btn.onclick=()=>{
const msg={value:btn.innerHTML,field:"type",op:"=="}
		this.dispatcher(item2)
		}
this.querySelector("#list").innerText=JSON.stringify(startMenuArg)
//this.querySelector("#list").appendChild(btn)
})
const details=document.createElement("details")
const detailsList=["criteria","actions","diagnos","keyval","relation","resultList"].map(item=>{
	const criteria = Object.assign(document.createElement("details"), {
		id: item,open:true
        })

          criteria.appendChild(Object.assign(document.createElement("summary"), {
            innerText: item
        }))

this.appendChild(criteria)
		return criteria
	})
	details.id="details"

}
}
customElements.define("stream-details", headerMenu);
document.body.appendChild(document.createElement("stream-details"))
