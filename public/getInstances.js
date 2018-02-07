export default function({helper}){
return function(Type){
	const type=Type
	const id=helper.uuid()
	const uuid=helper.uuid
	const messeges=[{
	                            type: "mountObject",
		messegesId:uuid(),
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
	                            type: "mountObject",
	                            sender: "rxfs",
		messegesId:uuid(),
	                            streamid: id,
	                            body: {
	                                field: "type",
	                                op: "==",
	                                value: type,
	                                sender: "rxfs",
	                                id: "1234rxfs",
	                                streamid: id,
	                                format: "criteria"
	                            }
	                        }]
Rx.Observable.of(messeges).map(function (item){
	window.sub.next(item)
document.querySelector("[evententityid='"+id+"']").querySelector("#btnSearch").click()
	})
}}

