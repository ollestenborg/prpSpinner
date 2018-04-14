export default function({ app }) {
  return function(el, msg) {
    console.log("domEffects", el);
    console.log(
      "hyyye",
      document.querySelector(
        '[streamcontainer="' + msg.streamid + '"]> #keyval > summary'
      )
    );
    if (
      !msg.type &&
      document.querySelector(
        '[streamcontainer="' + msg.streamid + '"]> #details > #keyval'
      )
    ) {
      if (msg.op == ":") {
        document
          .querySelector(
            '[streamcontainer="' + msg.streamid + '"]> #details > #keyval'
          )
          .appendChild(el.cloneNode(true));
      } else if (msg.op == "==") {
        document
          .querySelector(
            '[streamcontainer="' + msg.streamid + '"]> #details > #criteria'
          )
          .appendChild(el.cloneNode(true));
      }
    }
    console.log("hyyye", msg);
    document.body.appendChild(el);
    window.scrollTo(0, document.body.scrollHeight);
  };
}
