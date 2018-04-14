export default function() {
  return function(message) {
    const domEffects = window.app.domEffects;
    //window.sub.next(message)
    console.log("disp", message);
    if (message.type == "addPrpAttr") {
      const elem = window.component["mountCriteriaTemplate"](message.body[0]);
      domEffects(elem, message.body[0]);
      console.log(elem);
    }
    if (message.type == "mountResultRow") {
      const elem = window.component["mountResultRow"](message.body);
      domEffects(elem, message.body);
      console.log(elem);
    }

    if (message.type == "getStream") {
      var events = fs.db.collection("event");
      console.log(44, message.body);
	    debugger
document.querySelector("stream-details").renderHeader(message.body[0])
      events
        .where("streamid", "==", message.body[0].streamid)
        .get()
        .then(docs => {
const stde=document.querySelector("stream-details")
		  stde.clear()
          docs.forEach(doc => {
document.querySelector("stream-details").addCriteria(doc.data())
          });
        });
    }
    if (message.type == "addInstanceOfArch") {
      console.log(67, message.body[0].name);
      actions.persistEvent(message.body[0]).then(he => {
        document
          .querySelector("domels-details")
          .addAr(component.mountResultRow([he]));
      });
    }
    if (message.type == "delete_ar") {
      fs.db
        .collection("read")
        .doc(message.body[0].streamid)
        .delete()
        .then(() => {
          console.log("read deleted");
          fs.db
            .collection("event")
            .where("streamid", "==", message.body[0].streamid)
            .get()
            .then(items => {
              items.forEach(item => {
                item.ref.delete();
                console.log("event deleted");
              });
            })
            .catch(function(error) {
              console.error("Error removing evevt document: ", error);
            });
        })
        .catch(function(error) {
          console.error("Error removing read document: ", error);
        });
    }
    if (message.type == "getInstances") {
      window.actions.queryAggroot([
        { field: "type", op: "==", value: message.body[0].name }
      ]);
    }
  };
}
