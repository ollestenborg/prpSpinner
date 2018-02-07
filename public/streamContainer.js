export default function ({helper}){
return function (){

const addInstanceOfArchetype=helper.el("button", {
	     id: "addInstanceelem",onclick:function(item) {
		     let name=Array.from(item.currentTarget.parentElement.querySelectorAll("[evententityid]")).filter(item => item.querySelector("#field").value=="name")[0].querySelector("#value").value
                newInstanceFromType(name)
             },innerText:"addInstanceOfArchetype"
             })
const addInstanceOfSameType=helper.el("button", {
	     id: "addInstanceelem",onclick:function(item) {
                newInstanceFromType(item.currentTarget.parentElement.item.value)
             },innerText:"addInstanceOfSameType"
             })
const getInstancesElem=helper.el("button", {
	     id: "getInstancesElem",onclick:function(item) {

		     let name=Array.from(item.currentTarget.parentElement.querySelectorAll("[evententityid]")).filter(item => item.querySelector("#field").value=="name")[0].querySelector("#value").value


                getInstances(name)
             },innerText:"getInstances"
             })

             const criteria = helper.el("details", {
                 id: "criteria"
             })
             criteria.appendChild(helper.el("summary", {
                 innerText: "criteria"
             }))

             const actions = helper.el("details", {
                 id: "actions"
             })
             actions.appendChild(helper.el("summary", {
                 innerText: "actions"
             }))

             const diagnos = helper.el("details", {
                 id: "diagnos"
             })
             diagnos.appendChild(helper.el("summary", {
                 innerText: "diagnos"
             }))

             const keyval = Object.assign(document.createElement("details"), {
                 id: "keyval",
                 open: true
             })
             keyval.appendChild(Object.assign(document.createElement("summary"), {
                 innerText: "keyval"
             }))

             const relation = Object.assign(document.createElement("details"), {
                 id: "relation"
             })
             relation.appendChild(Object.assign(document.createElement("summary"), {
                 innerText: "relation"
             }))

             const resultList = Object.assign(document.createElement("details"), {
                 id: "resultList"
             })
             resultList.appendChild(Object.assign(document.createElement("summary"), {
                 innerText: "resultList"
             }))


//             const from = document.createElement("button")

	return [criteria,actions,diagnos,keyval,relation,resultList, addInstanceOfArchetype, getInstancesElem,addInstanceOfSameType]
             }
}

