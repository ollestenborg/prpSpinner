import uuid from "https://rawgit.com/ollestenborg/public_repo/master/uuid.js"
import options from "https://rawgit.com/ollestenborg/public_repo/master/options.js"
import datalist from "https://rawgit.com/ollestenborg/public_repo/master/datalist.js"
//var cons=crit.constructor(domels.filter((data)=>data.name=="credit_check")[0],document.body)
//crit.render()

function criteria() {
    this.constructor = (type, element = document.body, streamid) => {
            this.element = element
            this.type = type
            this.streamid = streamid
            this.subscribe()
        }
        //header is where prps are created

    this.send = () => {
        const q = this.formToObj()
        q.map((crit) => {
            fsto = fsto.where(crit[0], crit[1], crit[2])
        })
        fsto.get().then(function(docs) {
            docs.forEach((doc) => {
                console.log("criteria.js send()",doc.data());
            })
        })
    }
    this.formToObj = () => {
        var eles = document.querySelectorAll(".criteria")
        const hel = Array.from(eles).map((ele) => {
            return Array.from(ele.children).map((field) => {
                return field.value
            })
        })
        return hel
    }


    this.addCriteria = (field, streamid, value = "", op = "==") => {
        var crit = {}
        crit.field = field
        crit.op = op
        crit.value = value
        crit.streamid = streamid
        crit.format = "criteria"

        window.sub.next({
                type: "createStream",
	        //msg_id: helper.uuid(),
                sender: "criteria",
                streamid: streamid,
                body: crit
            })
            //this.render()
    }

    this.removeCriteria = (type, streamid) => {}
    this.subscribe = (item) => {
	    if(false){
        var that = this
        self.sub.subscribe(
            function(x) {
                console.log("criteria subscribe()",x)
                //if (x.type == "mountObject" && x.body.format == "criteria") {
                if (false) {
                    document.body.appendChild(that.template(x.body))
                } else if (x.body == "ar") {
                    document.body.appendChild(that.header(x.body))
                }
            })
	    }
    }
    this.template = (item) => {
        const row = document.createElement("div")
        this.streamid = document.createElement("span")
        this.value = document.createElement("input")
        this.format = document.createElement("input")
        this.field = document.createElement("input")

        const insertCriteria = document.createElement("button")
        const deleteCriteria = document.createElement("button")
        deleteCriteria.innerText = "deleteCriteria"
        deleteCriteria.onclick = function(e) {
            window.sub.next({
                type: "delete",
                sender: "criteria.js",
                streamid: item.id
            })
        }
        insertCriteria.innerText = "insertCriteria"
        insertCriteria.streamid = item.streamid
        var that = this
        insertCriteria.onclick = function(e) {
		const obj={format:that.format.value,field:that.field.value, streamid:that.streamid.innerText, value:that.value.value, op:that.operator.value}

		window.sub.next({type:"persist",body:obj})
        }
        this.streamid.innerText = item.streamid
        row.className = "criteria"
	    this.field.id="field"
        this.field.value = item.field

        this.operator = options(["==", ">", "<"])
        this.operator.value = item.op
                this.format.value = item.format

        this.value.key = this.field.value
        this.value.value = item.value
        

        this.arr = [this.field, this.operator, this.value, this.streamid, this.format, insertCriteria, deleteCriteria]
        this.arr.map((el) => row.appendChild(el))
        this.element.appendChild(row)
        return row
    }
    this.render = () => {
        this.element.innerHTML = ''
        var header = this.header()
        this.element.appendChild(header)
        this.criteria.map((item) => {
            this.tempplate(item)
        })
    }
}

function component() {
    const div = document.createElement("div")
    div.component = uuid()
    return div
}
export default new criteria(component())
