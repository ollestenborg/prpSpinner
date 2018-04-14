export default class appSelector extends HTMLElement {
	    constructor() {
		    super();
this.addEventListener('contextmenu', function(ev) {
console.log(this.onclick)
})
		    this.dispatcher=actions.mountDomels
		    this.startMenu=[{value:"cms",streamid:"4ed007aa-49f2-5348-8629-2481c6624084"},{value:"tasks",streamid:"552dd256-0b09-9c2c-f841-2803125f6403"}]
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
		btn.onclick=()=>{
const msg={value:btn.innerHTML,field:"type",op:"=="}
this.dispatcher(item2.id)
		}
		btn.innerHTML=item2.name
	this.querySelector("div").appendChild(btn)

	})
}
}
customElements.define('app-selector', appSelector);
