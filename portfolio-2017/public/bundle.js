!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=8)}([function(e,t,n){"use strict";function o(){a.fillStyle="#f2f2f2",a.fillRect(0,0,r.width,r.height);for(var e=0;e<l.length;e++)a.fillStyle=l[e].color,a.beginPath(),a.arc(l[e].x,l[e].y,l[e].radius,0,2*Math.PI),a.fill()}function i(){for(var e=0;e<l.length;e++)l[e].y+=l[e].dy,l[e].x+=l[e].dx,l[e].dy+=l[e].dy>=10?0:.1,l[e].y+l[e].radius>=r.height&&(l[e].y=r.height-l[e].radius,l[e].dy/=2,l[e].dy*=-1),l[e].x+l[e].radius>=r.width&&(l[e].x=r.width-l[e].radius,l[e].dx/=2,l[e].dx*=-1),l[e].x-l[e].radius<=0&&(l[e].x=l[e].radius,l[e].dx/=2,l[e].dx*=-1);if(l.length>1)for(var t=0;t<l.length;t++)for(var n=0;n<l.length;n++)n!==t&&Math.abs(l[t].y-l[n].y)<=l[t].radius+l[n].radius&&Math.abs(l[t].x-l[n].x)<=l[t].radius+l[n].radius&&(l[t].dy/=2,l[t].dy*=-1,l[n].dy*=2,l[n].dy/=-1);l.length>100&&l.splice(0,1),l.length>300&&l.splice(200,300),o(),requestAnimationFrame(i)}var r=document.getElementById("balls-canvas"),a=r.getContext("2d"),l=[];performance.now();r.width=innerWidth,r.height=innerHeight;var u=0;document.querySelector("#about").onmousemove=function(){u++<3||(u=0,l.push({x:event.pageX,y:event.pageY-innerHeight,dy:10*Math.random()-10,dx:10*Math.random()-5,radius:50*Math.random(),color:function(){for(var e="0123456789ABCDEF".split(""),t="#",n=0;n<6;n++)t+=e[Math.round(15*Math.random())];return t}()}))};i()},function(e,t,n){"use strict";function o(){document.querySelector(".menu-icon").removeAttribute("on"),document.querySelector("#menu").removeAttribute("on")}function i(e){e.requestFullScreen?e.requestFullScreen():e.mozRequestFullScreen?e.mozRequestFullScreen():e.webkitRequestFullScreen&&e.webkitRequestFullScreen()}var r=function(){setTimeout(function(){document.querySelector(".wrapper").style.visibility="visible",document.querySelector("body").style.overflow="auto",document.querySelector("#loader").style.opacity="0",setTimeout(function(){document.querySelector("#menu").style.display="table",document.querySelector("#loader").style.display="none"},500)},2e3)};window.onload=r,document.querySelector(".full-screen").addEventListener("click",function(){i(document.documentElement)}),document.querySelector(".menu-icon").addEventListener("click",function(){this.hasAttribute("on")?o():(this.setAttribute("on",""),document.querySelector("#menu").setAttribute("on",""))}),document.addEventListener("scroll",function(e){var t=window.scrollY;t>=350&&t<=1300?document.querySelector(".content").setAttribute("on",""):document.querySelector(".content").removeAttribute("on"),t>=window.innerHeight&&t<=3*window.innerHeight?document.querySelector("#love-js").style.zIndex=600:document.querySelector("#love-js").style.zIndex=80,t>=0&&t<window.innerHeight?document.querySelector(".slide").setAttribute("to","1"):t>=window.innerHeight&&t<2*window.innerHeight?document.querySelector(".slide").setAttribute("to","2"):t>=2*window.innerHeight&&t<3*window.innerHeight&&document.querySelector(".slide").setAttribute("to","3"),t===document.body.scrollHeight-window.innerHeight?document.querySelector(".slide").style.visibility="hidden":document.querySelector(".slide").style.visibility="visible"}),document.querySelector("#menu").addEventListener("click",function(){o()});var a=function(e){e*=window.innerHeight;var t=window.pageYOffset,n=e-t,o=0,i=setInterval(function(){window.scrollTo(0,t+n*o),o>=1&&clearInterval(i),o+=.05},20)};document.querySelector(".slide").addEventListener("click",function(){return a(Number(document.querySelector(".slide").getAttribute("to")))}),window.onresize=function(){document.querySelectorAll("canvas").forEach(function(e){e.width=innerWidth,e.height=innerHeight,console.log(e)})}},function(e,t,n){"use strict";var o=document.querySelector(".love-canvas"),i=o.getContext("2d"),r=document.createElement("canvas"),a=r.getContext("2d"),l=[],u="#000",d="#fff",c=12,s=50,f=500,h=2.8,p=20,m=10,y=["I","love","JavaScript"],g=!1,v=!g,x=-100,b=-100,w=function(){return[50,100,150][Math.floor(3*Math.random())]},S=function(){return Math.floor(6*Math.random())-3},k=function(){return"#FFA500"},q=function e(){M(),L(),requestAnimationFrame(e)},M=function(){A(),z(),g||E()},A=function(){i.fillStyle=g?k():u,i.fillRect(0,0,o.width,o.height)},z=function(){l.forEach(function(e){i.fillStyle=e.color,g?(i.beginPath(),i.arc(e.x,e.y,e.radius/2,0,2*Math.PI),i.fill()):(i.save(),i.translate(e.x+e.radius/2,e.y+e.radius/2),i.rotate(e.angle),i.fillRect(-e.radius/2,-e.radius/2,e.radius,e.radius),i.restore(),e.angle<5?e.angle+=Math.PI*e.rotatingSpeed/4500:e.angle-=5*Math.PI)})},E=function(){i.font=" 15px Comic Sans MS",i.fillStyle="#fff",i.fillText("Click on me!",o.width/2-30,o.height/2)},L=function(){g&&v?(U(),v=!1):g||C()},R=function(){l.forEach(function(e){x>e.x-p&&x<e.x+p&&b>e.y-p&&b<e.y+p?(e.radius<s&&(e.radius+=h,e.rotatingSpeed=0,e.dx=0,e.dy=0),g||(e.color=k())):e.radius>c&&(e.radius-=h,e.rotatingSpeed=w(),e.dx=S(),e.dy=S())})},C=function(){l.forEach(function(e){e.x+=e.dx*e.freeze,e.y+=e.dy*e.freeze,e.x>o.width&&(e.x=o.width-e.radius,e.dx*=-1),e.x<0&&(e.x=e.radius,e.dx*=-1),e.y<0&&(e.y=e.radius,e.dy*=-1),e.y>o.height&&(e.y=o.height-e.radius,e.dy*=-1)})},H=function(e,t,n){var o=l[n];o.color="#fff";var i=setInterval(function(){o.x!=t&&o.y!=e&&g?(o.x=.9*o.x+.1*t,o.y=.9*o.y+.1*e):clearInterval(i)},20)},j=function(){l.push({radius:c,color:d,x:Math.floor(Math.random()*o.width),y:Math.floor(Math.random()*o.height),dx:S(),dy:S(),angle:0,rotatingSpeed:w(),freeze:.5})},I=function(){for(var e=0;e<f;++e)j()},T=function(){a.fillStyle="#000000",a.font="150px impact";var e=1;y.forEach(function(t){a.fillText(t,60,200*e++)})},U=function(){for(var e=a.getImageData(0,0,r.width,r.height),t=void 0,n=-1,o=0;o<r.height;o+=m)for(var i=0;i<r.width;i+=m)t=e.data[4*(i+o*r.width)+3],255===t&&(n++,n===l.length&&j(),H(o,i,n))};o.addEventListener("mousemove",function(e){x=e.pageX,b=e.pageY-window.scrollY,R()}),o.addEventListener("click",function(){g?(g=!1,v=!1):(g=!0,v=!0)});var B=function(e){e.width=window.innerWidth,e.height=window.innerHeight},F=function(){B(o),B(r),I(),T(),q()};F()},function(e,t,n){"use strict";!function(){var e=0,t=["love code","enjoy learning","think JavaScript will conquer the world..."];t.sort(function(){return.5-Math.random()});var n=function(){setInterval(o,500),setTimeout(function(){return i(0,!0)},1e3)},o=function e(){var e=document.querySelector("#cursor").style;e.opacity="1"===e.opacity?0:1},i=function n(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,i=arguments[1];document.querySelector("#text").textContent=t[e].slice(0,o),o<t[e].length&&i?setTimeout(function(){return n(++o,!0)},50):i?setTimeout(function(){return n(o,!1)},1500):o>0?setTimeout(function(){return n(--o,!1)},50):(e<t.length-1?++e:e=0,setTimeout(function(){return n(0,!0)},1e3))};n()}()},function(e,t,n){var o=n(5);"string"==typeof o&&(o=[[e.i,o,""]]);n(7)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){t=e.exports=n(6)(),t.push([e.i,"#loader{position:fixed;display:table;top:0;left:0;bottom:0;right:0;width:100%;height:100vh;margin:auto;z-index:10000;background-color:#000;color:#fff;transition:.5s}#loader .block{display:table-cell;text-align:center;vertical-align:middle}#loader .block h4{cursor:pointer}#loader .loader{margin:5em auto;width:0;height:0;box-shadow:-.625em -.625em 0 .625em,.625em -.625em 0 .625em,-.625em .625em 0 .625em,.625em .625em 0 .625em;animation:circSquare 1.5s ease-in-out infinite}@keyframes circSquare{50%{width:1.25em;height:1.25em;border-radius:50%;transform:rotate(.5turn);box-shadow:-2.5em 0 0,2.5em 0 0,-2.5em 0 0,2.5em 0 0}80%,to{transform:rotate(1turn)}}*{box-sizing:border-box}body{margin:0;padding:0;width:100%;height:100%;overflow:hidden}.wrapper{visibility:hidden}header{display:table;position:fixed;width:100%;height:100vh;z-index:100;background-color:#000;color:#fff;font-family:Helvetica,Arial,sans-serif}header h2{display:table-cell;vertical-align:middle;padding:0 60px;font-size:50px;line-height:40px}header h2 span{font-size:26px}header #type{position:absolute;bottom:150px;left:50px;font-size:40px}header #type #cursor{position:absolute;right:-5px;top:0;width:2px;height:40px;background-color:#fff}.menu-icon{position:fixed;z-index:1000;right:21px;top:10px;display:block;cursor:pointer;transform:rotate(90deg)}.menu-icon[on] span:first-child{transform:rotate(45deg) translateY(-10px);background-color:#000}.menu-icon[on] span:last-child{transform:rotate(-45deg) translateY(-10px);background-color:#000}.menu-icon span{display:inline-block;width:1px;height:24px;margin:0 1px;background-color:#fff;transition-duration:.4s}.slide{position:fixed;bottom:10px;left:50px;cursor:pointer;overflow:hidden;color:#fff;font-family:Helvetica,Arial,sans-serif;font-size:13px;z-index:900;transition:.2s;background-color:rgba(0,0,0,.18);box-shadow:1px 1px 10px 8px rgba(0,0,0,.18)}.slide img{width:.75em;animation:arrow-move 1.2s infinite ease}@keyframes arrow-move{0%{transform:translateY(-15px)}to{transform:translateY(15px)}}#menu{position:fixed;display:none;z-index:900;opacity:0;background-color:#fff;color:#000;top:0;left:0;width:100%;height:100vh;overflow:hidden;transition-duration:.6s;pointer-events:none}#menu[on]{opacity:1;pointer-events:auto}#menu ul{list-style-type:none;display:table-cell;vertical-align:middle;width:100%;height:100vh;text-align:center;margin:0;padding:0;position:relative}#menu ul a{display:inline-block;padding:20px 0;width:100%;font-size:40px;text-decoration:none;font-family:Helvetica,Arial,sans-serif;color:#000;transition:.5s}#menu ul a:hover{background-color:#000;color:#fff}#about{display:block;width:100%;height:100vh;top:100vh;background-color:#fff;overflow:hidden;font-family:Helvetica,Arial,sans-serif}#about,#about .content{position:absolute;z-index:800}#about .content{padding:60px 0;left:-200px;opacity:0;width:40%;line-height:32px;font-size:20px;transition:1s ease-out}#about .content[on]{transform:translateX(300px);opacity:1}#about canvas{opacity:.5;position:absolute}#love-js{width:100%;height:100vh;position:fixed;overflow:hidden;top:0;z-index:0}#feedback,#love-js,#love-js canvas{display:block}#feedback{position:absolute;width:100%;padding:150px 60px;top:300vh;z-index:700;background-color:#000;font-size:50px;line-height:70px;font-weight:700;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#fff}#feedback a{text-decoration:none}#feedback a[twitter]{color:#1b95e0}#feedback a[google]{color:#db4437}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t){function n(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=f[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(u(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(u(o.parts[r],t));f[o.id]={id:o.id,refs:1,parts:a}}}}function o(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],l=i[2],u=i[3],d={css:a,media:l,sourceMap:u};n[r]?n[r].parts.push(d):t.push(n[r]={id:r,parts:[d]})}return t}function i(e,t){var n=m(),o=v[v.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),v.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function r(e){e.parentNode.removeChild(e);var t=v.indexOf(e);t>=0&&v.splice(t,1)}function a(e){var t=document.createElement("style");return t.type="text/css",i(e,t),t}function l(e){var t=document.createElement("link");return t.rel="stylesheet",i(e,t),t}function u(e,t){var n,o,i;if(t.singleton){var u=g++;n=y||(y=a(t)),o=d.bind(null,n,u,!1),i=d.bind(null,n,u,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=l(t),o=s.bind(null,n),i=function(){r(n),n.href&&URL.revokeObjectURL(n.href)}):(n=a(t),o=c.bind(null,n),i=function(){r(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function d(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=x(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function c(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function s(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},p=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,g=0,v=[];e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");t=t||{},"undefined"==typeof t.singleton&&(t.singleton=p()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var i=o(e);return n(i,t),function(e){for(var r=[],a=0;a<i.length;a++){var l=i[a],u=f[l.id];u.refs--,r.push(u)}if(e){var d=o(e);n(d,t)}for(var a=0;a<r.length;a++){var u=r[a];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete f[u.id]}}}};var x=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){"use strict";n(1),n(3),n(0),n(2),n(4)}]);