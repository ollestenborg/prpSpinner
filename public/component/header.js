export default class headerMenu extends HTMLElement {
	    constructor() {
		    super();
		    this.elementName='header-menu'
		    this.dispatcher=window.actions.queryAggroot
		    this.startMenu=[{value:"sase"}]
this.addEventListener('contextmenu', function(ev) {
console.log(this.onclick)
console.log(this)
})
	    }
attributeChangedCallback(name, oldValue, newValue){
	   this.render()
}
	    connectedCallback(startMenu) {
   this.render()
    }
render(startMenuArg){
this.innerHTML="<div></div>"
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
this.querySelector("div").appendChild(btn)
})
}
}
customElements.define("button-list", headerMenu);
