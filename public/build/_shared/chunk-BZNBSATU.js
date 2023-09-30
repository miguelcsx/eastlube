import{A as O,b as D,c as P,d as Y,e as T,f as de,g as fe,h as me,i as F,j as Q,k as Z,l as pe,m as he,n as U,o as N,p as q,q as ee,r as te,s as re,t as Re,v as we,w as ye,x as _e,y as ge,z as xe}from"/build/_shared/chunk-NR2ZEJD3.js";var k=D(P());O();function h(){return h=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},h.apply(this,arguments)}var s=D(P());O();function C(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}O();async function J(e,r){if(e.id in r)return r[e.id];try{let t=await import(e.module);return r[e.id]=t,t}catch{return window.location.reload(),new Promise(()=>{})}}function Ee(e,r,t){let o=e.map(l=>{var i;let a=r[l.route.id];return((i=a.links)===null||i===void 0?void 0:i.call(a))||[]}).flat(1),n=qe(e,t);return Le(o,n)}async function ve(e){if(!e.links||!tt())return;let r=e.links();if(!r)return;let t=[];for(let n of r)!X(n)&&n.rel==="stylesheet"&&t.push({...n,rel:"preload",as:"style"});let o=t.filter(n=>(!n.media||window.matchMedia(n.media).matches)&&!document.querySelector(`link[rel="stylesheet"][href="${n.href}"]`));await Promise.all(o.map(Qe))}async function Qe(e){return new Promise(r=>{let t=document.createElement("link");Object.assign(t,e);function o(){document.head.contains(t)&&document.head.removeChild(t)}t.onload=()=>{o(),r()},t.onerror=()=>{o(),r()},document.head.appendChild(t)})}function X(e){return e!=null&&typeof e.page=="string"}function Ze(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Se(e,r,t){let o=await Promise.all(e.map(async n=>{let l=await J(r.routes[n.route.id],t);return l.links?l.links():[]}));return Le(o.flat(1).filter(Ze).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(n=>n.rel==="stylesheet"?{...n,rel:"prefetch",as:"style"}:{...n,rel:"prefetch"}))}function ne(e,r,t,o,n,l){let i=be(e),a=(u,c)=>t[c]?u.route.id!==t[c].route.id:!0,d=(u,c)=>{var m;return t[c].pathname!==u.pathname||((m=t[c].route.path)===null||m===void 0?void 0:m.endsWith("*"))&&t[c].params["*"]!==u.params["*"]};return l==="data"&&n.search!==i.search?r.filter((u,c)=>{if(!o.routes[u.route.id].hasLoader)return!1;if(a(u,c)||d(u,c))return!0;if(u.route.shouldRevalidate){var R;let w=u.route.shouldRevalidate({currentUrl:new URL(n.pathname+n.search+n.hash,window.origin),currentParams:((R=t[0])===null||R===void 0?void 0:R.params)||{},nextUrl:new URL(e,window.origin),nextParams:u.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):r.filter((u,c)=>{let m=o.routes[u.route.id];return(l==="assets"||m.hasLoader)&&(a(u,c)||d(u,c))})}function ke(e,r,t){let o=be(e);return oe(r.filter(n=>t.routes[n.route.id].hasLoader).map(n=>{let{pathname:l,search:i}=o,a=new URLSearchParams(i);return a.set("_data",n.route.id),`${l}?${a}`}))}function Me(e,r){return oe(e.map(t=>{let o=r.routes[t.route.id],n=[o.module];return o.imports&&(n=n.concat(o.imports)),n}).flat(1))}function qe(e,r){return oe(e.map(t=>{let o=r.routes[t.route.id],n=[o.module];return o.imports&&(n=n.concat(o.imports)),n}).flat(1))}function oe(e){return[...new Set(e)]}function et(e){let r={},t=Object.keys(e).sort();for(let o of t)r[o]=e[o];return r}function Le(e,r){let t=new Set,o=new Set(r);return e.reduce((n,l)=>{if(r&&!X(l)&&l.as==="script"&&l.href&&o.has(l.href))return n;let a=JSON.stringify(et(l));return t.has(a)||(t.add(a),n.push({key:a,link:l})),n},[])}function be(e){let r=Y(e);return r.search===void 0&&(r.search=""),r}var B;function tt(){if(B!==void 0)return B;let e=document.createElement("link");return B=e.relList.supports("preload"),e=null,B}var rt={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},nt=/[&><\u2028\u2029]/g;function H(e){return e.replace(nt,r=>rt[r])}function ae(e){return{__html:e}}function Ne(){let e=s.useContext(pe);return C(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function z(){let e=s.useContext(he);return C(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var A=s.createContext(void 0);A.displayName="Remix";function j(){let e=s.useContext(A);return C(e,"You must render this element inside a <Remix> element"),e}function Ce(e,r){let[t,o]=s.useState(!1),[n,l]=s.useState(!1),{onFocus:i,onBlur:a,onMouseEnter:d,onMouseLeave:f,onTouchStart:u}=r,c=s.useRef(null);s.useEffect(()=>{if(e==="render"&&l(!0),e==="viewport"){let w=v=>{v.forEach(b=>{l(b.isIntersecting)})},x=new IntersectionObserver(w,{threshold:.5});return c.current&&x.observe(c.current),()=>{x.disconnect()}}},[e]);let m=()=>{e==="intent"&&o(!0)},R=()=>{e==="intent"&&(o(!1),l(!1))};return s.useEffect(()=>{if(t){let w=setTimeout(()=>{l(!0)},100);return()=>{clearTimeout(w)}}},[t]),[n,c,{onFocus:I(i,m),onBlur:I(a,R),onMouseEnter:I(d,m),onMouseLeave:I(f,R),onTouchStart:I(u,m)}]}var $e=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,De=s.forwardRef(({to:e,prefetch:r="none",...t},o)=>{let n=typeof e=="string"&&$e.test(e),l=U(e),[i,a,d]=Ce(r,t);return s.createElement(s.Fragment,null,s.createElement(ge,h({},t,d,{ref:Ie(o,a),to:e})),i&&!n?s.createElement(V,{page:l}):null)});De.displayName="NavLink";var Pe=s.forwardRef(({to:e,prefetch:r="none",...t},o)=>{let n=typeof e=="string"&&$e.test(e),l=U(e),[i,a,d]=Ce(r,t);return s.createElement(s.Fragment,null,s.createElement(_e,h({},t,d,{ref:Ie(o,a),to:e})),i&&!n?s.createElement(V,{page:l}):null)});Pe.displayName="Link";function I(e,r){return t=>{e&&e(t),t.defaultPrevented||r(t)}}function ot(){let{manifest:e,routeModules:r}=j(),{errors:t,matches:o}=z(),n=t?o.slice(0,o.findIndex(i=>t[i.route.id])+1):o,l=s.useMemo(()=>Ee(n,r,e),[n,r,e]);return s.createElement(s.Fragment,null,l.map(({key:i,link:a})=>X(a)?s.createElement(V,h({key:i},a)):s.createElement("link",h({key:i},a))))}function V({page:e,...r}){let{router:t}=Ne(),o=s.useMemo(()=>T(t.routes,e),[t.routes,e]);return o?s.createElement(it,h({page:e,matches:o},r)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function at(e){let{manifest:r,routeModules:t}=j(),[o,n]=s.useState([]);return s.useEffect(()=>{let l=!1;return Se(e,r,t).then(i=>{l||n(i)}),()=>{l=!0}},[e,r,t]),o}function it({page:e,matches:r,...t}){let o=N(),{manifest:n}=j(),{matches:l}=z(),i=s.useMemo(()=>ne(e,r,l,n,o,"data"),[e,r,l,n,o]),a=s.useMemo(()=>ne(e,r,l,n,o,"assets"),[e,r,l,n,o]),d=s.useMemo(()=>ke(e,i,n),[i,e,n]),f=s.useMemo(()=>Me(a,n),[a,n]),u=at(a);return s.createElement(s.Fragment,null,d.map(c=>s.createElement("link",h({key:c,rel:"prefetch",as:"fetch",href:c},t))),f.map(c=>s.createElement("link",h({key:c,rel:"modulepreload",href:c},t))),u.map(({key:c,link:m})=>s.createElement("link",h({key:c},m))))}function st(){let{routeModules:e}=j(),{errors:r,matches:t,loaderData:o}=z(),n=N(),l=t,i=null;if(r){let u=t.findIndex(c=>r[c.route.id]);l=t.slice(0,u+1),i=r[t[u].route.id]}let a=[],d=null,f=[];for(let u=0;u<l.length;u++){let c=l[u],m=c.route.id,R=o[m],w=c.params,x=e[m],v=[],b={id:m,data:R,meta:[],params:c.params,pathname:c.pathname,handle:c.route.handle,error:i};if(f[u]=b,x!=null&&x.meta?v=typeof x.meta=="function"?x.meta({data:R,params:w,location:n,matches:f,error:i}):Array.isArray(x.meta)?[...x.meta]:x.meta:d&&(v=[...d]),v=v||[],!Array.isArray(v))throw new Error("The route at "+c.route.path+` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`);b.meta=v,f[u]=b,a=[...v],d=a}return s.createElement(s.Fragment,null,a.flat().map(u=>{if(!u)return null;if("tagName"in u){let c=u.tagName;return delete u.tagName,lt(c)?s.createElement(c,h({key:JSON.stringify(u)},u)):(console.warn(`A meta object uses an invalid tagName: ${c}. Expected either 'link' or 'meta'`),null)}if("title"in u)return s.createElement("title",{key:"title"},String(u.title));if("charset"in u&&(u.charSet??=u.charset,delete u.charset),"charSet"in u&&u.charSet!=null)return typeof u.charSet=="string"?s.createElement("meta",{key:"charSet",charSet:u.charSet}):null;if("script:ld+json"in u)try{let c=JSON.stringify(u["script:ld+json"]);return s.createElement("script",{key:`script:ld+json:${c}`,type:"application/ld+json",dangerouslySetInnerHTML:{__html:c}})}catch{return null}return s.createElement("meta",h({key:JSON.stringify(u)},u))}))}function lt(e){return typeof e=="string"&&/^(meta|link)$/.test(e)}function He(e){return s.createElement(we,e)}var ie=!1;function ut(e){let{manifest:r,serverHandoffString:t,abortDelay:o,serializeError:n}=j(),{router:l,static:i,staticContext:a}=Ne(),{matches:d}=z(),f=q();s.useEffect(()=>{ie=!0},[]);let u=(p,y)=>{let g;return n&&y instanceof Error?g=n(y):g=y,`${JSON.stringify(p)}:__remixContext.p(!1, ${H(JSON.stringify(g))})`},c=(p,y,g)=>{let S;try{S=JSON.stringify(g)}catch(E){return u(y,E)}return`${JSON.stringify(y)}:__remixContext.p(${H(S)})`},m=(p,y,g)=>{let S;return n&&g instanceof Error?S=n(g):S=g,`__remixContext.r(${JSON.stringify(p)}, ${JSON.stringify(y)}, !1, ${H(JSON.stringify(S))})`},R=(p,y,g)=>{let S;try{S=JSON.stringify(g)}catch(E){return m(p,y,E)}return`__remixContext.r(${JSON.stringify(p)}, ${JSON.stringify(y)}, ${H(S)})`},w=[],x=s.useMemo(()=>{var p;let y=a?`window.__remixContext = ${t};`:" ",g=a?.activeDeferreds;y+=g?["__remixContext.p = function(v,e,p,x) {","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p=Promise.reject(x);","  } else {","    p=Promise.resolve(v);","  }","  return p;","};","__remixContext.n = function(i,k) {","  __remixContext.t = __remixContext.t || {};","  __remixContext.t[i] = __remixContext.t[i] || {};","  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});",typeof o=="number"?`setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${o});`:"","  return p;","};","__remixContext.r = function(i,k,v,e,p,x) {","  p = __remixContext.t[i][k];","  if (typeof e !== 'undefined') {",`    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,"    p.e(x);","  } else {","    p.r(v);","  }","};"].join(`
`)+Object.entries(g).map(([E,M])=>{let Ke=new Set(M.pendingKeys),Ye=M.deferredKeys.map(L=>{if(Ke.has(L))return w.push(s.createElement(Oe,{key:`${E} | ${L}`,deferredData:M,routeId:E,dataKey:L,scriptProps:e,serializeData:R,serializeError:m})),`${JSON.stringify(L)}:__remixContext.n(${JSON.stringify(E)}, ${JSON.stringify(L)})`;{let K=M.data[L];return typeof K._error<"u"?u(L,K._error):c(E,L,K._data)}}).join(`,
`);return`Object.assign(__remixContext.state.loaderData[${JSON.stringify(E)}], {${Ye}});`}).join(`
`)+(w.length>0?`__remixContext.a=${w.length};`:""):"";let S=i?`${(p=r.hmr)!==null&&p!==void 0&&p.runtime?`import ${JSON.stringify(r.hmr.runtime)};`:""}import ${JSON.stringify(r.url)};
${d.map((E,M)=>`import * as route${M} from ${JSON.stringify(r.routes[E.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${d.map((E,M)=>`${JSON.stringify(E.route.id)}:route${M}`).join(",")}};

import(${JSON.stringify(r.entry.module)});`:" ";return s.createElement(s.Fragment,null,s.createElement("script",h({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:ae(y),type:void 0})),s.createElement("script",h({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:ae(S),type:"module",async:!0})))},[]);if(!i&&typeof __remixContext=="object"&&__remixContext.a)for(let p=0;p<__remixContext.a;p++)w.push(s.createElement(Oe,{key:p,scriptProps:e,serializeData:R,serializeError:m}));let v=s.useMemo(()=>{if(f.location){let p=T(l.routes,f.location);return C(p,`No routes match path "${f.location.pathname}"`),p}return[]},[f.location,l.routes]),b=d.concat(v).map(p=>{let y=r.routes[p.route.id];return(y.imports||[]).concat([y.module])}).flat(1),Ge=ie?[]:r.entry.imports.concat(b);return ie?null:s.createElement(s.Fragment,null,s.createElement("link",{rel:"modulepreload",href:r.entry.module,crossOrigin:e.crossOrigin}),dt(Ge).map(p=>s.createElement("link",{key:p,rel:"modulepreload",href:p,crossOrigin:e.crossOrigin})),x,w)}function Oe({dataKey:e,deferredData:r,routeId:t,scriptProps:o,serializeData:n,serializeError:l}){return typeof document>"u"&&r&&e&&t&&C(r.pendingKeys.includes(e),`Deferred data for route ${t} with key ${e} was not pending but tried to render a script for it.`),s.createElement(s.Suspense,{fallback:typeof document>"u"&&r&&e&&t?null:s.createElement("script",h({},o,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}}))},typeof document>"u"&&r&&e&&t?s.createElement(He,{resolve:r.data[e],errorElement:s.createElement(ct,{dataKey:e,routeId:t,scriptProps:o,serializeError:l}),children:i=>s.createElement("script",h({},o,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:n(t,e,i)}}))}):s.createElement("script",h({},o,{async:!0,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:" "}})))}function ct({dataKey:e,routeId:r,scriptProps:t,serializeError:o}){let n=re();return s.createElement("script",h({},t,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:o(r,e,n)}}))}function dt(e){return[...new Set(e)]}var ft=()=>null;function Ie(...e){return r=>{e.forEach(t=>{typeof t=="function"?t(r):t!=null&&(t.current=r)})}}var _=D(P());O();var W=class extends _.Component{constructor(r){super(r),this.state={error:r.error||null,location:r.location}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,t){return t.location!==r.location?{error:r.error||null,location:r.location}:{error:r.error||t.error,location:t.location}}render(){return this.state.error?_.createElement(se,{error:this.state.error}):this.props.children}};function se({error:e}){if(console.error(e),Q(e))return _.createElement(Ae,{title:"Unhandled Thrown Response!"},_.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText));let r;if(e instanceof Error)r=e;else{let t=e==null?"Unknown Error":typeof e=="object"&&"toString"in e?e.toString():JSON.stringify(e);r=new Error(t)}return _.createElement(Ae,{title:"Application Error!"},_.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},_.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),_.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},r.stack)))}function Ae({title:e,children:r}){return _.createElement("html",{lang:"en"},_.createElement("head",null,_.createElement("meta",{charSet:"utf-8"}),_.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),_.createElement("title",null,e)),_.createElement("body",null,r,_.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}Z();function je(e){if(!e)return null;let r=Object.entries(e),t={};for(let[o,n]of r)if(n&&n.__type==="RouteErrorResponse")t[o]=new F(n.status,n.statusText,n.data,n.internal===!0);else if(n&&n.__type==="Error"){if(n.__subType){let l=window[n.__subType];if(typeof l=="function")try{let i=new l(n.message);i.stack=n.stack,t[o]=i}catch{}}if(t[o]==null){let l=new Error(n.message);l.stack=n.stack,t[o]=l}}else t[o]=n;return t}var Ve=D(P());Z();O();Z();function Fe(e){return e.headers.get("X-Remix-Catch")!=null}function mt(e){return e.headers.get("X-Remix-Error")!=null}function pt(e){return ht(e)&&e.status>=400&&e.headers.get("X-Remix-Error")==null&&e.headers.get("X-Remix-Catch")==null&&e.headers.get("X-Remix-Response")==null}function Ue(e){return e.headers.get("X-Remix-Redirect")!=null}function Je(e){var r;return!!((r=e.headers.get("Content-Type"))!==null&&r!==void 0&&r.match(/text\/remix-deferred/))}function ht(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}async function le(e,r,t=0){let o=new URL(e.url);o.searchParams.set("_data",r);let n={signal:e.signal};if(e.method!=="GET"){n.method=e.method;let a=e.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?(n.headers={"Content-Type":a},n.body=JSON.stringify(await e.json())):a&&/\btext\/plain\b/.test(a)?(n.headers={"Content-Type":a},n.body=await e.text()):a&&/\bapplication\/x-www-form-urlencoded\b/.test(a)?n.body=new URLSearchParams(await e.text()):n.body=await e.formData()}t>0&&await new Promise(a=>setTimeout(a,5**t*10));let l=window.__remixRevalidation,i=await fetch(o.href,n).catch(a=>{if(typeof l=="number"&&l===window.__remixRevalidation&&a?.name==="TypeError"&&t<3)return le(e,r,t+1);throw a});if(mt(i)){let a=await i.json(),d=new Error(a.message);return d.stack=a.stack,d}if(pt(i)){let a=await i.text(),d=new Error(a);return d.stack=void 0,d}return i}var Rt="__deferred_promise:";async function Be(e){if(!e)throw new Error("parseDeferredReadableStream requires stream argument");let r,t={};try{let o=wt(e),l=(await o.next()).value;if(!l)throw new Error("no critical data");let i=JSON.parse(l);if(typeof i=="object"&&i!==null)for(let[a,d]of Object.entries(i))typeof d!="string"||!d.startsWith(Rt)||(r=r||{},r[a]=new Promise((f,u)=>{t[a]={resolve:c=>{f(c),delete t[a]},reject:c=>{u(c),delete t[a]}}}));return(async()=>{try{for await(let a of o){let[d,...f]=a.split(":"),u=f.join(":"),c=JSON.parse(u);if(d==="data")for(let[m,R]of Object.entries(c))t[m]&&t[m].resolve(R);else if(d==="error")for(let[m,R]of Object.entries(c)){let w=new Error(R.message);w.stack=R.stack,t[m]&&t[m].reject(w)}}for(let[a,d]of Object.entries(t))d.reject(new de(`Deferred ${a} will never be resolved`))}catch(a){for(let d of Object.values(t))d.reject(a)}})(),new fe({...i,...r})}catch(o){for(let n of Object.values(t))n.reject(o);throw o}}async function*wt(e){let r=e.getReader(),t=[],o=[],n=!1,l=new TextEncoder,i=new TextDecoder,a=async()=>{if(o.length>0)return o.shift();for(;!n&&o.length===0;){let f=await r.read();if(f.done){n=!0;break}t.push(f.value);try{let c=i.decode(Te(...t)).split(`

`);if(c.length>=2&&(o.push(...c.slice(0,-1)),t=[l.encode(c.slice(-1).join(`

`))]),o.length>0)break}catch{continue}}return o.length>0||t.length>0&&(o=i.decode(Te(...t)).split(`

`).filter(u=>u),t=[]),o.shift()},d=await a();for(;d;)yield d,d=await a()}function Te(...e){let r=new Uint8Array(e.reduce((o,n)=>o+n.length,0)),t=0;for(let o of e)r.set(o,t),t+=o.length;return r}function yt(e){let r={};return Object.values(e).forEach(t=>{let o=t.parentId||"";r[o]||(r[o]=[]),r[o].push(t)}),r}function ue(e,r,t,o="",n=yt(e),l){return(n[o]||[]).map(i=>{let a=r?.[i.id],d={id:i.id,index:i.index,path:i.path,loader({request:u}){return i.hasLoader?ze(u,i):null},action({request:u}){if(!i.hasAction){let c=`Route "${i.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`;return console.error(c),Promise.reject(new F(405,"Method Not Allowed",new Error(c),!0))}return ze(u,i)},...a?{Component:a.default,ErrorBoundary:a.ErrorBoundary?a.ErrorBoundary:i.id==="root"?()=>Ve.createElement(se,{error:te()}):void 0,handle:a.handle,shouldRevalidate:l?Xe(i.id,a.shouldRevalidate,l):a.shouldRevalidate}:{lazy:async()=>{let u=await _t(i,r);return l&&(u.shouldRevalidate=Xe(i.id,u.shouldRevalidate,l)),u}}},f=ue(e,r,t,i.id,n,l);return f.length>0&&(d.children=f),d})}function Xe(e,r,t){let o=!1;return n=>o?r?r(n):n.defaultShouldRevalidate:(o=!0,t.has(e))}async function _t(e,r){let t=await J(e,r);await ve(t);let o=typeof t.default=="object"&&Object.keys(t.default||{}).length===0;return{...t.default!=null&&!o?{Component:t.default}:{},ErrorBoundary:t.ErrorBoundary,handle:t.handle,links:t.links,meta:t.meta,shouldRevalidate:t.shouldRevalidate}}async function ze(e,r){let t=await le(e,r.id);if(t instanceof Error)throw t;if(Ue(t))throw gt(t);if(Fe(t))throw t;return Je(t)&&t.body?await Be(t.body):t}function gt(e){let r=parseInt(e.headers.get("X-Remix-Status"),10)||302,t=e.headers.get("X-Remix-Redirect"),o={},n=e.headers.get("X-Remix-Revalidate");n&&(o["X-Remix-Revalidate"]=n);let l=e.headers.get("X-Remix-Reload-Document");return l&&(o["X-Remix-Reload-Document"]=l),me(t,{status:r,headers:o})}var $;var ce,ar=new Promise(e=>{ce=e}).catch(()=>{});function xt(e){if(!$){let o=window.__remixContext.url,n=window.location.pathname;if(o!==n){let a=`Initial URL (${o}) does not match URL at time of hydration (${n}), reloading page...`;return console.error(a),window.location.reload(),k.createElement(k.Fragment,null)}let l=ue(window.__remixManifest.routes,window.__remixRouteModules,window.__remixContext.future),i=window.__remixContext.state;i&&i.errors&&(i={...i,errors:je(i.errors)}),$=ye(l,{hydrationData:i,future:{v7_normalizeFormMethod:!0}}),ce&&ce($)}let[r,t]=k.useState($.state.location);return k.useLayoutEffect(()=>$.subscribe(o=>{o.location!==r&&t(o.location)}),[r]),k.createElement(A.Provider,{value:{manifest:window.__remixManifest,routeModules:window.__remixRouteModules,future:window.__remixContext.future}},k.createElement(W,{location:r},k.createElement(Re,{router:$,fallbackElement:null,future:{v7_startTransition:!0}})))}O();var G=D(P());O();var We="positions";function Et({getKey:e,...r}){let t=N(),o=ee();xe({getKey:e,storageKey:We});let n=G.useMemo(()=>{if(!e)return null;let i=e(t,o);return i!==t.key?i:null},[]),l=((i,a)=>{if(!window.history.state||!window.history.state.key){let d=Math.random().toString(32).slice(2);window.history.replaceState({key:d},"")}try{let f=JSON.parse(sessionStorage.getItem(i)||"{}")[a||window.history.state.key];typeof f=="number"&&window.scrollTo(0,f)}catch(d){console.error(d),sessionStorage.removeItem(i)}}).toString();return G.createElement("script",h({},r,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${l})(${JSON.stringify(We)}, ${JSON.stringify(n)})`}}))}export{ot as a,st as b,ut as c,ft as d,xt as e,Et as f};
/*! Bundled license information:

@remix-run/react/dist/esm/_virtual/_rollupPluginBabelHelpers.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/invariant.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routeModules.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/links.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/markup.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/components.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errorBoundaries.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/errors.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/data.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/routes.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/browser.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/scroll-restoration.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)

@remix-run/react/dist/esm/index.js:
  (**
   * @remix-run/react v2.0.1
   *
   * Copyright (c) Remix Software Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.md file in the root directory of this source tree.
   *
   * @license MIT
   *)
*/
