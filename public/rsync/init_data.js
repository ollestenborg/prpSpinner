export default ({helper}) => {
const fsto=window.fs.db.collection("read")
            const fun = fsto.where("type","==","fun")
            const prp = fsto.where("type","==","prpAttr")
            const action = fsto.where("type","==","action")
            const whty = fsto.where("type","==","whty")
window.whtyList=[]
window.prpList=[]
window.funList={}
window.actionList=[]
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
window.actions.queryAggroot()
})

}
