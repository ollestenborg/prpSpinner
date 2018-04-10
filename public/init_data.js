export default ({helper}) => {
	    window.fs = app.firebase
const events=window.events=window.fs.db.collection("event")
const fsto=window.fs.db.collection("read")
            const fun = fsto.where("type","==","fun")
            const prp = fsto.where("type","==","prpAttr")
            const action = fsto.where("type","==","action")
            const domels = fsto.where("type","==","domels")
            const sase = fsto.where("type","==","sase")
            const whty = fsto.where("type","==","whty")
            const currentDomel = events.where("streamid","==","4ed007aa-49f2-5348-8629-2481c6624084")
window.whtyList=[]
window.prpList=[]
window.funList={}
window.actionList=[]
window.domels=[]
window.sase=[]
window.currentDomel=[]
domels.get().then(function(docs) {
	docs.forEach((doc) => {
		let obj=Object.assign(doc.data(),{id:doc.id})
		window.domels.push(obj)
	})
	 
const hey=document.querySelector('#app-selector')
hey.render(window.domels)
})
sase.get().then(function(docs) {
	docs.forEach((doc) => {
		    let obj=Object.assign(doc.data(),{id:doc.id})
		window.sase.push(obj)
	})

	 
})
currentDomel.get().then(function(docs) {
	docs.forEach((doc) => {
		let obj=doc.data()
		obj.name=obj.value
		window.currentDomel.push(obj)
      })
})
fun.get().then(function(docs) {
            docs.forEach((doc) => {
		    let obj=doc.data()
window.funList[obj.name] = new Function(obj.args, obj.code)
		    })
	})
whty.get().then(function(docs) {
            docs.forEach((doc) => {

		window.whtyList.push(doc.data())

	        		    })
const opt = helper.datalist(window.whtyList.map(na => na.name))
opt.id = "types"
	        document.body.appendChild(opt)
		    })
prp.get().then(function(docs) {
            docs.forEach((doc) => {
		window.prpList.push(doc.data())
		    })

	window.whtyList.forEach(function (item){
const curPrp=window.prpList.filter((itemSub)=> itemSub.prp_type===item.name)	
var select = helper.datalist(curPrp.map(na => na.name))
             select.id = "typeList"+item.name
	        document.body.appendChild(select)
	})
})
action.get().then(function(docs) {
            docs.forEach((doc) => {
		console.log("dfas",docs)
let obj=doc.data()
window.actionList.push(obj)
})
})

}
