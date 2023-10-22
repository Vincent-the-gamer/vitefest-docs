import{d as c,u as r,X as m,o as f,b as h,l as _,O as v,y as u,s as i,a1 as g,a2 as w,a3 as y,a4 as A,a5 as x,a6 as P,a7 as T,a8 as $,a9 as b,aa as C,V as E,j as L,ab as M,ac as R,ad as D,ae as V}from"./chunks/framework.3f71c860.js";import{t as l}from"./chunks/theme.036b4626.js";const k=c({__name:"Layout",setup(a){const{isDark:e}=r(),t=()=>"startViewTransition"in document&&window.matchMedia("(prefers-reduced-motion: no-preference)").matches;return m("toggle-appearance",async({clientX:n,clientY:o})=>{if(!t()){e.value=!e.value;return}const p=[`circle(0px at ${n}px ${o}px)`,`circle(${Math.hypot(Math.max(n,innerWidth-n),Math.max(o,innerHeight-o))}px at ${n}px ${o}px)`];await document.startViewTransition(async()=>{e.value=!e.value,await v()}).ready,document.documentElement.animate({clipPath:e.value?p.reverse():p},{duration:300,easing:"ease-in",pseudoElement:`::view-transition-${e.value?"old":"new"}(root)`})}),(n,o)=>(f(),h(_(l).Layout))}});const O={...l,Layout:k,setup(){const{lang:a}=r();u(()=>{i&&(document.cookie=`nf_lang=${a.value}; expires=Mon, 1 Jan 2099 00:00:00 UTC; path=/`)})}};function d(a){if(a.extends){const e=d(a.extends);return{...e,...a,async enhanceApp(t){e.enhanceApp&&await e.enhanceApp(t),a.enhanceApp&&await a.enhanceApp(t)}}}return a}const s=d(O),j=c({name:"VitePressApp",setup(){const{site:a}=r();return L(()=>{u(()=>{document.documentElement.lang=a.value.lang,document.documentElement.dir=a.value.dir})}),M(),R(),D(),s.setup&&s.setup(),()=>V(s.Layout)}});async function S(){const a=F(),e=B();e.provide(w,a);const t=y(a.route);return e.provide(A,t),e.component("Content",x),e.component("ClientOnly",P),Object.defineProperties(e.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:e,router:a,siteData:T}),{app:e,router:a,data:t}}function B(){return $(j)}function F(){let a=i,e;return b(t=>{let n=C(t),o=null;return n&&(a&&(e=n),(a||e===n)&&(n=n.replace(/\.js$/,".lean.js")),o=E(()=>import(n),[])),i&&(a=!1),o},s.NotFound)}i&&S().then(({app:a,router:e,data:t})=>{e.go().then(()=>{g(e.route,t.site),a.mount("#app")})});export{S as createApp};