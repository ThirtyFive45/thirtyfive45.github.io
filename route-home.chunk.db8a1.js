(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FDtd:function(t,e,n){"use strict";function o(){window.requestAnimationFrame(o),d.data.set(f),l.putImageData(d,0,0)}function r(t){var e=t.outputBuffer,n=e.length;(m-C&w)<512&&T.frame();for(var o=e.getChannelData(0),r=e.getChannelData(1),a=0;a<n;a++){var s=C+a&w;o[a]=v[s],r[a]=b[s]}C=C+n&w}function a(t,e){switch(e.keyCode){case 38:t(1,jsnes.Controller.BUTTON_UP);break;case 40:t(1,jsnes.Controller.BUTTON_DOWN);break;case 37:t(1,jsnes.Controller.BUTTON_LEFT);break;case 39:t(1,jsnes.Controller.BUTTON_RIGHT);break;case 65:case 81:t(1,jsnes.Controller.BUTTON_A);break;case 83:case 79:t(1,jsnes.Controller.BUTTON_B);break;case 9:t(1,jsnes.Controller.BUTTON_SELECT);break;case 13:t(1,jsnes.Controller.BUTTON_START)}}function s(t){var e=document.getElementById(t);if(!e)throw new Error("Main canvas element was not found");if(!(l=e.getContext("2d")))throw new Error("Unable to obtain 2d context from main canvas");d=l.getImageData(0,0,256,240),l.fillStyle="black",l.fillRect(0,0,256,240);var n=new ArrayBuffer(d.data.length);f=new Uint8ClampedArray(n),p=new Uint32Array(n);var o=new window.AudioContext,a=o.createScriptProcessor(512,0,2);a.onaudioprocess=r,a.connect(o.destination)}function i(t){T.loadROM(t),window.requestAnimationFrame(o)}function c(t,e){return c=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},c(t,e)}function u(t,e){return u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},u(t,e)}n.r(e);var l,d,f,p,h=n("hosL"),y=4096,w=4095,v=new Float32Array(y),b=new Float32Array(y),m=0,C=0,T=new jsnes.NES({onFrame:function(t){for(var e=0;e<61440;e++)p[e]=4278190080|t[e]},onAudioSample:function(t,e){v[m]=t,b[m]=e,m=m+1&w}});document.addEventListener("keydown",(function(t){a(T.buttonDown,t)})),document.addEventListener("keyup",(function(t){a(T.buttonUp,t)}));var O=function(t){function e(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).refMainCanvas=Object(h.createRef)(),e}var n,o;o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,c(n,o);var r=e.prototype;return r.shouldComponentUpdate=function(){return!1},r.componentDidMount=function(){!function(t,e){s(t);var n=new XMLHttpRequest;n.open("GET",e),n.overrideMimeType("text/plain; charset=x-user-defined"),n.onerror=function(){return console.log("Error loading "+e+": "+n.statusText)},n.onload=function(){200===this.status?i(this.responseText):0===this.status||n.onerror()},n.send()}("nes-canvas","/assets/moonsofio.nes")},r.render=function(){return Object(h.h)(h.Fragment,null,Object(h.h)("canvas",{id:"nes-canvas",width:"256",height:"240",style:"width: 100%",ref:this.refMainCanvas}))},e}(h.Component),j="home__5d1wS";e.default=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={play:!1},n}var n,o;o=t,(n=e).prototype=Object.create(o.prototype),n.prototype.constructor=n,u(n,o);var r=e.prototype;return r.renderReadyButton=function(){return Object(h.h)("button",{onClick:this.onReadyButtonClicked.bind(this)},"Ready, Player One!")},r.onReadyButtonClicked=function(){this.setState({play:!0})},r.renderNesCanvas=function(){return Object(h.h)("div",{style:"margin: auto; width: 75%; height: 250px; border: 1px solid black;"},Object(h.h)(O,null))},r.render=function(){return Object(h.h)("div",{class:j},this.state.play?this.renderNesCanvas():this.renderReadyButton())},e}(h.Component)}}]);
//# sourceMappingURL=route-home.chunk.db8a1.js.map