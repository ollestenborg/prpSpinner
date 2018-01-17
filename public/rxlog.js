export default function ({helper}){
	window.events=[]
window.sub.subscribe(
        function(x) {
this.identity=("rxlog")
		console.log("rxlog",x)
		//		circular dependencies cant be stringified
//		localStorage.setItem(helper.uuid(),JSON.stringify(x))
		window.events.push(x)
		})
}
