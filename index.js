document.querySelector('#createAggRoot').onclick=function (){
	appendAgg('grej','person',console.log)
}

function appendAgg(domels) {
  const div = document.createElement('div')
  div.domels
  const newAgg = document.createElement('button')
  newAgg.placeholder='newAgg'
  const aggType = document.createElement('input')
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
document.body.appendChild(appendAgg())
function createAggRoot(stream_id,aggType,action) {

  const newPrp = document.createElement('button')
  const prpType = document.createElement('input')
  prpType.placeholder="type"
	  newPrp.innerText="new agg"
	  newPrp.onclick=function (){
		appendPrp(stream_id,newPrp.value,action)
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


function appendPrp(stream_id,whty,action) {
  const div = document.createElement('div')
  const span = document.createElement('span')
  span.innerText=whty+';streamid:'+stream_id
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
		whty:whty
	}
action(obj)
  }
  div.appendChild(span)
  div.appendChild(el)
  div.appendChild(btn)
  document.querySelector('#form').appendChild(div)
 }