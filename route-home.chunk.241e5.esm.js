(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FDtd:function(e,t,n){"use strict";function a(){window.requestAnimationFrame(a),l.data.set(u),d.putImageData(l,0,0)}function r(e){var t=e.outputBuffer,n=t.length;(b-C&f)<512&&T.frame();for(var a=t.getChannelData(0),r=t.getChannelData(1),o=0;o<n;o++){var s=C+o&f;a[o]=p[s],r[o]=m[s]}C=C+n&f}function o(e,t){switch(t.keyCode){case 38:e(1,jsnes.Controller.BUTTON_UP);break;case 40:e(1,jsnes.Controller.BUTTON_DOWN);break;case 37:e(1,jsnes.Controller.BUTTON_LEFT);break;case 39:e(1,jsnes.Controller.BUTTON_RIGHT);break;case 65:case 81:e(1,jsnes.Controller.BUTTON_A);break;case 83:case 79:e(1,jsnes.Controller.BUTTON_B);break;case 9:e(1,jsnes.Controller.BUTTON_SELECT);break;case 13:e(1,jsnes.Controller.BUTTON_START)}}function s(e){const t=document.getElementById(e);if(!t)throw new Error("Main canvas element was not found");if(d=t.getContext("2d"),!d)throw new Error("Unable to obtain 2d context from main canvas");l=d.getImageData(0,0,256,240),d.fillStyle="black",d.fillRect(0,0,256,240);var n=new ArrayBuffer(l.data.length);u=new Uint8ClampedArray(n),h=new Uint32Array(n);var a=new window.AudioContext,o=a.createScriptProcessor(512,0,2);o.onaudioprocess=r,o.connect(a.destination)}function i(e){T.loadROM(e),window.requestAnimationFrame(a)}n.r(t);var c=n("hosL");let d,l,u,h;const w=4096,f=4095,p=new Float32Array(w),m=new Float32Array(w);let b=0,C=0;var T=new jsnes.NES({onFrame:function(e){for(var t=0;t<61440;t++)h[t]=4278190080|e[t]},onAudioSample:function(e,t){p[b]=e,m[b]=t,b=b+1&f}});document.addEventListener("keydown",(e=>{o(T.buttonDown,e)})),document.addEventListener("keyup",(e=>{o(T.buttonUp,e)}));class v extends c.Component{constructor(...e){super(...e),this.refMainCanvas=Object(c.createRef)()}shouldComponentUpdate(){return!1}componentDidMount(){!function(e,t){s(e);var n=new XMLHttpRequest;n.open("GET",t),n.overrideMimeType("text/plain; charset=x-user-defined"),n.onerror=()=>console.log(`Error loading ${t}: ${n.statusText}`),n.onload=function(){200===this.status?i(this.responseText):0===this.status||n.onerror()},n.send()}("nes-canvas","/assets/moonsofio.nes")}render(){return Object(c.h)(c.Fragment,null,Object(c.h)("canvas",{id:"nes-canvas",width:"256",height:"240",style:"width: 50%",ref:this.refMainCanvas}))}}var y="home__5d1wS",O="homeContainer__1W7Ix",j="btnReadyPlayerOne__1POST";t.default=class extends c.Component{constructor(e){super(e),this.state={play:!1}}renderReadyButton(){return Object(c.h)("div",{className:O},Object(c.h)("button",{class:j,onClick:this.onReadyButtonClicked.bind(this)},"Ready, Player One! Press Start!"))}onReadyButtonClicked(){this.setState({play:!0})}renderNesCanvas(){return Object(c.h)("div",{style:"margin: auto; width: 75%; height: 250px; border: 1px solid black;"},Object(c.h)(v,null))}render(){return Object(c.h)("div",{className:y},this.state.play?this.renderNesCanvas():this.renderReadyButton())}}}}]);
//# sourceMappingURL=route-home.chunk.241e5.esm.js.map