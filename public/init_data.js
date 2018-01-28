export default ({helper}) => {
const fsto=fs.db.collection("read")
            const prp = fsto.where("type","==","prpAttr")
            const whty = fsto.where("type","==","whty")

window.whty=[]
window.prp=[]
whty.get().then(function(docs) {
            docs.forEach((doc) => {

                console.log("criteria.js send()",doc.data());
		window.whty.push(doc.data())

	        		    })
const opt = helper.datalist(window.whty.map(na => na.name))
opt.id = "types"
	        document.body.appendChild(opt)

		    })
prp.get().then(function(docs) {
            docs.forEach((doc) => {
                console.log("criteria.js send()",doc.data());
		window.prp.push(doc.data())
		    })

	window.whty.forEach(function (item){
const curPrp=window.prp.filter((itemSub)=> itemSub.whty===item.name)	
debugger
var select = helper.datalist(curPrp.map(na => na.name))
		console.log(select)
		console.log("dfas",item)
             select.id = "typeList"+item.name
	        document.body.appendChild(select)
	})
})
}
