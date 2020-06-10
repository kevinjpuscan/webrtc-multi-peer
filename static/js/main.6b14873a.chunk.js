(this["webpackJsonpwebrtc-multi-peer"]=this["webpackJsonpwebrtc-multi-peer"]||[]).push([[0],{150:function(e,n,t){e.exports=t(292)},155:function(e,n,t){},161:function(e,n){},163:function(e,n){},174:function(e,n){},176:function(e,n){},203:function(e,n){},205:function(e,n){},206:function(e,n){},212:function(e,n){},214:function(e,n){},232:function(e,n){},235:function(e,n){},251:function(e,n){},254:function(e,n){},285:function(e,n){},288:function(e,n,t){},292:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(140),o=t.n(i),c=(t(155),t(47)),s=t(48),u=t(20),d=t(50),l=t(49),m=t(14),f=t(15);function p(){var e=Object(m.a)(["\n  max-width: 1312px;\n  margin: auto;\n  padding: 0 1rem;\n  @media (min-width: 1200px) {\n    padding: 0 160px;\n  }\n"]);return p=function(){return e},e}var h=f.a.div(p());var g=function(e){var n=e.children;return a.a.createElement(h,null,n)};function v(){var e=Object(m.a)(["\n  width: 100%;\n  padding: 1em 1.5em;\n  background: ",";\n  border-radius: 10px;\n  color: ",";\n  cursor: pointer;\n  text-align: center;\n  font-size: 0.9em;\n  font-weight: 700;\n  border: ",";\n"]);return v=function(){return e},e}var b=f.a.button(v(),(function(e){return e.rounder?"none":e.success?"var(--success)":"var(--main)"}),(function(e){return e.rounder?e.success?"var(--success)":"var(--main)":"white"}),(function(e){return e.rounder?e.success?"2px solid var(--success)":"2px solid var(--main)":"none"}));var x=function(e){var n=e.text,t=e.rounder,r=e.onClick,i=e.success;return a.a.createElement(b,{rounder:t,onClick:r,success:i},n)},w=t(149),E={API_URL:"http://157.245.138.14:8081",URL:"https://kevinjpuscan.github.io/webrtc-multi-peer",SECRET_KEY:"kevin-secret"};function C(){var e=Object(m.a)(["\n  background: rgba(0, 0, 0, 0.03);\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  .text-url {\n    width: 100%;\n    box-sizing: border-box;\n    padding: 10px;\n    margin-bottom: 15px;\n  }\n"]);return C=function(){return e},e}var k=f.a.div(C());var y=function(e){var n=e.url,t=Object(r.useState)(!1),i=Object(w.a)(t,2),o=i[0],c=i[1];return a.a.createElement(k,null,a.a.createElement("input",{className:"text-url",type:"text",disabled:!0,value:"".concat(E.URL+n)}),a.a.createElement(x,{text:o?"Copiado":"Copiar",rounder:!0,onClick:function(){var e=document.createElement("input");e.setAttribute("value","".concat(E.URL+n)),document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),c(!0)},success:o}))},j=t(144),O=t.n(j),S=t(145),R=t.n(S),N=t(146),M=t.n(N);function U(){var e=Object(m.a)(["\n  width: 100%;\n  height: 100vh;\n  background: var(--background);\n  margin: 0;\n  padding: 0;\n\n  .container-card {\n    position: absolute;\n    width: 90%;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    top: 0;\n    height: ",";\n    margin: auto;\n  }\n  .card {\n    width: 100%;\n    height: 100%;\n    background: white;\n    border-radius: 15px;\n    padding: 50px 30px;\n    box-sizing: border-box;\n    box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.025);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n\n  .title-form {\n    font-size: 1.5em;\n    font-weight: 900;\n    text-align: center;\n    color: var(--gray-black);\n  }\n\n  #description {\n    color: var(--gray);\n    text-align: center;\n    font-weight: 400;\n    font-size: 0.8em;\n  }\n\n  @media (min-width: 1200px) {\n    .card {\n      width: 35%;\n      margin: auto;\n    }\n  }\n"]);return U=function(){return e},e}var D=f.a.div(U(),(function(e){return e.heght})),I=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).handleClickCreate=function(){r.state.created&&r.props.history.push(r.state.url);var e=r.createHash();r.setState({created:!0,height:"60%",url:"/meet/".concat(e)})},r.createHash=function(){var e=(new Date).getTime(),n=E.SECRET_KEY,t=O()(100+e),r=M.a.stringify(R()(t,n));return r=r.replace(/\//gi,"k")},r.state={height:"35%",created:!1,url:""},r.handleClickCreate=r.handleClickCreate.bind(Object(u.a)(r)),r.createHash=r.createHash.bind(Object(u.a)(r)),r}return Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(D,{heght:this.state.height},a.a.createElement(g,null,a.a.createElement("div",{className:"container-card"},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"form-create"},a.a.createElement("div",{className:"title-form"},"Bienvenido"),a.a.createElement("p",{id:"description"},"Hola, crea una nueva sala y comparte el link con tus amigos, as\xed de simple."),a.a.createElement(x,{text:this.state.created?"Ingresar":"Crear Sala",onClick:this.handleClickCreate,success:this.state.created})),this.state.created&&a.a.createElement(y,{url:this.state.url})))))}}]),t}(r.Component),A=t(147),L=t.n(A);function V(){var e=Object(m.a)(["\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: 100vh;\n  background: var(--gray-black);\n\n  .content-videos {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-rows: ",";\n    grid-template-columns: ",";\n  }\n\n  .content-videos div {\n    height: 100%;\n    width: 100%;\n    position: relative;\n  }\n\n  .video {\n    background: black;\n    position: absolute;\n    height: 100%;\n    width: 100%;\n    top: 0px;\n    left: 0px;\n  }\n\n  @media (min-width: 1200px) {\n    .content-videos {\n      grid-template-rows: ",";\n      grid-template-columns: ",";\n    }\n  }\n"]);return V=function(){return e},e}var z=f.a.div(V(),(function(e){return e.members>=6?"1fr 1fr 1fr":e.members>=2?"1fr 1fr":"1fr"}),(function(e){return e.members>=3?"1fr 1fr":"1fr"}),(function(e){return e.members>=3?"1fr 1fr":"1fr"}),(function(e){return e.members>=6?"1fr 1fr 1fr":e.members>=2?"1fr 1fr":"1fr"})),T=null,H=[],J={iceServers:[{urls:"stun:stun.services.mozilla.com"},{urls:"stun:stun.l.google.com:19302"}]},P=function(e){Object(d.a)(t,e);var n=Object(l.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).componentDidMount=function(){var e=Object(u.a)(r);T=L()(E.API_URL),new Promise((function(e,n){navigator.getUserMedia=navigator.getUserMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getUserMedia({video:{width:{min:160,ideal:640,max:1280},height:{min:120,ideal:360,max:720}},audio:!0},(function(n){e(n)}),(function(){}))})).then((function(e){r.setState({localStream:e}),r.addRemoteVideo(e,"me"),T.emit("join",{roomId:r.props.match.params.roomid})})),T.on("user-left",(function(n){var t=document.querySelector('[data-socket="'+n+'"]');if(t){var r=t.parentElement;t.parentElement.parentElement.removeChild(r),e.setState({members:e.state.members-1})}})),T.on("signal",r.gotMessageFromServer),T.on("user-joined",(function(n,t,r){r.forEach((function(n){H[n]||(H[n]=new RTCPeerConnection(J),H.onicecandidate=function(e){null!=e.candidate&&(console.log("SENDING ICE"),T.emit("signal",n,JSON.stringify({ice:e.candidate})))},H[n].onaddstream=function(t){e.addRemoteVideo(t.stream,n)},H[n].addStream(e.state.localStream))})),t>=2&&n!==T.id&&H[n].createOffer().then((function(e){H[n].setLocalDescription(e).then((function(){T.emit("signal",n,JSON.stringify({sdp:H[n].localDescription}))})).catch((function(e){return console.log(e)}))}))}))},r.addRemoteVideo=function(e,n){if(r.state.members<=6){var t=document.createElement("div"),a=document.createElement("video");a.setAttribute("data-socket",n),a.setAttribute("class","video"),a.srcObject=e,a.autoplay=!0,a.muted=!0,a.playsinline=!0,t.appendChild(a),r.remoteVideos.appendChild(t)}else{var i=document.createElement("div"),o=document.createElement("span");o.setAttribute("data-socket",n),o.innerHTML="<strong>mas</strong>",i.appendChild(o),r.remoteVideos.appendChild(i)}r.setState({members:r.state.members+1})},console.log("constructor"),r.state={localStream:null,remoteStrems:[],members:0},r.addRemoteVideo=r.addRemoteVideo.bind(Object(u.a)(r)),r}return Object(s.a)(t,[{key:"gotMessageFromServer",value:function(e,n){var t=JSON.parse(n);e!==T.id&&(t.sdp&&H[e].setRemoteDescription(new RTCSessionDescription(t.sdp)).then((function(){"offer"===t.sdp.type&&H[e].createAnswer().then((function(n){H[e].setLocalDescription(n).then((function(){T.emit("signal",e,JSON.stringify({sdp:H[e].localDescription}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)})),t.ice&&H[e].addIceCandidate(new RTCIceCandidate(t.ice)).catch((function(e){return console.log(e)})))}},{key:"render",value:function(){var e=this;return console.log("remder"),a.a.createElement(z,{members:this.state.members},a.a.createElement("div",{className:"content-videos",ref:function(n){return e.remoteVideos=n}}))}}]),t}(a.a.Component),_=(t(288),t(148)),B=t(4);var G=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(_.a,null,a.a.createElement(B.c,null,a.a.createElement(B.a,{exact:!0,path:"/",component:I}),a.a.createElement(B.a,{exact:!0,path:"/meet/:roomid",component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(G,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[150,1,2]]]);
//# sourceMappingURL=main.6b14873a.chunk.js.map