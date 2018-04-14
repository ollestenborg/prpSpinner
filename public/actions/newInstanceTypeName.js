export default function({helper}){
return function(Type="sase"){
	const type=Type
	const id=helper.uuid()
	const id2=helper.uuid()
	const name=window.prompt("name")
	const messeges=[{
	                            type: "persist",
	                            sender: "rxfs",
	                            streamid: "rxfs",
	                            body: {
	                                field: "type",
	                                op: ":",
	                                value: type,
	                                sender: "rxfs",
	                                id: id,
	                                streamid: id,
	                                format: "criteria"
	                            }
	                        },{
	                            type: "mountCriteria",
	                            sender: "rxfs",
	                            streamid: id,
	                            body: {
	                                field: "name",
	                                op: ":",
	                                value: name,
	                                sender: "rxfs",
	                                id: id2,
	                                streamid: id,
	                                format: "criteria"
	                            }
	                        }]
	messeges.map(function (item){
	window.sub.next(item)
	})
}}

