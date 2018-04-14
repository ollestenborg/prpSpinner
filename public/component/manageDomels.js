export default class headerMenu extends HTMLElement {
	    constructor() {
		    super();
		    console.log("asdfsadf")
		    this.elementName='header-menu'
		    this.dispatcher=window.actions.queryAggroot
		    this.startMenu=[{value:"sase"}]
	    }
attributeChangedCallback(name, oldValue, newValue){
	   this.render()
}
	    connectedCallback(startMenu) {

   this.render()
    }
renderHeader(item){
this.querySelector("#header").innerHTML=`<button id="addType">add${item.name}</button>
		<button>${JSON.stringify(item)}</button>`
	const name = prompt("Please enter your name", "Harry Potter");
	this.querySelector("#addType").onclick=function () {
		actions.newStream(item.name)
	}
	}
	clearAr(ar){
this.querySelector("#list").innerHTML=""
	}
	addAr(ar) {
		console.log(77,ar)
const el=component.mountResultRow(ar)
	this.querySelector("#list").appendChild(el)
	}
render(startMenuArg){
		    console.log(startMenuArg)
this.innerHTML=`
		<div id="header" style="border-width:1px">lol</div>
		<div id="list" style="border-width:1px">lol</div>`
	if(startMenuArg){
	this.startMenu=startMenuArg
	}
this.startMenu.map((item2)=>{
	 const btn=document.createElement("button")
		btn.innerHTML=item2.name
		btn.onclick=()=>{
         actions.newInstanceFromType(item2.name)
		}
this.querySelector("#list").innerText=JSON.stringify(startMenuArg)
//this.querySelector("#list").appendChild(btn)
})
}
}
customElements.define("domels-details", headerMenu);
document.body.appendChild(document.createElement("domels-details"))
