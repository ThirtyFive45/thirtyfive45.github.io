(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FDtd:function(e,t,n){"use strict";function r(){window.requestAnimationFrame(r),d.data.set(f),l.putImageData(d,0,0)}function o(e){var t=e.outputBuffer,n=t.length;(m-O&w)<512&&C.frame();for(var r=t.getChannelData(0),o=t.getChannelData(1),a=0;a<n;a++){var s=O+a&w;r[a]=b[s],o[a]=v[s]}O=O+n&w}function a(e,t){switch(t.keyCode){case 38:e(1,jsnes.Controller.BUTTON_UP);break;case 40:e(1,jsnes.Controller.BUTTON_DOWN);break;case 37:e(1,jsnes.Controller.BUTTON_LEFT);break;case 39:e(1,jsnes.Controller.BUTTON_RIGHT);break;case 65:case 81:e(1,jsnes.Controller.BUTTON_A);break;case 83:case 79:e(1,jsnes.Controller.BUTTON_B);break;case 9:e(1,jsnes.Controller.BUTTON_SELECT);break;case 13:e(1,jsnes.Controller.BUTTON_START)}}function s(e){var t=document.getElementById(e);if(!t)throw new Error("Main canvas element was not found");if(!(l=t.getContext("2d")))throw new Error("Unable to obtain 2d context from main canvas");d=l.getImageData(0,0,256,240),l.fillStyle="black",l.fillRect(0,0,256,240);var n=new ArrayBuffer(d.data.length);f=new Uint8ClampedArray(n),p=new Uint32Array(n);var r=new window.AudioContext,a=r.createScriptProcessor(512,0,2);a.onaudioprocess=o,a.connect(r.destination)}function i(e){C.loadROM(e),window.requestAnimationFrame(r)}function c(e,t){return c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},c(e,t)}function u(e,t){return u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},u(e,t)}n.r(t);var l,d,f,p,h=n("hosL"),y=4096,w=4095,b=new Float32Array(y),v=new Float32Array(y),m=0,O=0,C=new jsnes.NES({onFrame:function(e){for(var t=0;t<61440;t++)p[t]=4278190080|e[t]},onAudioSample:function(e,t){b[m]=e,v[m]=t,m=m+1&w}});document.addEventListener("keydown",(function(e){a(C.buttonDown,e)})),document.addEventListener("keyup",(function(e){a(C.buttonUp,e)}));var T=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).refMainCanvas=Object(h.createRef)(),t}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,c(n,r);var o=t.prototype;return o.shouldComponentUpdate=function(){return!1},o.componentDidMount=function(){!function(e,t){s(e);var n=new XMLHttpRequest;n.open("GET",t),n.overrideMimeType("text/plain; charset=x-user-defined"),n.onerror=function(){return console.log("Error loading "+t+": "+n.statusText)},n.onload=function(){200===this.status?i(this.responseText):0===this.status||n.onerror()},n.send()}("nes-canvas","/assets/moonsofio.nes")},o.render=function(){return Object(h.h)(h.Fragment,null,Object(h.h)("canvas",{id:"nes-canvas",width:"256",height:"240",style:"width: 50%",ref:this.refMainCanvas}))},t}(h.Component),_="home__5d1wS",j="homeContainer__1W7Ix",k="btnReadyPlayerOne__1POST";t.default=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={play:!1},n}var n,r;r=e,(n=t).prototype=Object.create(r.prototype),n.prototype.constructor=n,u(n,r);var o=t.prototype;return o.renderReadyButton=function(){return Object(h.h)("div",{className:j},Object(h.h)("button",{class:k,onClick:this.onReadyButtonClicked.bind(this)},"Ready, Player One! Press Start!"))},o.onReadyButtonClicked=function(){this.setState({play:!0})},o.renderNesCanvas=function(){return Object(h.h)("div",{style:"margin: auto; width: 75%; height: 250px; border: 1px solid black;"},Object(h.h)(T,null))},o.render=function(){return Object(h.h)("div",{className:_},this.state.play?this.renderNesCanvas():this.renderReadyButton())},t}(h.Component)}}]);
//# sourceMappingURL=route-home.chunk.32e4c.js.map