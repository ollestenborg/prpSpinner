function options(options){
const select=document.createElement("select")
options.map((item)=>{
const op=document.createElement("option")
op.innerText=item
select.appendChild(op)
})
return select
}
function datalist(options, listName){
const datalist=document.createElement("datalist")
options.map((item)=>{
const op=document.createElement("option")
op.innerText=item
datalist.appendChild(op)
})
return datalist
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

this.init=(type,element) => { 
const addCriteria =document.createElement("button")
this.typeEl =document.createElement("input")
var select=datalist(Object.keys(type.p))
select.id="typeList"
this.typeEl.list='typeList'

addCriteria.innerText="addCriteria"
 this.typeObj=type.p.map((i)=>{
i.name==this.typeEl.value
})

addCriteria.onclick=()=>this.render(this.typeObj)

const search =document.createElement("button")
search.innerText="search"
search.onclick=()=>this.send()

  div.appendChild(this.typeEl)
  div.appendChild(select)
div.appendChild(addCriteria)
div.appendChild(search)
element.appendChild(this.element)
}
this.send=()=> {
const q = this.formToObj()
q.map((crit)=> {fsto=fsto.where(crit[0],crit[1],crit[2])})
fsto.get().then(function(docs) {
    	    docs.forEach((doc) => {
        console.log(doc.data());
    })
})
}
this.formToObj=() => {
var eles=document.querySelectorAll(".criteria")
console.log(eles)
const hel= Array.from(eles).map((ele)=>{
return Array.from(ele.children).map((field)=>{
return field.value
})
console.log(criteriaArray)
})
return hel
}
this.render=(type) => {
const row =document.createElement("div")
row.className="criteria"
const field =document.createElement("input")
field.value=type
const operator =options(["==",">","<"])
const value =document.createElement("input")
var arr=[field, operator,value].map((el) => row.appendChild(el))
this.element.appendChild(row)
return row
}
}
window.onload=()=>  {
  var type=domels.filter((i)=>  i.name=='sftw')
console.log(type[0].p)
var crit=new criteria(component())
crit.init(type[0],document.body)
}
