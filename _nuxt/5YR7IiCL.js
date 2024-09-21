import{x as H,y as J,V as X,W as Z,C as U,X as ee,r as E,l as P,Y as te,Z as x,$ as ne,g as V,e as re,A as k,a0 as oe}from"./AsXwsiKj.js";function B(e){return X()?(Z(e),!0):!1}function N(e){return typeof e=="function"?e():U(e)}const ae=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ie=Object.prototype.toString,se=e=>ie.call(e)==="[object Object]",Y=()=>{};function ue(e,t){function n(...a){return new Promise((r,i)=>{Promise.resolve(e(()=>t.apply(this,a),{fn:t,thisArg:this,args:a})).then(r).catch(i)})}return n}const $=e=>e();function le(e=$){const t=E(!0);function n(){t.value=!1}function a(){t.value=!0}const r=(...i)=>{t.value&&e(...i)};return{isActive:x(t),pause:n,resume:a,eventFilter:r}}function ce(e){return P()}function fe(...e){if(e.length!==1)return te(...e);const t=e[0];return typeof t=="function"?x(ne(()=>({get:t,set:Y}))):E(t)}function de(e,t,n={}){const{eventFilter:a=$,...r}=n;return V(e,ue(a,t),r)}function pe(e,t,n={}){const{eventFilter:a,...r}=n,{eventFilter:i,pause:c,resume:s,isActive:u}=le(a);return{stop:de(e,t,{...r,eventFilter:i}),pause:c,resume:s,isActive:u}}function z(e,t=!0,n){ce()?H(e,n):t?e():J(e)}function Ee(e=!1,t={}){const{truthyValue:n=!0,falsyValue:a=!1}=t,r=ee(e),i=E(e);function c(s){if(arguments.length)return i.value=s,i.value;{const u=N(n);return i.value=i.value===u?N(a):u,i.value}}return r?c:[i,c]}const O=ae?window:void 0;function G(e){var t;const n=N(e);return(t=n==null?void 0:n.$el)!=null?t:n}function j(...e){let t,n,a,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,a,r]=e,t=O):[t,n,a,r]=e,!t)return Y;Array.isArray(n)||(n=[n]),Array.isArray(a)||(a=[a]);const i=[],c=()=>{i.forEach(m=>m()),i.length=0},s=(m,p,S,v)=>(m.addEventListener(p,S,v),()=>m.removeEventListener(p,S,v)),u=V(()=>[G(t),N(r)],([m,p])=>{if(c(),!m)return;const S=se(p)?{...p}:p;i.push(...n.flatMap(v=>a.map(w=>s(m,v,w,S))))},{immediate:!0,flush:"post"}),f=()=>{u(),c()};return B(f),f}function he(){const e=E(!1),t=P();return t&&H(()=>{e.value=!0},t),e}function me(e){const t=he();return k(()=>(t.value,!!e()))}function K(e,t={}){const{window:n=O}=t,a=me(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let r;const i=E(!1),c=f=>{i.value=f.matches},s=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},u=re(()=>{a.value&&(s(),r=n.matchMedia(N(e)),"addEventListener"in r?r.addEventListener("change",c):r.addListener(c),i.value=r.matches)});return B(()=>{u(),s(),r=void 0}),i}const F=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},I="__vueuse_ssr_handlers__",ge=ve();function ve(){return I in F||(F[I]=F[I]||{}),F[I]}function Q(e,t){return ge[e]||t}function q(e){return K("(prefers-color-scheme: dark)",e)}function we(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ye={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},R="vueuse-storage";function Se(e,t,n,a={}){var r;const{flush:i="pre",deep:c=!0,listenToStorageChanges:s=!0,writeDefaults:u=!0,mergeDefaults:f=!1,shallow:m,window:p=O,eventFilter:S,onError:v=o=>{console.error(o)},initOnMounted:w}=a,g=(m?oe:E)(typeof t=="function"?t():t);if(!n)try{n=Q("getDefaultStorage",()=>{var o;return(o=O)==null?void 0:o.localStorage})()}catch(o){v(o)}if(!n)return g;const y=N(t),M=we(y),b=(r=a.serializer)!=null?r:ye[M],{pause:L,resume:h}=pe(g,()=>W(g.value),{flush:i,deep:c,eventFilter:S});p&&s&&z(()=>{n instanceof Storage?j(p,"storage",C):j(p,R,_),w&&C()}),w||C();function A(o,l){if(p){const d={key:e,oldValue:o,newValue:l,storageArea:n};p.dispatchEvent(n instanceof Storage?new StorageEvent("storage",d):new CustomEvent(R,{detail:d}))}}function W(o){try{const l=n.getItem(e);if(o==null)A(l,null),n.removeItem(e);else{const d=b.write(o);l!==d&&(n.setItem(e,d),A(l,d))}}catch(l){v(l)}}function T(o){const l=o?o.newValue:n.getItem(e);if(l==null)return u&&y!=null&&n.setItem(e,b.write(y)),y;if(!o&&f){const d=b.read(l);return typeof f=="function"?f(d,y):M==="object"&&!Array.isArray(d)?{...y,...d}:d}else return typeof l!="string"?l:b.read(l)}function C(o){if(!(o&&o.storageArea!==n)){if(o&&o.key==null){g.value=y;return}if(!(o&&o.key!==e)){L();try{(o==null?void 0:o.newValue)!==b.write(g.value)&&(g.value=T(o))}catch(l){v(l)}finally{o?J(h):h()}}}}function _(o){C(o.detail)}return g}const be="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Ae(e={}){const{selector:t="html",attribute:n="class",initialValue:a="auto",window:r=O,storage:i,storageKey:c="vueuse-color-scheme",listenToStorageChanges:s=!0,storageRef:u,emitAuto:f,disableTransition:m=!0}=e,p={auto:"",light:"light",dark:"dark",...e.modes||{}},S=q({window:r}),v=k(()=>S.value?"dark":"light"),w=u||(c==null?fe(a):Se(c,a,i,{window:r,listenToStorageChanges:s})),g=k(()=>w.value==="auto"?v.value:w.value),y=Q("updateHTMLAttrs",(h,A,W)=>{const T=typeof h=="string"?r==null?void 0:r.document.querySelector(h):G(h);if(!T)return;const C=new Set,_=new Set;let o=null;if(A==="class"){const d=W.split(/\s/g);Object.values(p).flatMap(D=>(D||"").split(/\s/g)).filter(Boolean).forEach(D=>{d.includes(D)?C.add(D):_.add(D)})}else o={key:A,value:W};if(C.size===0&&_.size===0&&o===null)return;let l;m&&(l=r.document.createElement("style"),l.appendChild(document.createTextNode(be)),r.document.head.appendChild(l));for(const d of C)T.classList.add(d);for(const d of _)T.classList.remove(d);o&&T.setAttribute(o.key,o.value),m&&(r.getComputedStyle(l).opacity,document.head.removeChild(l))});function M(h){var A;y(t,n,(A=p[h])!=null?A:h)}function b(h){e.onChanged?e.onChanged(h,M):M(h)}V(g,b,{flush:"post",immediate:!0}),z(()=>b(g.value));const L=k({get(){return f?w.value:g.value},set(h){w.value=h}});try{return Object.assign(L,{store:w,system:v,state:g})}catch{return L}}function Oe(e={}){const{valueDark:t="dark",valueLight:n="",window:a=O}=e,r=Ae({...e,onChanged:(s,u)=>{var f;e.onChanged?(f=e.onChanged)==null||f.call(e,s==="dark",u,s):u(s)},modes:{dark:t,light:n}}),i=k(()=>r.system?r.system.value:q({window:a}).value?"dark":"light");return k({get(){return r.value==="dark"},set(s){const u=s?"dark":"light";i.value===u?r.value="auto":r.value=u}})}function Te(e={}){const{window:t=O,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:a=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:i=!0,type:c="inner"}=e,s=E(n),u=E(a),f=()=>{t&&(c==="outer"?(s.value=t.outerWidth,u.value=t.outerHeight):i?(s.value=t.innerWidth,u.value=t.innerHeight):(s.value=t.document.documentElement.clientWidth,u.value=t.document.documentElement.clientHeight))};if(f(),z(f),j("resize",f,{passive:!0}),r){const m=K("(orientation: portrait)");V(m,()=>f())}return{width:s,height:u}}export{Oe as a,Ee as b,Te as u};
