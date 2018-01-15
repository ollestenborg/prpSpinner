export default function ({helper}){
window.sub.subscribe(
        function(x) {
this.identity=("rxlog")
		console.log("rxlog",x)
		localStorage.setItem(helper.uuid(),JSON.stringify(x))
		})
}
