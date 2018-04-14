export default function({htmlHelpers}){
	return (body)=>{
const elem=window.component["mountCriteriaTemplate"](body)
					window.app.domEffects(elem, body)
					console.log(elem)
}
}
