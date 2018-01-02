import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"
//var cons=crit.constructor(domels.filter((data)=>data.name=="credit_check")[0],document.body)
//crit.render()


function criteria() {
    this.criteria = []
    this.create = ({dependencies}) => {
	    this.dependencies=dependencies
	    }
   this.constructor = (type, element=document.body, aggregateRootId,store) => {
        this.element = element
        this.type = type
	this.aggregateRootId=aggregateRootId
	this.store=store
        this.criteria = store.state.streams.filter(item=> item.format=="criteria")||[]
	this.render()
    }
	//header is where prps are created
    this.header = () => {
        const paramElement = document.createElement("div")
        const addCriteria = document.createElement("button")
        const aggregateRootId= document.createElement("span")
aggregateRootId.innerText=this.aggregateRootId
        this.typeEl = document.createElement("input")
        var select = datalist(Object.keys(this.type.p))
        select.id = "typeList"
        this.typeEl.setAttribute('list', 'typeList')

        addCriteria.innerText = "addCriteria"

        addCriteria.onclick = () => {
		debugger
            var typeObj = this.type.p[this.typeEl.value]
            this.addCriteria(typeObj,this.aggregateRootId)
            this.render()
        }
        const search = document.createElement("button")
        search.innerText = "search"
        search.onclick = () => this.store.dispatch({format:"criteria",type:"sendForm",streamid:aggregateRootId,body:this.formToObj()})

        paramElement.appendChild(aggregateRootId)
        paramElement.appendChild(this.typeEl)
        paramElement.appendChild(select)
        paramElement.appendChild(addCriteria)
        paramElement.appendChild(search)

        return paramElement
    }
    this.send = () => {
        const q = this.formToObj()
        q.map((crit) => {
            fsto = fsto.where(crit[0], crit[1], crit[2])
        })
        fsto.get().then(function(docs) {
            docs.forEach((doc) => {
                console.log(doc.data());
            })
        })
    }
    this.formToObj = () => {
        var eles = document.querySelectorAll(".criteria")
        console.log(eles)
        const hel = Array.from(eles).map((ele) => {
            return Array.from(ele.children).map((field) => {
                return field.value
            })
            console.log(criteriaArray)
        })
        return hel
    }

    
    this.addCriteria = (type,aggregateRootId) => {
        var crit = {}
        crit.field = type.name
        crit.op = "=="
        crit.value = ""
	crit.aggregateRootId=aggregateRootId
	crit.format="criteria"

	this.store.dispatch({type:"createStream",streamid:aggregateRootId,body:[crit]})
        this.render()
    }

    this.removeCriteria = (type,aggregateRootId) => {
	    }
    this.render = () => {
        this.element.innerHTML = ''
        var header = this.header()
        this.element.appendChild(header)
	    debugger
        this.criteria.map((item) => {
        const row = document.createElement("div")
        const streamid = document.createElement("span")
	row.field=item.field
	const insertCriteria = document.createElement("button")
		insertCriteria.innerText="insertCriteria"
insertCriteria.crit=this.criteria
		insertCriteria.aggregateRootId=item.aggregateRootId
insertCriteria.onclick=function (e){
let crit =e.currentTarget.crit
let field=e.currentTarget.parentElement.field
e.currentTarget.aggregateRootId
let thecrit=crit.filter((it)=> it.field==field)
	console.log(thecrit[0])
}
streamid.innerText=item.aggregateRootId
            row.className = "criteria"
            const field = document.createElement("input")
            field.value = item.field
            const operator = options(["==", ">", "<"])
            operator.value = item.op
            const value = document.createElement("input")
            const format = document.createElement("input")
format.value=item.format

	    value.key=field.value
            value.value = item.value
		value.onchange=(e)=>{
this.criteria.filter((it)=>it.field==e.currentTarget.key)[0].value=e.currentTarget.value
		  console.log(this.criteria)
		}

            var arr = [field, operator, value, insertCriteria,streamid,format].map((el) => row.appendChild(el))
            this.element.appendChild(row)
            return row

        })
    }
}

function component() {
    const div = document.createElement("div")
    div.component = uuid()
    return div
}
export default new criteria(component())
