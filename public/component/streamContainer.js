export default function({
    helper
}) {
    return function() {
        
        
        const addInstanceOfSameType = helper.el("button", {
            id: "addInstanceelem",
            onclick: function(e) {
                newInstanceFromType(e.currentTarget.parentElement.item.value)
            },
            innerText: "addInstanceOfSameType"
        })
        
	
        const deleteAr = Object.assign(document.createElement("button"), {
            innerText: "deleteAr",
            onclick: e => {
                window.sub.next({
                    type: "delete_ar",
                    sender: "criteria.js",
                    body: e.currentTarget.parentElement.getAttribute("evententityid")
                })
            }
        })

	const details=["criteria","actions","diagnos","keyval","relation","resultList"].map(item=>{
	const criteria = helper.el("details", {
		id: item,open:true
        })
          criteria.appendChild(helper.el("summary", {
            innerText: item
        }))
		return criteria
	})   
	     
        

       var actionBtn=window.actionList.map(item=>{
	return Object.assign(document.createElement("button"), {
            innerText: item.name,
            onclick: e => {
                window.sub.next({
                    type: item.name,
                    sender: "criteria.js > "+item.name,
                    body: e.currentTarget
                })
            }
        })
	})
actionBtn.map(item=> {
	    details.filter(item => item.id=="actions")[0].appendChild(item)
	    })
        
        //             const from = document.createElement("button")

        return [...details, addInstanceOfSameType, deleteAr]
    }
}
