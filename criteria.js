function options(options){
const select=document.createElement("select")
options.map((item)=>{
const op=document.createElement("option")
op.innerText=item
select.appendChild(op)
})
return select
}

function component(){
this.uuid=function() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
const div =document.createElement("div")
div.component=this.uuid()

return div
}

function criteria(div) {
this.element=div

this.init=(element) => { 
const addCriteria =document.createElement("button")
addCriteria.innerText="addCriteria"
addCriteria.onclick=()=>this.render()

const search =document.createElement("button")
search.innerText="search"
search.onclick=()=>this.send()

div.appendChild(addCriteria)
div.appendChild(search)
element.appendChild(this.element)
}
this.send=()=> {
const q = this.formToObj()
fsto.where(q[0][0],q[0][1],q[0][2]).get().then(function(docs) {
    	    docs.forEach((doc) => {
        console.log(doc.data());
    })
})
}
this.formToObj=() => {
var eles=this.element.querySelectorAll(".criteria")
console.log(eles)
return eles.forEach((ele)=>{
var criteriaArray=Array.from(ele.children).map((field)=>{
return field.value
})
console.log(criteriaArray)
})
}
this.render=() => {
const row =document.createElement("div")
row.className="criteria"
const field =document.createElement("input")
const operator =options(["==",">","<"])
const value =document.createElement("input")

var arr=[field, operator,value].map((el) => row.appendChild(el))

this.element.appendChild(row)
return row
}
}

var tr=new criteria(component())
tr.init(document.body)
