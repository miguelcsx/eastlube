import{a as T2,b as H1,c as S3}from"/build/_shared/chunk-NR2ZEJD3.js";var v3=T2((A6,z3)=>{"use strict";var i6="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";z3.exports=i6});var p3=T2((P6,M3)=>{"use strict";var f6=v3();function V3(){}function h3(){}h3.resetWarningCache=V3;M3.exports=function(){function c(r,s,i,f,n,l){if(l!==f6){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}c.isRequired=c;function a(){return c}var e={array:c,bigint:c,bool:c,func:c,number:c,object:c,string:c,symbol:c,any:c,arrayOf:a,element:c,elementType:c,instanceOf:a,node:c,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:h3,resetWarningCache:V3};return e.PropTypes=e,e}});var u3=T2((F6,C3)=>{C3.exports=p3()();var T6,B6});function z1(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function m(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?z1(Object(e),!0).forEach(function(r){x(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):z1(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function d2(c){return d2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},d2(c)}function w3(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function v1(c,a){for(var e=0;e<a.length;e++){var r=a[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(c,r.key,r)}}function k3(c,a,e){return a&&v1(c.prototype,a),e&&v1(c,e),Object.defineProperty(c,"prototype",{writable:!1}),c}function x(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function $2(c,a){return A3(c)||T3(c,a)||U1(c,a)||F3()}function l2(c){return y3(c)||P3(c)||U1(c)||B3()}function y3(c){if(Array.isArray(c))return E2(c)}function A3(c){if(Array.isArray(c))return c}function P3(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function T3(c,a){var e=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(e!=null){var r=[],s=!0,i=!1,f,n;try{for(e=e.call(c);!(s=(f=e.next()).done)&&(r.push(f.value),!(a&&r.length===a));s=!0);}catch(l){i=!0,n=l}finally{try{!s&&e.return!=null&&e.return()}finally{if(i)throw n}}return r}}function U1(c,a){if(c){if(typeof c=="string")return E2(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return E2(c,a)}}function E2(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function B3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var V1=function(){},Q2={},O1={},q1=null,W1={mark:V1,measure:V1};try{typeof window<"u"&&(Q2=window),typeof document<"u"&&(O1=document),typeof MutationObserver<"u"&&(q1=MutationObserver),typeof performance<"u"&&(W1=performance)}catch{}var R3=Q2.navigator||{},h1=R3.userAgent,M1=h1===void 0?"":h1,E=Q2,p=O1,p1=q1,m2=W1,u6=!!E.document,F=!!p.documentElement&&!!p.head&&typeof p.addEventListener=="function"&&typeof p.createElement=="function",I1=~M1.indexOf("MSIE")||~M1.indexOf("Trident/"),H2,z2,v2,V2,h2,P="___FONT_AWESOME___",U2=16,G1="fa",_1="svg-inline--fa",j="data-fa-i2svg",O2="data-fa-pseudo-element",D3="data-fa-pseudo-element-pending",K2="data-prefix",J2="data-icon",C1="fontawesome-i2svg",E3="async",U3=["HTML","HEAD","STYLE","SCRIPT"],j1=function(){try{return!0}catch{return!1}}(),M="classic",C="sharp",Z2=[M,C];function o2(c){return new Proxy(c,{get:function(e,r){return r in e?e[r]:e[M]}})}var r2=o2((H2={},x(H2,M,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),x(H2,C,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),H2)),s2=o2((z2={},x(z2,M,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),x(z2,C,{solid:"fass",regular:"fasr",light:"fasl"}),z2)),i2=o2((v2={},x(v2,M,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),x(v2,C,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),v2)),O3=o2((V2={},x(V2,M,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),x(V2,C,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),V2)),q3=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,X1="fa-layers-text",W3=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,I3=o2((h2={},x(h2,M,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),x(h2,C,{900:"fass",400:"fasr",300:"fasl"}),h2)),Y1=[1,2,3,4,5,6,7,8,9,10],G3=Y1.concat([11,12,13,14,15,16,17,18,19,20]),_3=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},f2=new Set;Object.keys(s2[M]).map(f2.add.bind(f2));Object.keys(s2[C]).map(f2.add.bind(f2));var j3=[].concat(Z2,l2(f2),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G.GROUP,G.SWAP_OPACITY,G.PRIMARY,G.SECONDARY]).concat(Y1.map(function(c){return"".concat(c,"x")})).concat(G3.map(function(c){return"w-".concat(c)})),a2=E.FontAwesomeConfig||{};function X3(c){var a=p.querySelector("script["+c+"]");if(a)return a.getAttribute(c)}function Y3(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}p&&typeof p.querySelector=="function"&&(u1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],u1.forEach(function(c){var a=$2(c,2),e=a[0],r=a[1],s=Y3(X3(e));s!=null&&(a2[r]=s)}));var u1,$1={styleDefault:"solid",familyDefault:"classic",cssPrefix:G1,replacementClass:_1,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};a2.familyPrefix&&(a2.cssPrefix=a2.familyPrefix);var K=m(m({},$1),a2);K.autoReplaceSvg||(K.observeMutations=!1);var z={};Object.keys($1).forEach(function(c){Object.defineProperty(z,c,{enumerable:!0,set:function(e){K[c]=e,e2.forEach(function(r){return r(z)})},get:function(){return K[c]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(a){K.cssPrefix=a,e2.forEach(function(e){return e(z)})},get:function(){return K.cssPrefix}});E.FontAwesomeConfig=z;var e2=[];function $3(c){return e2.push(c),function(){e2.splice(e2.indexOf(c),1)}}var D=U2,A={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q3(c){if(!(!c||!F)){var a=p.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=c;for(var e=p.head.childNodes,r=null,s=e.length-1;s>-1;s--){var i=e[s],f=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(f)>-1&&(r=i)}return p.head.insertBefore(a,r),c}}var K3="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function n2(){for(var c=12,a="";c-- >0;)a+=K3[Math.random()*62|0];return a}function J(c){for(var a=[],e=(c||[]).length>>>0;e--;)a[e]=c[e];return a}function c1(c){return c.classList?J(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Q1(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function J3(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,'="').concat(Q1(c[e]),'" ')},"").trim()}function N2(c){return Object.keys(c||{}).reduce(function(a,e){return a+"".concat(e,": ").concat(c[e].trim(),";")},"")}function a1(c){return c.size!==A.size||c.x!==A.x||c.y!==A.y||c.rotate!==A.rotate||c.flipX||c.flipY}function Z3(c){var a=c.transform,e=c.containerWidth,r=c.iconWidth,s={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(a.x*32,", ").concat(a.y*32,") "),f="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),n="rotate(".concat(a.rotate," 0 0)"),l={transform:"".concat(i," ").concat(f," ").concat(n)},o={transform:"translate(".concat(r/2*-1," -256)")};return{outer:s,inner:l,path:o}}function c4(c){var a=c.transform,e=c.width,r=e===void 0?U2:e,s=c.height,i=s===void 0?U2:s,f=c.startCentered,n=f===void 0?!1:f,l="";return n&&I1?l+="translate(".concat(a.x/D-r/2,"em, ").concat(a.y/D-i/2,"em) "):n?l+="translate(calc(-50% + ".concat(a.x/D,"em), calc(-50% + ").concat(a.y/D,"em)) "):l+="translate(".concat(a.x/D,"em, ").concat(a.y/D,"em) "),l+="scale(".concat(a.size/D*(a.flipX?-1:1),", ").concat(a.size/D*(a.flipY?-1:1),") "),l+="rotate(".concat(a.rotate,"deg) "),l}var a4=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function K1(){var c=G1,a=_1,e=z.cssPrefix,r=z.replacementClass,s=a4;if(e!==c||r!==a){var i=new RegExp("\\.".concat(c,"\\-"),"g"),f=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(a),"g");s=s.replace(i,".".concat(e,"-")).replace(f,"--".concat(e,"-")).replace(n,".".concat(r))}return s}var L1=!1;function B2(){z.autoAddCss&&!L1&&(Q3(K1()),L1=!0)}var e4={mixout:function(){return{dom:{css:K1,insertCss:B2}}},hooks:function(){return{beforeDOMElementCreation:function(){B2()},beforeI2svg:function(){B2()}}}},T=E||{};T[P]||(T[P]={});T[P].styles||(T[P].styles={});T[P].hooks||(T[P].hooks={});T[P].shims||(T[P].shims=[]);var y=T[P],J1=[],r4=function c(){p.removeEventListener("DOMContentLoaded",c),g2=1,J1.map(function(a){return a()})},g2=!1;F&&(g2=(p.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(p.readyState),g2||p.addEventListener("DOMContentLoaded",r4));function s4(c){F&&(g2?setTimeout(c,0):J1.push(c))}function t2(c){var a=c.tag,e=c.attributes,r=e===void 0?{}:e,s=c.children,i=s===void 0?[]:s;return typeof c=="string"?Q1(c):"<".concat(a," ").concat(J3(r),">").concat(i.map(t2).join(""),"</").concat(a,">")}function d1(c,a,e){if(c&&c[a]&&c[a][e])return{prefix:a,iconName:e,icon:c[a][e]}}var i4=function(a,e){return function(r,s,i,f){return a.call(e,r,s,i,f)}},F2=function(a,e,r,s){var i=Object.keys(a),f=i.length,n=s!==void 0?i4(e,s):e,l,o,t;for(r===void 0?(l=1,t=a[i[0]]):(l=0,t=r);l<f;l++)o=i[l],t=n(t,a[o],o,a);return t};function f4(c){for(var a=[],e=0,r=c.length;e<r;){var s=c.charCodeAt(e++);if(s>=55296&&s<=56319&&e<r){var i=c.charCodeAt(e++);(i&64512)==56320?a.push(((s&1023)<<10)+(i&1023)+65536):(a.push(s),e--)}else a.push(s)}return a}function q2(c){var a=f4(c);return a.length===1?a[0].toString(16):null}function n4(c,a){var e=c.length,r=c.charCodeAt(a),s;return r>=55296&&r<=56319&&e>a+1&&(s=c.charCodeAt(a+1),s>=56320&&s<=57343)?(r-55296)*1024+s-56320+65536:r}function g1(c){return Object.keys(c).reduce(function(a,e){var r=c[e],s=!!r.icon;return s?a[r.iconName]=r.icon:a[e]=r,a},{})}function W2(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=e.skipHooks,s=r===void 0?!1:r,i=g1(a);typeof y.hooks.addPack=="function"&&!s?y.hooks.addPack(c,g1(a)):y.styles[c]=m(m({},y.styles[c]||{}),i),c==="fas"&&W2("fa",a)}var M2,p2,C2,Y=y.styles,l4=y.shims,o4=(M2={},x(M2,M,Object.values(i2[M])),x(M2,C,Object.values(i2[C])),M2),e1=null,Z1={},c3={},a3={},e3={},r3={},t4=(p2={},x(p2,M,Object.keys(r2[M])),x(p2,C,Object.keys(r2[C])),p2);function m4(c){return~j3.indexOf(c)}function H4(c,a){var e=a.split("-"),r=e[0],s=e.slice(1).join("-");return r===c&&s!==""&&!m4(s)?s:null}var s3=function(){var a=function(i){return F2(Y,function(f,n,l){return f[l]=F2(n,i,{}),f},{})};Z1=a(function(s,i,f){if(i[3]&&(s[i[3]]=f),i[2]){var n=i[2].filter(function(l){return typeof l=="number"});n.forEach(function(l){s[l.toString(16)]=f})}return s}),c3=a(function(s,i,f){if(s[f]=f,i[2]){var n=i[2].filter(function(l){return typeof l=="string"});n.forEach(function(l){s[l]=f})}return s}),r3=a(function(s,i,f){var n=i[2];return s[f]=f,n.forEach(function(l){s[l]=f}),s});var e="far"in Y||z.autoFetchSvg,r=F2(l4,function(s,i){var f=i[0],n=i[1],l=i[2];return n==="far"&&!e&&(n="fas"),typeof f=="string"&&(s.names[f]={prefix:n,iconName:l}),typeof f=="number"&&(s.unicodes[f.toString(16)]={prefix:n,iconName:l}),s},{names:{},unicodes:{}});a3=r.names,e3=r.unicodes,e1=b2(z.styleDefault,{family:z.familyDefault})};$3(function(c){e1=b2(c.styleDefault,{family:z.familyDefault})});s3();function r1(c,a){return(Z1[c]||{})[a]}function z4(c,a){return(c3[c]||{})[a]}function _(c,a){return(r3[c]||{})[a]}function i3(c){return a3[c]||{prefix:null,iconName:null}}function v4(c){var a=e3[c],e=r1("fas",c);return a||(e?{prefix:"fas",iconName:e}:null)||{prefix:null,iconName:null}}function U(){return e1}var s1=function(){return{prefix:null,iconName:null,rest:[]}};function b2(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.family,r=e===void 0?M:e,s=r2[r][c],i=s2[r][c]||s2[r][s],f=c in y.styles?c:null;return i||f||null}var x1=(C2={},x(C2,M,Object.keys(i2[M])),x(C2,C,Object.keys(i2[C])),C2);function S2(c){var a,e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.skipLookups,s=r===void 0?!1:r,i=(a={},x(a,M,"".concat(z.cssPrefix,"-").concat(M)),x(a,C,"".concat(z.cssPrefix,"-").concat(C)),a),f=null,n=M;(c.includes(i[M])||c.some(function(o){return x1[M].includes(o)}))&&(n=M),(c.includes(i[C])||c.some(function(o){return x1[C].includes(o)}))&&(n=C);var l=c.reduce(function(o,t){var H=H4(z.cssPrefix,t);if(Y[t]?(t=o4[n].includes(t)?O3[n][t]:t,f=t,o.prefix=t):t4[n].indexOf(t)>-1?(f=t,o.prefix=b2(t,{family:n})):H?o.iconName=H:t!==z.replacementClass&&t!==i[M]&&t!==i[C]&&o.rest.push(t),!s&&o.prefix&&o.iconName){var v=f==="fa"?i3(o.iconName):{},h=_(o.prefix,o.iconName);v.prefix&&(f=null),o.iconName=v.iconName||h||o.iconName,o.prefix=v.prefix||o.prefix,o.prefix==="far"&&!Y.far&&Y.fas&&!z.autoFetchSvg&&(o.prefix="fas")}return o},s1());return(c.includes("fa-brands")||c.includes("fab"))&&(l.prefix="fab"),(c.includes("fa-duotone")||c.includes("fad"))&&(l.prefix="fad"),!l.prefix&&n===C&&(Y.fass||z.autoFetchSvg)&&(l.prefix="fass",l.iconName=_(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||f==="fa")&&(l.prefix=U()||"fas"),l}var V4=function(){function c(){w3(this,c),this.definitions={}}return k3(c,[{key:"add",value:function(){for(var e=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];var f=s.reduce(this._pullDefinitions,{});Object.keys(f).forEach(function(n){e.definitions[n]=m(m({},e.definitions[n]||{}),f[n]),W2(n,f[n]);var l=i2[M][n];l&&W2(l,f[n]),s3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(e,r){var s=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(s).map(function(i){var f=s[i],n=f.prefix,l=f.iconName,o=f.icon,t=o[2];e[n]||(e[n]={}),t.length>0&&t.forEach(function(H){typeof H=="string"&&(e[n][H]=o)}),e[n][l]=o}),e}}]),c}(),N1=[],$={},Q={},h4=Object.keys(Q);function M4(c,a){var e=a.mixoutsTo;return N1=c,$={},Object.keys(Q).forEach(function(r){h4.indexOf(r)===-1&&delete Q[r]}),N1.forEach(function(r){var s=r.mixout?r.mixout():{};if(Object.keys(s).forEach(function(f){typeof s[f]=="function"&&(e[f]=s[f]),d2(s[f])==="object"&&Object.keys(s[f]).forEach(function(n){e[f]||(e[f]={}),e[f][n]=s[f][n]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(f){$[f]||($[f]=[]),$[f].push(i[f])})}r.provides&&r.provides(Q)}),e}function I2(c,a){for(var e=arguments.length,r=new Array(e>2?e-2:0),s=2;s<e;s++)r[s-2]=arguments[s];var i=$[c]||[];return i.forEach(function(f){a=f.apply(null,[a].concat(r))}),a}function X(c){for(var a=arguments.length,e=new Array(a>1?a-1:0),r=1;r<a;r++)e[r-1]=arguments[r];var s=$[c]||[];s.forEach(function(i){i.apply(null,e)})}function B(){var c=arguments[0],a=Array.prototype.slice.call(arguments,1);return Q[c]?Q[c].apply(null,a):void 0}function G2(c){c.prefix==="fa"&&(c.prefix="fas");var a=c.iconName,e=c.prefix||U();if(a)return a=_(e,a)||a,d1(f3.definitions,e,a)||d1(y.styles,e,a)}var f3=new V4,p4=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,X("noAuto")},C4={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return F?(X("beforeI2svg",a),B("pseudoElements2svg",a),B("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,s4(function(){L4({autoReplaceSvgRoot:e}),X("watch",a)})}},u4={icon:function(a){if(a===null)return null;if(d2(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:_(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var e=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],r=b2(a[0]);return{prefix:r,iconName:_(r,e)||e}}if(typeof a=="string"&&(a.indexOf("".concat(z.cssPrefix,"-"))>-1||a.match(q3))){var s=S2(a.split(" "),{skipLookups:!0});return{prefix:s.prefix||U(),iconName:_(s.prefix,s.iconName)||s.iconName}}if(typeof a=="string"){var i=U();return{prefix:i,iconName:_(i,a)||a}}}},k={noAuto:p4,config:z,dom:C4,parse:u4,library:f3,findIconDefinition:G2,toHtml:t2},L4=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=a.autoReplaceSvgRoot,r=e===void 0?p:e;(Object.keys(y.styles).length>0||z.autoFetchSvg)&&F&&z.autoReplaceSvg&&k.dom.i2svg({node:r})};function w2(c,a){return Object.defineProperty(c,"abstract",{get:a}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(r){return t2(r)})}}),Object.defineProperty(c,"node",{get:function(){if(F){var r=p.createElement("div");return r.innerHTML=c.html,r.children}}}),c}function d4(c){var a=c.children,e=c.main,r=c.mask,s=c.attributes,i=c.styles,f=c.transform;if(a1(f)&&e.found&&!r.found){var n=e.width,l=e.height,o={x:n/l/2,y:.5};s.style=N2(m(m({},i),{},{"transform-origin":"".concat(o.x+f.x/16,"em ").concat(o.y+f.y/16,"em")}))}return[{tag:"svg",attributes:s,children:a}]}function g4(c){var a=c.prefix,e=c.iconName,r=c.children,s=c.attributes,i=c.symbol,f=i===!0?"".concat(a,"-").concat(z.cssPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:m(m({},s),{},{id:f}),children:r}]}]}function i1(c){var a=c.icons,e=a.main,r=a.mask,s=c.prefix,i=c.iconName,f=c.transform,n=c.symbol,l=c.title,o=c.maskId,t=c.titleId,H=c.extra,v=c.watchable,h=v===void 0?!1:v,d=r.found?r:e,b=d.width,u=d.height,S=s==="fak",L=[z.replacementClass,i?"".concat(z.cssPrefix,"-").concat(i):""].filter(function(R){return H.classes.indexOf(R)===-1}).filter(function(R){return R!==""||!!R}).concat(H.classes).join(" "),g={children:[],attributes:m(m({},H.attributes),{},{"data-prefix":s,"data-icon":i,class:L,role:H.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(b," ").concat(u)})},w=S&&!~H.classes.indexOf("fa-fw")?{width:"".concat(b/u*16*.0625,"em")}:{};h&&(g.attributes[j]=""),l&&(g.children.push({tag:"title",attributes:{id:g.attributes["aria-labelledby"]||"title-".concat(t||n2())},children:[l]}),delete g.attributes.title);var N=m(m({},g),{},{prefix:s,iconName:i,main:e,mask:r,maskId:o,transform:f,symbol:n,styles:m(m({},w),H.styles)}),W=r.found&&e.found?B("generateAbstractMask",N)||{children:[],attributes:{}}:B("generateAbstractIcon",N)||{children:[],attributes:{}},I=W.children,P2=W.attributes;return N.children=I,N.attributes=P2,n?g4(N):d4(N)}function b1(c){var a=c.content,e=c.width,r=c.height,s=c.transform,i=c.title,f=c.extra,n=c.watchable,l=n===void 0?!1:n,o=m(m(m({},f.attributes),i?{title:i}:{}),{},{class:f.classes.join(" ")});l&&(o[j]="");var t=m({},f.styles);a1(s)&&(t.transform=c4({transform:s,startCentered:!0,width:e,height:r}),t["-webkit-transform"]=t.transform);var H=N2(t);H.length>0&&(o.style=H);var v=[];return v.push({tag:"span",attributes:o,children:[a]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function x4(c){var a=c.content,e=c.title,r=c.extra,s=m(m(m({},r.attributes),e?{title:e}:{}),{},{class:r.classes.join(" ")}),i=N2(r.styles);i.length>0&&(s.style=i);var f=[];return f.push({tag:"span",attributes:s,children:[a]}),e&&f.push({tag:"span",attributes:{class:"sr-only"},children:[e]}),f}var R2=y.styles;function _2(c){var a=c[0],e=c[1],r=c.slice(4),s=$2(r,1),i=s[0],f=null;return Array.isArray(i)?f={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(G.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(G.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(G.PRIMARY),fill:"currentColor",d:i[1]}}]}:f={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:a,height:e,icon:f}}var N4={found:!1,width:512,height:512};function b4(c,a){!j1&&!z.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(a,'" is missing.'))}function j2(c,a){var e=a;return a==="fa"&&z.styleDefault!==null&&(a=U()),new Promise(function(r,s){var i={found:!1,width:512,height:512,icon:B("missingIconAbstract")||{}};if(e==="fa"){var f=i3(c)||{};c=f.iconName||c,a=f.prefix||a}if(c&&a&&R2[a]&&R2[a][c]){var n=R2[a][c];return r(_2(n))}b4(c,a),r(m(m({},N4),{},{icon:z.showMissingIcons&&c?B("missingIconAbstract")||{}:{}}))})}var S1=function(){},X2=z.measurePerformance&&m2&&m2.mark&&m2.measure?m2:{mark:S1,measure:S1},c2='FA "6.4.2"',S4=function(a){return X2.mark("".concat(c2," ").concat(a," begins")),function(){return n3(a)}},n3=function(a){X2.mark("".concat(c2," ").concat(a," ends")),X2.measure("".concat(c2," ").concat(a),"".concat(c2," ").concat(a," begins"),"".concat(c2," ").concat(a," ends"))},f1={begin:S4,end:n3},u2=function(){};function w1(c){var a=c.getAttribute?c.getAttribute(j):null;return typeof a=="string"}function w4(c){var a=c.getAttribute?c.getAttribute(K2):null,e=c.getAttribute?c.getAttribute(J2):null;return a&&e}function k4(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(z.replacementClass)}function y4(){if(z.autoReplaceSvg===!0)return L2.replace;var c=L2[z.autoReplaceSvg];return c||L2.replace}function A4(c){return p.createElementNS("http://www.w3.org/2000/svg",c)}function P4(c){return p.createElement(c)}function l3(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.ceFn,r=e===void 0?c.tag==="svg"?A4:P4:e;if(typeof c=="string")return p.createTextNode(c);var s=r(c.tag);Object.keys(c.attributes||[]).forEach(function(f){s.setAttribute(f,c.attributes[f])});var i=c.children||[];return i.forEach(function(f){s.appendChild(l3(f,{ceFn:r}))}),s}function T4(c){var a=" ".concat(c.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var L2={replace:function(a){var e=a[0];if(e.parentNode)if(a[1].forEach(function(s){e.parentNode.insertBefore(l3(s),e)}),e.getAttribute(j)===null&&z.keepOriginalSource){var r=p.createComment(T4(e));e.parentNode.replaceChild(r,e)}else e.remove()},nest:function(a){var e=a[0],r=a[1];if(~c1(e).indexOf(z.replacementClass))return L2.replace(a);var s=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(n,l){return l===z.replacementClass||l.match(s)?n.toSvg.push(l):n.toNode.push(l),n},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",i.toNode.join(" "))}var f=r.map(function(n){return t2(n)}).join(`
`);e.setAttribute(j,""),e.innerHTML=f}};function k1(c){c()}function o3(c,a){var e=typeof a=="function"?a:u2;if(c.length===0)e();else{var r=k1;z.mutateApproach===E3&&(r=E.requestAnimationFrame||k1),r(function(){var s=y4(),i=f1.begin("mutate");c.map(s),i(),e()})}}var n1=!1;function t3(){n1=!0}function Y2(){n1=!1}var x2=null;function y1(c){if(p1&&z.observeMutations){var a=c.treeCallback,e=a===void 0?u2:a,r=c.nodeCallback,s=r===void 0?u2:r,i=c.pseudoElementsCallback,f=i===void 0?u2:i,n=c.observeMutationsRoot,l=n===void 0?p:n;x2=new p1(function(o){if(!n1){var t=U();J(o).forEach(function(H){if(H.type==="childList"&&H.addedNodes.length>0&&!w1(H.addedNodes[0])&&(z.searchPseudoElements&&f(H.target),e(H.target)),H.type==="attributes"&&H.target.parentNode&&z.searchPseudoElements&&f(H.target.parentNode),H.type==="attributes"&&w1(H.target)&&~_3.indexOf(H.attributeName))if(H.attributeName==="class"&&w4(H.target)){var v=S2(c1(H.target)),h=v.prefix,d=v.iconName;H.target.setAttribute(K2,h||t),d&&H.target.setAttribute(J2,d)}else k4(H.target)&&s(H.target)})}}),F&&x2.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function B4(){x2&&x2.disconnect()}function F4(c){var a=c.getAttribute("style"),e=[];return a&&(e=a.split(";").reduce(function(r,s){var i=s.split(":"),f=i[0],n=i.slice(1);return f&&n.length>0&&(r[f]=n.join(":").trim()),r},{})),e}function R4(c){var a=c.getAttribute("data-prefix"),e=c.getAttribute("data-icon"),r=c.innerText!==void 0?c.innerText.trim():"",s=S2(c1(c));return s.prefix||(s.prefix=U()),a&&e&&(s.prefix=a,s.iconName=e),s.iconName&&s.prefix||(s.prefix&&r.length>0&&(s.iconName=z4(s.prefix,c.innerText)||r1(s.prefix,q2(c.innerText))),!s.iconName&&z.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=c.firstChild.data)),s}function D4(c){var a=J(c.attributes).reduce(function(s,i){return s.name!=="class"&&s.name!=="style"&&(s[i.name]=i.value),s},{}),e=c.getAttribute("title"),r=c.getAttribute("data-fa-title-id");return z.autoA11y&&(e?a["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(r||n2()):(a["aria-hidden"]="true",a.focusable="false")),a}function E4(){return{iconName:null,title:null,titleId:null,prefix:null,transform:A,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function A1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},e=R4(c),r=e.iconName,s=e.prefix,i=e.rest,f=D4(c),n=I2("parseNodeAttributes",{},c),l=a.styleParser?F4(c):[];return m({iconName:r,title:c.getAttribute("title"),titleId:c.getAttribute("data-fa-title-id"),prefix:s,transform:A,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:f}},n)}var U4=y.styles;function m3(c){var a=z.autoReplaceSvg==="nest"?A1(c,{styleParser:!1}):A1(c);return~a.extra.classes.indexOf(X1)?B("generateLayersText",c,a):B("generateSvgReplacementMutation",c,a)}var O=new Set;Z2.map(function(c){O.add("fa-".concat(c))});Object.keys(r2[M]).map(O.add.bind(O));Object.keys(r2[C]).map(O.add.bind(O));O=l2(O);function P1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!F)return Promise.resolve();var e=p.documentElement.classList,r=function(H){return e.add("".concat(C1,"-").concat(H))},s=function(H){return e.remove("".concat(C1,"-").concat(H))},i=z.autoFetchSvg?O:Z2.map(function(t){return"fa-".concat(t)}).concat(Object.keys(U4));i.includes("fa")||i.push("fa");var f=[".".concat(X1,":not([").concat(j,"])")].concat(i.map(function(t){return".".concat(t,":not([").concat(j,"])")})).join(", ");if(f.length===0)return Promise.resolve();var n=[];try{n=J(c.querySelectorAll(f))}catch{}if(n.length>0)r("pending"),s("complete");else return Promise.resolve();var l=f1.begin("onTree"),o=n.reduce(function(t,H){try{var v=m3(H);v&&t.push(v)}catch(h){j1||h.name==="MissingIcon"&&console.error(h)}return t},[]);return new Promise(function(t,H){Promise.all(o).then(function(v){o3(v,function(){r("active"),r("complete"),s("pending"),typeof a=="function"&&a(),l(),t()})}).catch(function(v){l(),H(v)})})}function O4(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;m3(c).then(function(e){e&&o3([e],a)})}function q4(c){return function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(a||{}).icon?a:G2(a||{}),s=e.mask;return s&&(s=(s||{}).icon?s:G2(s||{})),c(r,m(m({},e),{},{mask:s}))}}var W4=function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,s=r===void 0?A:r,i=e.symbol,f=i===void 0?!1:i,n=e.mask,l=n===void 0?null:n,o=e.maskId,t=o===void 0?null:o,H=e.title,v=H===void 0?null:H,h=e.titleId,d=h===void 0?null:h,b=e.classes,u=b===void 0?[]:b,S=e.attributes,L=S===void 0?{}:S,g=e.styles,w=g===void 0?{}:g;if(a){var N=a.prefix,W=a.iconName,I=a.icon;return w2(m({type:"icon"},a),function(){return X("beforeDOMElementCreation",{iconDefinition:a,params:e}),z.autoA11y&&(v?L["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(d||n2()):(L["aria-hidden"]="true",L.focusable="false")),i1({icons:{main:_2(I),mask:l?_2(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:W,transform:m(m({},A),s),symbol:f,title:v,maskId:t,titleId:d,extra:{attributes:L,styles:w,classes:u}})})}},I4={mixout:function(){return{icon:q4(W4)}},hooks:function(){return{mutationObserverCallbacks:function(e){return e.treeCallback=P1,e.nodeCallback=O4,e}}},provides:function(a){a.i2svg=function(e){var r=e.node,s=r===void 0?p:r,i=e.callback,f=i===void 0?function(){}:i;return P1(s,f)},a.generateSvgReplacementMutation=function(e,r){var s=r.iconName,i=r.title,f=r.titleId,n=r.prefix,l=r.transform,o=r.symbol,t=r.mask,H=r.maskId,v=r.extra;return new Promise(function(h,d){Promise.all([j2(s,n),t.iconName?j2(t.iconName,t.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(b){var u=$2(b,2),S=u[0],L=u[1];h([e,i1({icons:{main:S,mask:L},prefix:n,iconName:s,transform:l,symbol:o,maskId:H,title:i,titleId:f,extra:v,watchable:!0})])}).catch(d)})},a.generateAbstractIcon=function(e){var r=e.children,s=e.attributes,i=e.main,f=e.transform,n=e.styles,l=N2(n);l.length>0&&(s.style=l);var o;return a1(f)&&(o=B("generateAbstractTransformGrouping",{main:i,transform:f,containerWidth:i.width,iconWidth:i.width})),r.push(o||i.icon),{children:r,attributes:s}}}},G4={mixout:function(){return{layer:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.classes,i=s===void 0?[]:s;return w2({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:e,params:r});var f=[];return e(function(n){Array.isArray(n)?n.map(function(l){f=f.concat(l.abstract)}):f=f.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(l2(i)).join(" ")},children:f}]})}}}},_4={mixout:function(){return{counter:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.title,i=s===void 0?null:s,f=r.classes,n=f===void 0?[]:f,l=r.attributes,o=l===void 0?{}:l,t=r.styles,H=t===void 0?{}:t;return w2({type:"counter",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:r}),x4({content:e.toString(),title:i,extra:{attributes:o,styles:H,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(l2(n))}})})}}}},j4={mixout:function(){return{text:function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=r.transform,i=s===void 0?A:s,f=r.title,n=f===void 0?null:f,l=r.classes,o=l===void 0?[]:l,t=r.attributes,H=t===void 0?{}:t,v=r.styles,h=v===void 0?{}:v;return w2({type:"text",content:e},function(){return X("beforeDOMElementCreation",{content:e,params:r}),b1({content:e,transform:m(m({},A),i),title:n,extra:{attributes:H,styles:h,classes:["".concat(z.cssPrefix,"-layers-text")].concat(l2(o))}})})}}},provides:function(a){a.generateLayersText=function(e,r){var s=r.title,i=r.transform,f=r.extra,n=null,l=null;if(I1){var o=parseInt(getComputedStyle(e).fontSize,10),t=e.getBoundingClientRect();n=t.width/o,l=t.height/o}return z.autoA11y&&!s&&(f.attributes["aria-hidden"]="true"),Promise.resolve([e,b1({content:e.innerHTML,width:n,height:l,transform:i,title:s,extra:f,watchable:!0})])}}},X4=new RegExp('"',"ug"),T1=[1105920,1112319];function Y4(c){var a=c.replace(X4,""),e=n4(a,0),r=e>=T1[0]&&e<=T1[1],s=a.length===2?a[0]===a[1]:!1;return{value:q2(s?a[0]:a),isSecondary:r||s}}function B1(c,a){var e="".concat(D3).concat(a.replace(":","-"));return new Promise(function(r,s){if(c.getAttribute(e)!==null)return r();var i=J(c.children),f=i.filter(function(I){return I.getAttribute(O2)===a})[0],n=E.getComputedStyle(c,a),l=n.getPropertyValue("font-family").match(W3),o=n.getPropertyValue("font-weight"),t=n.getPropertyValue("content");if(f&&!l)return c.removeChild(f),r();if(l&&t!=="none"&&t!==""){var H=n.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?C:M,h=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?s2[v][l[2].toLowerCase()]:I3[v][o],d=Y4(H),b=d.value,u=d.isSecondary,S=l[0].startsWith("FontAwesome"),L=r1(h,b),g=L;if(S){var w=v4(b);w.iconName&&w.prefix&&(L=w.iconName,h=w.prefix)}if(L&&!u&&(!f||f.getAttribute(K2)!==h||f.getAttribute(J2)!==g)){c.setAttribute(e,g),f&&c.removeChild(f);var N=E4(),W=N.extra;W.attributes[O2]=a,j2(L,h).then(function(I){var P2=i1(m(m({},N),{},{icons:{main:I,mask:s1()},prefix:h,iconName:g,extra:W,watchable:!0})),R=p.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?c.insertBefore(R,c.firstChild):c.appendChild(R),R.outerHTML=P2.map(function(b3){return t2(b3)}).join(`
`),c.removeAttribute(e),r()}).catch(s)}else r()}else r()})}function $4(c){return Promise.all([B1(c,"::before"),B1(c,"::after")])}function Q4(c){return c.parentNode!==document.head&&!~U3.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(O2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}function F1(c){if(F)return new Promise(function(a,e){var r=J(c.querySelectorAll("*")).filter(Q4).map($4),s=f1.begin("searchPseudoElements");t3(),Promise.all(r).then(function(){s(),Y2(),a()}).catch(function(){s(),Y2(),e()})})}var K4={hooks:function(){return{mutationObserverCallbacks:function(e){return e.pseudoElementsCallback=F1,e}}},provides:function(a){a.pseudoElements2svg=function(e){var r=e.node,s=r===void 0?p:r;z.searchPseudoElements&&F1(s)}}},R1=!1,J4={mixout:function(){return{dom:{unwatch:function(){t3(),R1=!0}}}},hooks:function(){return{bootstrap:function(){y1(I2("mutationObserverCallbacks",{}))},noAuto:function(){B4()},watch:function(e){var r=e.observeMutationsRoot;R1?Y2():y1(I2("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},D1=function(a){var e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(r,s){var i=s.toLowerCase().split("-"),f=i[0],n=i.slice(1).join("-");if(f&&n==="h")return r.flipX=!0,r;if(f&&n==="v")return r.flipY=!0,r;if(n=parseFloat(n),isNaN(n))return r;switch(f){case"grow":r.size=r.size+n;break;case"shrink":r.size=r.size-n;break;case"left":r.x=r.x-n;break;case"right":r.x=r.x+n;break;case"up":r.y=r.y-n;break;case"down":r.y=r.y+n;break;case"rotate":r.rotate=r.rotate+n;break}return r},e)},Z4={mixout:function(){return{parse:{transform:function(e){return D1(e)}}}},hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-transform");return s&&(e.transform=D1(s)),e}}},provides:function(a){a.generateAbstractTransformGrouping=function(e){var r=e.main,s=e.transform,i=e.containerWidth,f=e.iconWidth,n={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(s.x*32,", ").concat(s.y*32,") "),o="scale(".concat(s.size/16*(s.flipX?-1:1),", ").concat(s.size/16*(s.flipY?-1:1),") "),t="rotate(".concat(s.rotate," 0 0)"),H={transform:"".concat(l," ").concat(o," ").concat(t)},v={transform:"translate(".concat(f/2*-1," -256)")},h={outer:n,inner:H,path:v};return{tag:"g",attributes:m({},h.outer),children:[{tag:"g",attributes:m({},h.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:m(m({},r.icon.attributes),h.path)}]}]}}}},D2={x:0,y:0,width:"100%",height:"100%"};function E1(c){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||a)&&(c.attributes.fill="black"),c}function c6(c){return c.tag==="g"?c.children:[c]}var a6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-mask"),i=s?S2(s.split(" ").map(function(f){return f.trim()})):s1();return i.prefix||(i.prefix=U()),e.mask=i,e.maskId=r.getAttribute("data-fa-mask-id"),e}}},provides:function(a){a.generateAbstractMask=function(e){var r=e.children,s=e.attributes,i=e.main,f=e.mask,n=e.maskId,l=e.transform,o=i.width,t=i.icon,H=f.width,v=f.icon,h=Z3({transform:l,containerWidth:H,iconWidth:o}),d={tag:"rect",attributes:m(m({},D2),{},{fill:"white"})},b=t.children?{children:t.children.map(E1)}:{},u={tag:"g",attributes:m({},h.inner),children:[E1(m({tag:t.tag,attributes:m(m({},t.attributes),h.path)},b))]},S={tag:"g",attributes:m({},h.outer),children:[u]},L="mask-".concat(n||n2()),g="clip-".concat(n||n2()),w={tag:"mask",attributes:m(m({},D2),{},{id:L,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,S]},N={tag:"defs",children:[{tag:"clipPath",attributes:{id:g},children:c6(v)},w]};return r.push(N,{tag:"rect",attributes:m({fill:"currentColor","clip-path":"url(#".concat(g,")"),mask:"url(#".concat(L,")")},D2)}),{children:r,attributes:s}}}},e6={provides:function(a){var e=!1;E.matchMedia&&(e=E.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var r=[],s={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:m(m({},s),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var f=m(m({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:m(m({},s),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||n.children.push({tag:"animate",attributes:m(m({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:m(m({},f),{},{values:"1;0;1;1;0;1;"})}),r.push(n),r.push({tag:"path",attributes:m(m({},s),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:m(m({},f),{},{values:"1;0;0;0;0;1;"})}]}),e||r.push({tag:"path",attributes:m(m({},s),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:m(m({},f),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},r6={hooks:function(){return{parseNodeAttributes:function(e,r){var s=r.getAttribute("data-fa-symbol"),i=s===null?!1:s===""?!0:s;return e.symbol=i,e}}}},s6=[e4,I4,G4,_4,j4,K4,J4,Z4,a6,e6,r6];M4(s6,{mixoutsTo:k});var L6=k.noAuto,d6=k.config,g6=k.library,x6=k.dom,k2=k.parse,N6=k.findIconDefinition,b6=k.toHtml,H3=k.icon,S6=k.layer,w6=k.text,k6=k.counter;var V=H1(u3()),m1=H1(S3());function L3(c,a){var e=Object.keys(c);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(c);a&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(c,s).enumerable})),e.push.apply(e,r)}return e}function q(c){for(var a=1;a<arguments.length;a++){var e=arguments[a]!=null?arguments[a]:{};a%2?L3(Object(e),!0).forEach(function(r){Z(c,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(e)):L3(Object(e)).forEach(function(r){Object.defineProperty(c,r,Object.getOwnPropertyDescriptor(e,r))})}return c}function y2(c){return y2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},y2(c)}function Z(c,a,e){return a in c?Object.defineProperty(c,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):c[a]=e,c}function n6(c,a){if(c==null)return{};var e={},r=Object.keys(c),s,i;for(i=0;i<r.length;i++)s=r[i],!(a.indexOf(s)>=0)&&(e[s]=c[s]);return e}function l6(c,a){if(c==null)return{};var e=n6(c,a),r,s;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(c);for(s=0;s<i.length;s++)r=i[s],!(a.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(c,r)&&(e[r]=c[r])}return e}function o1(c){return o6(c)||t6(c)||m6(c)||H6()}function o6(c){if(Array.isArray(c))return t1(c)}function t6(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function m6(c,a){if(c){if(typeof c=="string")return t1(c,a);var e=Object.prototype.toString.call(c).slice(8,-1);if(e==="Object"&&c.constructor&&(e=c.constructor.name),e==="Map"||e==="Set")return Array.from(c);if(e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t1(c,a)}}function t1(c,a){(a==null||a>c.length)&&(a=c.length);for(var e=0,r=new Array(a);e<a;e++)r[e]=c[e];return r}function H6(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function z6(c){var a,e=c.beat,r=c.fade,s=c.beatFade,i=c.bounce,f=c.shake,n=c.flash,l=c.spin,o=c.spinPulse,t=c.spinReverse,H=c.pulse,v=c.fixedWidth,h=c.inverse,d=c.border,b=c.listItem,u=c.flip,S=c.size,L=c.rotation,g=c.pull,w=(a={"fa-beat":e,"fa-fade":r,"fa-beat-fade":s,"fa-bounce":i,"fa-shake":f,"fa-flash":n,"fa-spin":l,"fa-spin-reverse":t,"fa-spin-pulse":o,"fa-pulse":H,"fa-fw":v,"fa-inverse":h,"fa-border":d,"fa-li":b,"fa-flip":u===!0,"fa-flip-horizontal":u==="horizontal"||u==="both","fa-flip-vertical":u==="vertical"||u==="both"},Z(a,"fa-".concat(S),typeof S<"u"&&S!==null),Z(a,"fa-rotate-".concat(L),typeof L<"u"&&L!==null&&L!==0),Z(a,"fa-pull-".concat(g),typeof g<"u"&&g!==null),Z(a,"fa-swap-opacity",c.swapOpacity),a);return Object.keys(w).map(function(N){return w[N]?N:null}).filter(function(N){return N})}function v6(c){return c=c-0,c===c}function g3(c){return v6(c)?c:(c=c.replace(/[\-_\s]+(.)?/g,function(a,e){return e?e.toUpperCase():""}),c.substr(0,1).toLowerCase()+c.substr(1))}var V6=["style"];function h6(c){return c.charAt(0).toUpperCase()+c.slice(1)}function M6(c){return c.split(";").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,e){var r=e.indexOf(":"),s=g3(e.slice(0,r)),i=e.slice(r+1).trim();return s.startsWith("webkit")?a[h6(s)]=i:a[s]=i,a},{})}function x3(c,a){var e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof a=="string")return a;var r=(a.children||[]).map(function(l){return x3(c,l)}),s=Object.keys(a.attributes||{}).reduce(function(l,o){var t=a.attributes[o];switch(o){case"class":l.attrs.className=t,delete a.attributes.class;break;case"style":l.attrs.style=M6(t);break;default:o.indexOf("aria-")===0||o.indexOf("data-")===0?l.attrs[o.toLowerCase()]=t:l.attrs[g3(o)]=t}return l},{attrs:{}}),i=e.style,f=i===void 0?{}:i,n=l6(e,V6);return s.attrs.style=q(q({},s.attrs.style),f),c.apply(void 0,[a.tag,q(q({},s.attrs),n)].concat(o1(r)))}var N3=!1;try{N3=!0}catch{}function p6(){if(!N3&&console&&typeof console.error=="function"){var c;(c=console).error.apply(c,arguments)}}function d3(c){if(c&&y2(c)==="object"&&c.prefix&&c.iconName&&c.icon)return c;if(k2.icon)return k2.icon(c);if(c===null)return null;if(c&&y2(c)==="object"&&c.prefix&&c.iconName)return c;if(Array.isArray(c)&&c.length===2)return{prefix:c[0],iconName:c[1]};if(typeof c=="string")return{prefix:"fas",iconName:c}}function l1(c,a){return Array.isArray(a)&&a.length>0||!Array.isArray(a)&&a?Z({},c,a):{}}var A2=m1.default.forwardRef(function(c,a){var e=c.icon,r=c.mask,s=c.symbol,i=c.className,f=c.title,n=c.titleId,l=c.maskId,o=d3(e),t=l1("classes",[].concat(o1(z6(c)),o1(i.split(" ")))),H=l1("transform",typeof c.transform=="string"?k2.transform(c.transform):c.transform),v=l1("mask",d3(r)),h=H3(o,q(q(q(q({},t),H),v),{},{symbol:s,title:f,titleId:n,maskId:l}));if(!h)return p6("Could not find icon",o),null;var d=h.abstract,b={ref:a};return Object.keys(c).forEach(function(u){A2.defaultProps.hasOwnProperty(u)||(b[u]=c[u])}),C6(d[0],b)});A2.displayName="FontAwesomeIcon";A2.propTypes={beat:V.default.bool,border:V.default.bool,beatFade:V.default.bool,bounce:V.default.bool,className:V.default.string,fade:V.default.bool,flash:V.default.bool,mask:V.default.oneOfType([V.default.object,V.default.array,V.default.string]),maskId:V.default.string,fixedWidth:V.default.bool,inverse:V.default.bool,flip:V.default.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.default.oneOfType([V.default.object,V.default.array,V.default.string]),listItem:V.default.bool,pull:V.default.oneOf(["right","left"]),pulse:V.default.bool,rotation:V.default.oneOf([0,90,180,270]),shake:V.default.bool,size:V.default.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.default.bool,spinPulse:V.default.bool,spinReverse:V.default.bool,symbol:V.default.oneOfType([V.default.bool,V.default.string]),title:V.default.string,titleId:V.default.string,transform:V.default.oneOfType([V.default.string,V.default.object]),swapOpacity:V.default.bool};A2.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var C6=x3.bind(null,m1.default.createElement);var E6={prefix:"fas",iconName:"arrow-right",icon:[448,512,[8594],"f061","M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"]};var U6={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M234.5 5.7c13.9-5 29.1-5 43.1 0l192 68.6C495 83.4 512 107.5 512 134.6V377.4c0 27-17 51.2-42.5 60.3l-192 68.6c-13.9 5-29.1 5-43.1 0l-192-68.6C17 428.6 0 404.5 0 377.4V134.6c0-27 17-51.2 42.5-60.3l192-68.6zM256 66L82.3 128 256 190l173.7-62L256 66zm32 368.6l160-57.1v-188L288 246.6v188z"]};var O6={prefix:"fas",iconName:"arrow-left",icon:[448,512,[8592],"f060","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]};var q6={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]};var W6={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};export{A2 as a,E6 as b,U6 as c,O6 as d,q6 as e,W6 as f};
