function appendAgg(domels) {
  const div = document.createElement('div')
  div.domels
  const newAgg = document.createElement('button')
  newAgg.placeholder='newAgg'

var aggTypeList= document.createElement('datalist')
var options=domels.map(function(i){
const ele = document.createElement("option")
ele.value=i.name
	return ele
})
aggTypeList.appendChild(options[0])


  const aggType = document.createElement('input')
aggType.list=aggTypeList
  aggType.placeholder='aggType'
  const streamid = document.createElement('input')
  streamid.placeholder="streamid"

  newAgg.innerText='newAgg'
  newAgg.onclick= function(){
	  document.body.appendChild(createAggRoot(streamid.value,aggType.value,console.log))
	}
  div.appendChild(newAgg)
	  div.appendChild(aggType)
	  div.appendChild(streamid)
  div.appendChild(newAgg)
  return div
	}
document.body.appendChild(appendAgg([{name:'nam'},{name:'nm'}]))
function createAggRoot(stream_id,aggType,action) {

  const newPrp = document.createElement('button')
  const prpType = document.createElement('input')
  prpType.placeholder="prpType"
  prpType.id="prpType"
	  newPrp.innerText="new agg"
	  newPrp.onclick=function (){
this.parentElement.querySelector('#prpType')
		appendPrp(stream_id,prpType.value,action)
	  }


  const span = document.createElement('span')
	  span.innerText='streamid:'+stream_id+';of type:'+aggType
  const div = document.createElement('div')
  div.style.background='blue'
  div.style.padding='12px'
	  div.stream_id=stream_id
	  div.id="prp"

  const el = document.createElement('input')
  
  div.appendChild(prpType)
  div.appendChild(span)
  div.appendChild(newPrp)
  div.appendChild(el)
  return div
	}
function appendPrp(stream_id,prpType,action) {
  const div = document.createElement('div')
  const span = document.createElement('span')
  span.innerText='prpType:'+prpType+';streamid:'+stream_id
	  div.stream_id=stream_id
	  div.id="prp"
  div.style.background='red'
  div.style.padding='12px'
  const el = document.createElement('input')
  const btn = document.createElement('button')
  btn.innerText='vl'
  btn.onclick=function(){
console.log(this.value)
var obj={
		value:this.parentNode.querySelector("input").value,
		stream_id:this.parentNode.stream_id,
		prpType:prpType
	}
action(obj)
  }
  div.appendChild(span)
  div.appendChild(el)
  div.appendChild(btn)
  document.querySelector('#form').appendChild(div)
 }
