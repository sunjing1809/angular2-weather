webpackJsonp([3,5],{365:function(n,e,r){var t=r(632);"string"==typeof t&&(t=[[n.i,t,""]]);r(666)(t,{});t.locals&&(n.exports=t.locals)},632:function(n,e,r){e=n.exports=r(633)(),e.push([n.i,'/* You can add global styles to this file, and also import other style files */\r\n/* Master Styles */\r\n#logo\r\n{\r\n  float:right;\r\n}\r\nh1 {\r\n  color: #369;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 250%;\r\n  float:center;\r\n}\r\nh2, h3 {\r\n  color: lightslategray;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: lighter;\r\n}\r\n/*body {\r\n  margin: 2em;\r\n    padding: 45px 0;\r\n  font: 13px \'Open Sans\', "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;\r\n}*/\r\n\r\n@font-face {\r\n    font-family: \'weather\';\r\n    src: url(\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/artill_clean_icons-webfont.eot\');\r\n    src: url(\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/artill_clean_icons-webfont.eot?#iefix\') format(\'embedded-opentype\'),\r\n         url(\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/artill_clean_icons-webfont.woff\') format(\'woff\'),\r\n         url(\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/artill_clean_icons-webfont.ttf\') format(\'truetype\'),\r\n         url(\'https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/artill_clean_icons-webfont.svg#artill_clean_weather_iconsRg\') format(\'svg\');\r\n    font-weight: normal;\r\n    font-style: normal;\r\n}\r\n  nav{\r\n    float:right;\r\n  }\r\n\r\n/*\r\nhtml {\r\n   width: 100%;\r\n  height: 100%;\r\n  background-color: #1192d3;\r\n  background-size: cover;\r\n}*/\r\n  .submission{\r\n     margin: 0px auto;\r\n     text-align: center;\r\n     text-transform: uppercase;\r\n  }\r\n\r\n  i {\r\n  color: deepskyblue;\r\n  font-family: weather;\r\n  font-size: 150px;\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  line-height: 1.0;\r\n  text-transform: none;\r\n}\r\n\r\n.icon-0:before { content: ":"; }\r\n.icon-1:before { content: "p"; }\r\n.icon-2:before { content: "S"; }\r\n.icon-3:before { content: "Q"; }\r\n.icon-4:before { content: "S"; }\r\n.icon-5:before { content: "W"; }\r\n.icon-6:before { content: "W"; }\r\n.icon-7:before { content: "W"; }\r\n.icon-8:before { content: "W"; }\r\n.icon-9:before { content: "I"; }\r\n.icon-10:before { content: "W"; }\r\n.icon-11:before { content: "I"; }\r\n.icon-12:before { content: "I"; }\r\n.icon-13:before { content: "I"; }\r\n.icon-14:before { content: "I"; }\r\n.icon-15:before { content: "W"; }\r\n.icon-16:before { content: "I"; }\r\n.icon-17:before { content: "W"; }\r\n.icon-18:before { content: "U"; }\r\n.icon-19:before { content: "Z"; }\r\n.icon-20:before { content: "Z"; }\r\n.icon-21:before { content: "Z"; }\r\n.icon-22:before { content: "Z"; }\r\n.icon-23:before { content: "Z"; }\r\n.icon-24:before { content: "E"; }\r\n.icon-25:before { content: "E"; }\r\n.icon-26:before { content: "3"; }\r\n.icon-27:before { content: "a"; }\r\n.icon-28:before { content: "A"; }\r\n.icon-29:before { content: "a"; }\r\n.icon-30:before { content: "A"; }\r\n.icon-31:before { content: "6"; }\r\n.icon-32:before { content: "1"; }\r\n.icon-33:before { content: "6"; }\r\n.icon-34:before { content: "1"; }\r\n.icon-35:before { content: "W"; }\r\n.icon-36:before { content: "1"; }\r\n.icon-37:before { content: "S"; }\r\n.icon-38:before { content: "S"; }\r\n.icon-39:before { content: "S"; }\r\n.icon-40:before { content: "M"; }\r\n.icon-41:before { content: "W"; }\r\n.icon-42:before { content: "I"; }\r\n.icon-43:before { content: "W"; }\r\n.icon-44:before { content: "a"; }\r\n.icon-45:before { content: "S"; }\r\n.icon-46:before { content: "U"; }\r\n.icon-47:before { content: "S"; }\r\n\r\n.submission h2 {\r\n  margin: 0 0 8px;\r\n  /*color: #fff;*/\r\n  color: lightpink;\r\n  font-size: 100px;\r\n  font-weight: 300;\r\n  text-align: center;\r\n  text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.15);\r\n}\r\n\r\n.submission ul {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.submission li {\r\n  background: lightpink;\r\n  background: lightpink(255,255,255,0.90);\r\n  padding: 20px;\r\n  display: inline-block;\r\n  border-radius: 10px;\r\n}\r\n\r\n',""])},633:function(n,e){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],e=0;e<this.length;e++){var r=this[e];r[2]?n.push("@media "+r[2]+"{"+r[1]+"}"):n.push(r[1])}return n.join("")},n.i=function(e,r){"string"==typeof e&&(e=[[null,e,""]]);for(var t={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(t[i]=!0)}for(o=0;o<e.length;o++){var c=e[o];"number"==typeof c[0]&&t[c[0]]||(r&&!c[2]?c[2]=r:r&&(c[2]="("+c[2]+") and ("+r+")"),n.push(c))}},n}},666:function(n,e){function r(n,e){for(var r=0;r<n.length;r++){var t=n[r],o=p[t.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](t.parts[i]);for(;i<t.parts.length;i++)o.parts.push(a(t.parts[i],e))}else{for(var c=[],i=0;i<t.parts.length;i++)c.push(a(t.parts[i],e));p[t.id]={id:t.id,refs:1,parts:c}}}}function t(n){for(var e=[],r={},t=0;t<n.length;t++){var o=n[t],i=o[0],c=o[1],s=o[2],a=o[3],f={css:c,media:s,sourceMap:a};r[i]?r[i].parts.push(f):e.push(r[i]={id:i,parts:[f]})}return e}function o(n,e){var r=h(),t=v[v.length-1];if("top"===n.insertAt)t?t.nextSibling?r.insertBefore(e,t.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),v.push(e);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");r.appendChild(e)}}function i(n){n.parentNode.removeChild(n);var e=v.indexOf(n);e>=0&&v.splice(e,1)}function c(n){var e=document.createElement("style");return e.type="text/css",o(n,e),e}function s(n){var e=document.createElement("link");return e.rel="stylesheet",o(n,e),e}function a(n,e){var r,t,o;if(e.singleton){var a=g++;r=m||(m=c(e)),t=f.bind(null,r,a,!1),o=f.bind(null,r,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=s(e),t=u.bind(null,r),o=function(){i(r),r.href&&URL.revokeObjectURL(r.href)}):(r=c(e),t=l.bind(null,r),o=function(){i(r)});return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}function f(n,e,r,t){var o=r?"":t.css;if(n.styleSheet)n.styleSheet.cssText=y(e,o);else{var i=document.createTextNode(o),c=n.childNodes;c[e]&&n.removeChild(c[e]),c.length?n.insertBefore(i,c[e]):n.appendChild(i)}}function l(n,e){var r=e.css,t=e.media;if(t&&n.setAttribute("media",t),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}function u(n,e){var r=e.css,t=e.sourceMap;t&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */");var o=new Blob([r],{type:"text/css"}),i=n.href;n.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},b=function(n){var e;return function(){return"undefined"==typeof e&&(e=n.apply(this,arguments)),e}},d=b(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=b(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,v=[];n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var o=t(n);return r(o,e),function(n){for(var i=[],c=0;c<o.length;c++){var s=o[c],a=p[s.id];a.refs--,i.push(a)}if(n){var f=t(n);r(f,e)}for(var c=0;c<i.length;c++){var a=i[c];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete p[a.id]}}}};var y=function(){var n=[];return function(e,r){return n[e]=r,n.filter(Boolean).join("\n")}}()},670:function(n,e,r){n.exports=r(365)}},[670]);