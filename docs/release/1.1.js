// ==UserScript==
// @name         tampermonkey-emoji-commit-github
// @namespace    https://github.com/cumtflyingstudio/tampermonkey-emoji-commit-github
// @version      1.1
// @description  to commit with emoji !!! !!!
// @author       SoonIter
// @match        https://github.com/**
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBhcmlhLWhpZGRlbj0idHJ1ZSIgcm9sZT0iaW1nIiBjbGFzcz0iaWNvbmlmeSBpY29uaWZ5LS1iaSIgd2lkdGg9IjFlbSIgaGVpZ2h0PSIxZW0iIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIG1lZXQiIHZpZXdCb3g9IjAgMCAxNiAxNiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMi40OTMgMTMuMzY4YTcgNyAwIDEgMSAyLjQ4OS00Ljg1OGMuMzQ0LjAzMy42OC4xNDcuOTc1LjMyOGE4IDggMCAxIDAtMi42NTQgNS4xNTJhOC41OCA4LjU4IDAgMCAxLS44MS0uNjIyWm0tMy43MzEtMy4yMmExMyAxMyAwIDAgMC0xLjEwNy4zMThhLjUuNSAwIDEgMS0uMzEtLjk1Yy4zOC0uMTI1LjgwMi0uMjU0IDEuMTkyLS4zNDNjLjM3LS4wODYuNzgtLjE1MyAxLjEwMy0uMTA4Yy4xNi4wMjIuMzk0LjA4NS41NjEuMjg2Yy4xODguMjI2LjE4Ny40OTcuMTMxLjcwNWExLjg5MiAxLjg5MiAwIDAgMS0uMzEuNTkzYy0uMDc3LjEwNy0uMTY4LjIyLS4yNzUuMzQzYy4xMDcuMTI0LjE5OS4yNC4yNzYuMzQ3Yy4xNDIuMTk3LjI1Ni4zOTcuMzEuNTk1Yy4wNTUuMjA4LjA1Ni40NzktLjEzMi43MDZjLS4xNjguMi0uNDA0LjI2Mi0uNTYzLjI4NGMtLjMyMy4wNDMtLjczMy0uMDI3LTEuMTAyLS4xMTNhMTQuODcgMTQuODcgMCAwIDEtMS4xOTEtLjM0NWEuNS41IDAgMSAxIC4zMS0uOTVjLjM3MS4xMi43NjEuMjQgMS4xMDkuMzIxYy4xNzYuMDQxLjMyNS4wNjkuNDQ2LjA4NGE1LjYwOSA1LjYwOSAwIDAgMC0uNTAyLS41ODRhLjUuNSAwIDAgMSAuMDAyLS42OTVhNS41MiA1LjUyIDAgMCAwIC41LS41NzdhNC40NjUgNC40NjUgMCAwIDAtLjQ0OC4wODJabS43NjYtLjA4N2wtLjAwMy0uMDAxbC0uMDAzLS4wMDFjLjAwNCAwIC4wMDYuMDAyLjAwNi4wMDJabS4wMDIgMS44NjdsLS4wMDYuMDAxYS4wMzguMDM4IDAgMCAxIC4wMDYtLjAwMlpNNiA4Yy41NTIgMCAxLS42NzIgMS0xLjVTNi41NTIgNSA2IDVzLTEgLjY3Mi0xIDEuNVM1LjQ0OCA4IDYgOFptMi43NTctLjU2M2EuNS41IDAgMCAwIC42OC0uMTk0YS45MzQuOTM0IDAgMCAxIC44MTMtLjQ5M2MuMzM5IDAgLjY0NS4xOS44MTMuNDkzYS41LjUgMCAwIDAgLjg3NC0uNDg2QTEuOTM0IDEuOTM0IDAgMCAwIDEwLjI1IDUuNzVjLS43MyAwLTEuMzU2LjQxMi0xLjY4NyAxLjAwN2EuNS41IDAgMCAwIC4xOTQuNjhaTTE0IDkuODI4YzEuMTEtMS4xNCAzLjg4NC44NTYgMCAzLjQyMmMtMy44ODQtMi41NjYtMS4xMS00LjU2MiAwLTMuNDIxWiI+PC9wYXRoPjwvc3ZnPg==

