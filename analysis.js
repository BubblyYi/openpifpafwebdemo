!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.openpifpafwebdemo=t():e.openpifpafwebdemo=t()}(window,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o="https://vitapc11.epfl.ch",r=document.getElementById("video"),i=document.getElementById("canvas-capture"),f=i.getContext("2d"),c=document.getElementById("canvas-out"),a=c.getContext("2d"),d=document.getElementById("fps"),u=0,l=0,p=null;navigator.mediaDevices.getUserMedia({audio:!1,video:{width:320,height:240}}).then(function(e){return r.srcObject=e});var s=[[16,14],[14,12],[17,15],[15,13],[12,13],[6,12],[7,13],[6,7],[6,8],[7,9],[8,10],[9,11],[2,3],[1,2],[1,3],[2,4],[3,5],[4,6],[5,7]],b=["#1f77b4","#aec7e8","#ff7f0e","#ffbb78","#2ca02c","#98df8a","#d62728","#ff9896","#9467bd","#c5b0d5","#8c564b","#c49c94","#e377c2","#f7b6d2","#7f7f7f","#c7c7c7","#bcbd22","#dbdb8d","#17becf","#9edae5"];function g(){f.drawImage(r,0,0,i.width,i.height);var e={image_id:u+=1,image:i.toDataURL()},t=new XMLHttpRequest;t.open("POST",o+"/process",!0),t.onload=function(){if(null!=p){var t=Date.now()-p;l=.9*l+1e3/t*.1,d.textContent=""+l.toFixed(1)}p=Date.now(),g();var n=JSON.parse(this.responseText);n.map(function(e){return e.score});console.log(n);var o=new Image;o.onload=function(){a.drawImage(o,0,0,c.width,c.height),n.forEach(function(e){return t=e.keypoints,n=e.detection_id,console.log({keypoints:t,detection_id:n}),s.forEach(function(e,n){var o=e[0],r=e[1],i=t[o-1],f=t[r-1],d=b[n%b.length];a.strokeStyle=d,a.lineWidth=5,0!=i[2]&&0!=f[2]&&(a.beginPath(),a.moveTo(i[0]*c.width,i[1]*c.height),a.lineTo(f[0]*c.width,f[1]*c.height),a.stroke())}),void t.forEach(function(e,t){0!=e[2]&&(a.beginPath(),a.fillStyle="#ffffff",a.arc(e[0]*c.width,e[1]*c.height,2,0,2*Math.PI),a.fill())});var t,n})},o.src=e.image},t.setRequestHeader("Content-Type","application/json"),t.send(JSON.stringify(e))}t.newImage=g,g()}])});
//# sourceMappingURL=analysis.js.map