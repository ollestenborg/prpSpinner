export default function({htmlHelpers, domEffects}){
	return (body)=>{
const elem=window.component["mountResultRow"](body)
					window.app.domEffects(elem, body)
					console.log(elem)
}
}
