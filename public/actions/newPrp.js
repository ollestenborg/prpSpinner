export default function({helper}){
return function(Type){
	const type=Type
	const id=helper.uuid()
	const uuid=helper.uuid
	const messeges=[{
	                            type: "persist",
	                            sender: "rxfs",
	                            streamid: "rxfs",
	                            body: {
	                                field: "type",
	                                op: ":",
	                                value: "prpAttr",
	                                sender: "rxfs",
	                                id: id,
	                                streamid: id,
	                                format: "criteria"
	                            }
	                        },{
	                            type: "persist",
	                            sender: "rxfs",
	                            streamid: id,
	                            body: {
	                                field: "prp_type",
	                                op: ":",
	                                value: type,
	                                sender: "rxfs",
	                                id: uuid(),
	                                streamid: id,
	                                format: "criteria"
	                            }
	                        },{
	                            type: "persist",
	                            sender: "rxfs",
	                            streamid: id,
	                            body: {
	                                field: "name",
	                                op: ":",
	                                value: "",
	                                sender: "rxfs",
	                                id: uuid(),
	                                streamid: id,
	                                format: "criteria"
	                            }
	                        }]
	messeges.map(function (item){
	window.sub.next(item)
	})
}}