// @grant        none
// @license      MIT
// ==/UserScript==

(function(_,A){typeof exports=="object"&&typeof module!="undefined"?module.exports=A():typeof define=="function"&&define.amd?define(A):(_=typeof globalThis!="undefined"?globalThis:_||self,_.Tampermonkey=A())})(this,function(){"use strict";function _(){}const A=t=>t;function wt(t){return t()}function ht(){return Object.create(null)}function I(t){t.forEach(wt)}function it(t){return typeof t=="function"}function W(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function Bt(t){return Object.keys(t).length===0}const mt=typeof window!="undefined";let gt=mt?()=>window.performance.now():()=>Date.now(),at=mt?t=>requestAnimationFrame(t):_;const B=new Set;function bt(t){B.forEach(e=>{e.c(t)||(B.delete(e),e.f())}),B.size!==0&&at(bt)}function yt(t){let e;return B.size===0&&at(bt),{promise:new Promise(n=>{B.add(e={c:t,f:n})}),abort(){B.delete(e)}}}function x(t,e){t.appendChild(e)}function vt(t,e,n){const r=st(t);if(!r.getElementById(e)){const o=k("style");o.id=e,o.textContent=n,xt(r,o)}}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Lt(t){const e=k("style");return xt(st(t),e),e.sheet}function xt(t,e){x(t.head||t,e)}function C(t,e,n){t.insertBefore(e,n||null)}function z(t){t.parentNode.removeChild(t)}function k(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function G(t){return document.createTextNode(t)}function ct(){return G(" ")}function lt(){return G("")}function N(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t){return Array.from(t.childNodes)}function _t(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function kt(t,e){t.value=e==null?"":e}function T(t,e,n){t.classList[n?"add":"remove"](e)}function Ft(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,r,e),o}const J=new Map;let K=0;function Pt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function qt(t,e){const n={stylesheet:Lt(e),rules:{}};return J.set(t,n),n}function $t(t,e,n,r,o,a,i,d=0){const c=16.666/r;let l=`{
`;for(let y=0;y<=1;y+=c){const j=e+(n-e)*a(y);l+=y*100+`%{${i(j,1-j)}}
`}const f=l+`100% {${i(n,1-n)}}
}`,s=`__svelte_${Pt(f)}_${d}`,u=st(t),{stylesheet:m,rules:h}=J.get(u)||qt(u,t);h[s]||(h[s]=!0,m.insertRule(`@keyframes ${s} ${f}`,m.cssRules.length));const v=t.style.animation||"";return t.style.animation=`${v?`${v}, `:""}${s} ${r}ms linear ${o}ms 1 both`,K+=1,s}function dt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),o=n.length-r.length;o&&(t.style.animation=r.join(", "),K-=o,K||Ht())}function Ht(){at(()=>{K||(J.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),J.clear())})}let ft;function U(t){ft=t}const F=[],jt=[],Q=[],zt=[],Yt=Promise.resolve();let ut=!1;function Wt(){ut||(ut=!0,Yt.then(St))}function L(t){Q.push(t)}const pt=new Set;let V=0;function St(){const t=ft;do{for(;V<F.length;){const e=F[V];V++,U(e),Xt(e.$$)}for(U(null),F.length=0,V=0;jt.length;)jt.pop()();for(let e=0;e<Q.length;e+=1){const n=Q[e];pt.has(n)||(pt.add(n),n())}Q.length=0}while(F.length);for(;zt.length;)zt.pop()();ut=!1,pt.clear(),U(t)}function Xt(t){if(t.fragment!==null){t.update(),I(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(L)}}let P;function Et(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function Z(t,e,n){t.dispatchEvent(Ft(`${e?"intro":"outro"}${n}`))}const tt=new Set;let R;function Ct(){R={r:0,c:[],p:R}}function Mt(){R.r||I(R.c),R=R.p}function M(t,e){t&&t.i&&(tt.delete(t),t.i(e))}function D(t,e,n,r){if(t&&t.o){if(tt.has(t))return;tt.add(t),R.c.push(()=>{tt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const It={duration:0};function Gt(t,e,n){let r=e(t,n),o=!1,a,i,d=0;function c(){a&&dt(t,a)}function l(){const{delay:s=0,duration:u=300,easing:m=A,tick:h=_,css:v}=r||It;v&&(a=$t(t,0,1,u,s,m,v,d++)),h(0,1);const y=gt()+s,j=y+u;i&&i.abort(),o=!0,L(()=>Z(t,!0,"start")),i=yt($=>{if(o){if($>=j)return h(1,0),Z(t,!0,"end"),c(),o=!1;if($>=y){const O=m(($-y)/u);h(O,1-O)}}return o})}let f=!1;return{start(){f||(f=!0,dt(t),it(r)?(r=r(),Et().then(l)):l())},invalidate(){f=!1},end(){o&&(c(),o=!1)}}}function Jt(t,e,n){let r=e(t,n),o=!0,a;const i=R;i.r+=1;function d(){const{delay:c=0,duration:l=300,easing:f=A,tick:s=_,css:u}=r||It;u&&(a=$t(t,1,0,l,c,f,u));const m=gt()+c,h=m+l;L(()=>Z(t,!1,"start")),yt(v=>{if(o){if(v>=h)return s(0,1),Z(t,!1,"end"),--i.r||I(i.c),!1;if(v>=m){const y=f((v-m)/l);s(1-y,y)}}return o})}return it(r)?Et().then(()=>{r=r(),d()}):d(),{end(c){c&&r.tick&&r.tick(1,0),o&&(a&&dt(t,a),o=!1)}}}function Kt(t,e){D(t,1,1,()=>{e.delete(t.key)})}function Qt(t,e,n,r,o,a,i,d,c,l,f,s){let u=t.length,m=a.length,h=u;const v={};for(;h--;)v[t[h].key]=h;const y=[],j=new Map,$=new Map;for(h=m;h--;){const g=s(o,a,h),S=n(g);let E=i.get(S);E?r&&E.p(g,e):(E=l(S,g),E.c()),j.set(S,y[h]=E),S in v&&$.set(S,Math.abs(h-v[S]))}const O=new Set,w=new Set;function b(g){M(g,1),g.m(d,f),i.set(g.key,g),f=g.first,m--}for(;u&&m;){const g=y[m-1],S=t[u-1],E=g.key,ot=S.key;g===S?(f=g.first,u--,m--):j.has(ot)?!i.has(E)||O.has(E)?b(g):w.has(ot)?u--:$.get(E)>$.get(ot)?(w.add(E),b(g)):(O.add(ot),u--):(c(S,i),u--)}for(;u--;){const g=t[u];j.has(g.key)||c(g,i)}for(;m;)b(y[m-1]);return y}function et(t){t&&t.c()}function q(t,e,n,r){const{fragment:o,on_mount:a,on_destroy:i,after_update:d}=t.$$;o&&o.m(e,n),r||L(()=>{const c=a.map(wt).filter(it);i?i.push(...c):I(c),t.$$.on_mount=[]}),d.forEach(L)}function H(t,e){const n=t.$$;n.fragment!==null&&(I(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Vt(t,e){t.$$.dirty[0]===-1&&(F.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(t,e,n,r,o,a,i,d=[-1]){const c=ft;U(t);const l=t.$$={fragment:null,ctx:null,props:a,update:_,not_equal:o,bound:ht(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:ht(),dirty:d,skip_bound:!1,root:e.target||c.$$.root};i&&i(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(s,u,...m)=>{const h=m.length?m[0]:u;return l.ctx&&o(l.ctx[s],l.ctx[s]=h)&&(!l.skip_bound&&l.bound[s]&&l.bound[s](h),f&&Vt(t,s)),u}):[],l.update(),f=!0,I(l.before_update),l.fragment=r?r(l.ctx):!1,e.target){if(e.hydrate){const s=Ut(e.target);l.fragment&&l.fragment.l(s),s.forEach(z)}else l.fragment&&l.fragment.c();e.intro&&M(t.$$.fragment),q(t,e.target,e.anchor,e.customElement),St()}U(c)}class rt{$destroy(){H(this,1),this.$destroy=_}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}$set(e){this.$$set&&!Bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Y={};Y.write=async t=>{await navigator.clipboard.writeText(t)},Y.read=async()=>navigator.clipboard.readText(),Y.readSync=()=>{throw new Error("`.readSync()` is not supported in browsers!")},Y.writeSync=()=>{throw new Error("`.writeSync()` is not supported in browsers!")};function Zt(t){vt(t,"svelte-d0op9",".copied.svelte-d0op9{transform:scale(1.2);transition:all 0.5s}.copy-success.svelte-d0op9{background-color:#86efac;@apply bg-green-300;}@keyframes svelte-d0op9-randomMovearound{from{transform:translate(0, 0)}50%{transform:translate(0, 2px)}to{transform:translate(0, 0)}}.hovering.svelte-d0op9{animation:svelte-d0op9-randomMovearound 2s infinite ease-in}")}function te(t){let e,n,r,o,a,i,d=t[0].represent+"",c,l,f;return{c(){e=k("div"),n=k("div"),r=k("span"),o=G(t[3]),a=ct(),i=k("div"),c=G(d),p(r,"class","select-none svelte-d0op9"),T(r,"copied",t[1]),p(n,"class","h-14 w-14 hover:shadow-lg p-2 hover:bg-gray-700 bg-gray-200 opacity-70 flex justify-center items-center cursor-pointer rounded-full hover:ring-4 shadow-inner text-2xl transition-all duration-200  svelte-d0op9"),p(n,"draggable","true"),T(n,"hovering",t[2]),T(n,"copy-success",t[1]),p(i,"class","text-md"),T(i,"text-xs",t[0].represent.length>10),p(e,"class","flex flex-col justify-center items-center")},m(s,u){C(s,e,u),x(e,n),x(n,r),x(r,o),x(e,a),x(e,i),x(i,c),l||(f=[N(n,"mouseover",t[5]),N(n,"focus",t[5]),N(n,"mouseleave",t[6]),N(n,"click",t[4]),N(n,"dragstart",t[7])],l=!0)},p(s,[u]){u&8&&_t(o,s[3]),u&2&&T(r,"copied",s[1]),u&4&&T(n,"hovering",s[2]),u&2&&T(n,"copy-success",s[1]),u&1&&d!==(d=s[0].represent+"")&&_t(c,d),u&1&&T(i,"text-xs",s[0].represent.length>10)},i:_,o:_,d(s){s&&z(e),l=!1,I(f)}}}function ee(t,e,n){let r,{emoji:o={name:"",content:"",represent:"",description:""}}=e,a=!1,i=!1;async function d(){try{await Y.write(r),n(1,a=!0),setTimeout(()=>{n(1,a=!1)},500)}catch(s){console.error(s)}}function c(){n(2,i=!0)}const l=()=>{n(2,i=!1)},f=s=>{s.dataTransfer.setData("text/plain",r)};return t.$$set=s=>{"emoji"in s&&n(0,o=s.emoji)},t.$$.update=()=>{t.$$.dirty&1&&n(3,r=o.content)},[o,a,i,r,d,c,l,f]}class ne extends rt{constructor(e){super(),nt(this,e,ee,te,W,{emoji:0},Zt)}}function re(t){const e=t-1;return e*e*e+1}function Nt(t,{delay:e=0,duration:n=400,easing:r=re,x:o=0,y:a=0,opacity:i=0}={}){const d=getComputedStyle(t),c=+d.opacity,l=d.transform==="none"?"":d.transform,f=c*(1-i);return{delay:e,duration:n,easing:r,css:(s,u)=>`
			transform: ${l} translate(${(1-s)*o}px, ${(1-s)*a}px);
			opacity: ${c-f*u}`}}var Tt=[{name:"\u706B\u82B1",content:"\u2728",description:"\u5F15\u5165\u65B0\u529F\u80FD",represent:"feat"},{name:"bug",content:"\u{1F41B}",description:"\u4FEE\u590D bug",represent:"fix"},{name:"\u5E86\u795D",content:"\u{1F389}",description:"\u521D\u6B21\u63D0\u4EA4",represent:"init"},{name:"\u8C03\u8272\u677F",content:"\u{1F3A8}",description:"\u6539\u8FDB\u4EE3\u7801\u7ED3\u6784/\u4EE3\u7801\u683C\u5F0F",represent:"refactor"},{name:"\u95EA\u7535",content:"\u26A1\uFE0F",description:"\u63D0\u5347\u6027\u80FD",represent:"perf"},{name:"\u706B\u7130",content:"\u{1F525}",description:"\u79FB\u9664\u4EE3\u7801\u6216\u6587\u4EF6",represent:"delete"},{name:"\u6025\u6551\u8F66",content:"\u{1F691}",description:"\u91CD\u8981\u8865\u4E01",represent:"fix(important)"},{name:"\u94C5\u7B14",content:"\u{1F4DD}",description:"\u64B0\u5199\u6587\u6863",represent:"docs"},{name:"\u706B\u7BAD",content:"\u{1F680}",description:"\u90E8\u7F72\u529F\u80FD",represent:"build"},{name:"\u53E3\u7EA2",content:"\u{1F484}",description:"\u66F4\u65B0 UI \u548C\u6837\u5F0F\u6587\u4EF6",represent:"style"},{name:"\u767D\u8272\u590D\u9009\u6846",content:"\u2705",description:"\u589E\u52A0\u6D4B\u8BD5",represent:"test"},{name:"\u9501",content:"\u{1F512}",description:"\u4FEE\u590D\u5B89\u5168\u95EE\u9898",represent:"fix(security)"},{name:"\u82F9\u679C",content:"\u{1F34E}",description:"\u4FEE\u590D macOS \u4E0B\u7684\u95EE\u9898",represent:"fix(macos)"},{name:"\u4F01\u9E45",content:"\u{1F427}",description:"\u4FEE\u590D Linux \u4E0B\u7684\u95EE\u9898",represent:"fix(linux)"},{name:"\u65D7\u5E1C",content:"\u{1F3C1}",description:"\u4FEE\u590D Windows \u4E0B\u7684\u95EE\u9898",represent:"fix(windows)"},{name:"\u4E66\u7B7E",content:"\u{1F516}",description:"\u53D1\u884C/\u7248\u672C\u6807\u7B7E",represent:"publish"},{name:"\u6273\u624B",content:"\u{1F527}",description:"\u4FEE\u6539\u914D\u7F6E\u6587\u4EF6",represent:"chore(config)"},{name:"\u65BD\u5DE5",content:"\u{1F6A7}",description:"\u5DE5\u4F5C\u8FDB\u884C\u4E2D",represent:"doing"},{name:"\u7EFF\u5FC3",content:"\u{1F49A}",description:"\u4FEE\u590D CI \u6784\u5EFA\u95EE\u9898",represent:"fix(CI)"},{name:"\u4E0B\u964D\u7BAD\u5934",content:"\u2B07\uFE0F",description:"\u964D\u7EA7\u4F9D\u8D56",represent:"chore(dependency)"},{name:"\u4E0A\u5347\u7BAD\u5934",content:"\u2B06\uFE0F",description:"\u5347\u7EA7\u4F9D\u8D56",represent:"chore(dependency)"},{name:"\u4E0A\u5347\u8D8B\u52BF\u56FE",content:"\u{1F4C8}",description:"\u6DFB\u52A0\u5206\u6790\u6216\u8DDF\u8E2A\u4EE3\u7801",represent:"UI(debug)"},{name:"\u9524\u5B50",content:"\u{1F528}",description:"\u91CD\u5927\u91CD\u6784",represent:"refactor(important)"},{name:"\u9CB8\u9C7C",content:"\u{1F433}",description:"Docker \u76F8\u5173\u5DE5\u4F5C",represent:"chore(docker)"},{name:"\u5730\u7403",content:"\u{1F310}",description:"\u56FD\u9645\u5316\u4E0E\u672C\u5730\u5316",represent:"i18"}];function oe(t){let e,n;return{c(){e=X("svg"),n=X("path"),p(n,"fill","currentColor"),p(n,"d","M685.248 104.704a64 64 0 0 1 0 90.496L368.448 512l316.8 316.8a64 64 0 0 1-90.496 90.496L232.704 557.248a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 0z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),p(e,"width","1em"),p(e,"height","1em"),p(e,"viewBox","0 0 1024 1024")},m(r,o){C(r,e,o),x(e,n)},d(r){r&&z(e)}}}function ie(t){let e,n;return{c(){e=X("svg"),n=X("path"),p(n,"fill","currentColor"),p(n,"d","M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8l-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"),p(e,"xmlns","http://www.w3.org/2000/svg"),p(e,"xmlns:xlink","http://www.w3.org/1999/xlink"),p(e,"width","1em"),p(e,"height","1em"),p(e,"viewBox","0 0 1024 1024")},m(r,o){C(r,e,o),x(e,n)},d(r){r&&z(e)}}}function ae(t){let e;function n(a,i){if(a[0]==="right")return ie;if(a[0]==="left")return oe}let r=n(t),o=r&&r(t);return{c(){o&&o.c(),e=lt()},m(a,i){o&&o.m(a,i),C(a,e,i)},p(a,[i]){r!==(r=n(a))&&(o&&o.d(1),o=r&&r(a),o&&(o.c(),o.m(e.parentNode,e)))},i:_,o:_,d(a){o&&o.d(a),a&&z(e)}}}function se(t,e,n){let{type:r="right"}=e;return t.$$set=o=>{"type"in o&&n(0,r=o.type)},[r]}class Rt extends rt{constructor(e){super(),nt(this,e,se,ae,W,{type:0})}}function ce(t){vt(t,"svelte-184jni4",".bg-main.svelte-184jni4{background-color:rgba(255, 255, 255, 0.7)}.main.svelte-184jni4{height:400px;width:300px}.top-center.svelte-184jni4{top:calc(10rem + 200px)}.no-scrollbar.svelte-184jni4::-webkit-scrollbar{width:5px !important}")}function Dt(t,e,n){const r=t.slice();return r[5]=e[n],r}function le(t){let e,n,r,o,a;return n=new Rt({props:{type:"left"}}),{c(){e=k("button"),et(n.$$.fragment),p(e,"class","fixed right-0 top-center svelte-184jni4")},m(i,d){C(i,e,d),q(n,e,null),r=!0,o||(a=N(e,"click",t[3]),o=!0)},p:_,i(i){r||(M(n.$$.fragment,i),r=!0)},o(i){D(n.$$.fragment,i),r=!1},d(i){i&&z(e),H(n),o=!1,a()}}}function de(t){let e,n,r,o,a,i,d,c,l,f,s=[],u=new Map,m,h,v,y,j;r=new Rt({props:{type:"right"}});let $=t[1];const O=w=>w[5].content;for(let w=0;w<$.length;w+=1){let b=Dt(t,$,w),g=O(b);u.set(g,s[w]=Ot(g,b))}return{c(){e=k("div"),n=k("button"),et(r.$$.fragment),o=ct(),a=k("div"),i=k("div"),d=k("input"),c=ct(),l=k("div"),f=k("div");for(let w=0;w<s.length;w+=1)s[w].c();p(d,"type","text"),p(d,"class","w-full h-10 px-4 rounded-full bg-gray-200 "),p(d,"placeholder","search something"),p(i,"class","w-full py-4"),p(f,"class","grid grid-cols-2 gap-4"),p(l,"class","main overflow-y-scroll p-4 no-scrollbar svelte-184jni4"),p(a,"class",""),p(e,"class","fixed right-0 top-40 flex justify-center items-center rounded-l-3xl border shadow-lg backdrop:filter bg-main svelte-184jni4")},m(w,b){C(w,e,b),x(e,n),q(r,n,null),x(e,o),x(e,a),x(a,i),x(i,d),kt(d,t[0]),x(a,c),x(a,l),x(l,f);for(let g=0;g<s.length;g+=1)s[g].m(f,null);v=!0,y||(j=[N(n,"click",t[3]),N(d,"input",t[4])],y=!0)},p(w,b){b&1&&d.value!==w[0]&&kt(d,w[0]),b&2&&($=w[1],Ct(),s=Qt(s,b,O,1,w,$,u,f,Kt,Ot,null,Dt),Mt())},i(w){if(!v){M(r.$$.fragment,w);for(let b=0;b<$.length;b+=1)M(s[b]);L(()=>{h&&h.end(1),m=Gt(e,Nt,{x:100,duration:500}),m.start()}),v=!0}},o(w){D(r.$$.fragment,w);for(let b=0;b<s.length;b+=1)D(s[b]);m&&m.invalidate(),h=Jt(e,Nt,{x:100,duration:500}),v=!1},d(w){w&&z(e),H(r);for(let b=0;b<s.length;b+=1)s[b].d();w&&h&&h.end(),y=!1,I(j)}}}function Ot(t,e){let n,r,o;return r=new ne({props:{emoji:e[5]}}),{key:t,first:null,c(){n=lt(),et(r.$$.fragment),this.first=n},m(a,i){C(a,n,i),q(r,a,i),o=!0},p(a,i){e=a;const d={};i&2&&(d.emoji=e[5]),r.$set(d)},i(a){o||(M(r.$$.fragment,a),o=!0)},o(a){D(r.$$.fragment,a),o=!1},d(a){a&&z(n),H(r,a)}}}function fe(t){let e,n,r,o;const a=[de,le],i=[];function d(c,l){return c[2]?0:1}return e=d(t),n=i[e]=a[e](t),{c(){n.c(),r=lt()},m(c,l){i[e].m(c,l),C(c,r,l),o=!0},p(c,[l]){let f=e;e=d(c),e===f?i[e].p(c,l):(Ct(),D(i[f],1,1,()=>{i[f]=null}),Mt(),n=i[e],n?n.p(c,l):(n=i[e]=a[e](c),n.c()),M(n,1),n.m(r.parentNode,r))},i(c){o||(M(n),o=!0)},o(c){D(n),o=!1},d(c){i[e].d(c),c&&z(r)}}}function ue(t,e,n){let r=Tt,o=!0;const a=()=>n(2,o=!o);let i="";function d(){i=this.value,n(0,i)}return t.$$.update=()=>{t.$$.dirty&1&&n(1,r=Tt.filter(c=>{if(i==="")return!0;let l=!1;return Object.keys(c).forEach(f=>{typeof c[f]=="string"&&c[f].includes(i)&&(l=!0)}),l}))},[i,r,o,a,d]}class pe extends rt{constructor(e){super(),nt(this,e,ue,fe,W,{},ce)}}function we(t){let e,n,r;return n=new pe({}),{c(){e=k("main"),et(n.$$.fragment)},m(o,a){C(o,e,a),q(n,e,null),r=!0},p:_,i(o){r||(M(n.$$.fragment,o),r=!0)},o(o){D(n.$$.fragment,o),r=!1},d(o){o&&z(e),H(n)}}}class he extends rt{constructor(e){super(),nt(this,e,null,we,W,{})}}var me=(()=>`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::-webkit-backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.visible{visibility:visible}.\\!visible{visibility:visible!important}.fixed{position:fixed}.right-0{right:0px}.top-40{top:10rem}.flex{display:flex}.grid{display:grid}.h-14{height:3.5rem}.h-10{height:2.5rem}.w-14{width:3.5rem}.w-full{width:100%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:1rem}.overflow-y-scroll{overflow-y:scroll}.rounded-full{border-radius:9999px}.rounded-l-3xl{border-top-left-radius:1.5rem;border-bottom-left-radius:1.5rem}.border{border-width:1px}.bg-gray-200{--tw-bg-opacity: 1;background-color:rgb(229 231 235 / var(--tw-bg-opacity))}.p-2{padding:.5rem}.p-4{padding:1rem}.py-4{padding-top:1rem;padding-bottom:1rem}.px-4{padding-left:1rem;padding-right:1rem}.text-2xl{font-size:1.5rem;line-height:2rem}.text-xs{font-size:.75rem;line-height:1rem}.opacity-70{opacity:.7}.shadow-inner{--tw-shadow: inset 0 2px 4px 0 rgb(0 0 0 / .05);--tw-shadow-colored: inset 0 2px 4px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.transition{transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}:root{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}.backdrop\\:filter::-webkit-backdrop{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.backdrop\\:filter::backdrop{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.hover\\:bg-gray-700:hover{--tw-bg-opacity: 1;background-color:rgb(55 65 81 / var(--tw-bg-opacity))}.hover\\:shadow-lg:hover{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.hover\\:ring-4:hover{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}
`)();function ge(){const t=document.createElement("div");return t.id="tempermonkey-app",t.style.zIndex="2147483647",t.style.position="fixed",t}function be(){const t=document.createElement("div");return t.id="tempermonkey-app-shadow-container",t}function ye(){const t=ge(),e=t.attachShadow({mode:"closed"}),n=be();return e.appendChild(n),document.body.appendChild(t),n}function ve(t){const e=document.createElement("style");e.innerText=me,t.appendChild(e)}const At=ye();return ve(At),new he({target:At})});