import{a5 as p,d as u,Q as s,a6 as c,u as l,q as d,k as f,a7 as m,a8 as h,a9 as A,aa as g,ab as y,ac as P,ad as v,ae as w,af as C,ag as R,ah as _,ai as b,M as D}from"./chunks/framework.113ddbb1.js";import{t as r}from"./chunks/theme.df5edd26.js";const E={...r,Layout:()=>p(r.Layout,null,{}),enhanceApp({app:e,router:a,siteData:t}){}};function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const n=i(E),L=u({name:"VitePressApp",setup(){const{site:e}=l();return d(()=>{f(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),m(),h(),A(),n.setup&&n.setup(),()=>p(n.Layout)}});async function T(){const e=S(),a=O();a.provide(g,e);const t=y(e.route);return a.provide(P,t),a.component("Content",v),a.component("ClientOnly",w),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),n.enhanceApp&&await n.enhanceApp({app:a,router:e,siteData:C}),{app:a,router:e,data:t}}function O(){return R(L)}function S(){let e=s,a;return _(t=>{let o=b(t);return e&&(a=o),(e||a===o)&&(o=o.replace(/\.js$/,".lean.js")),s&&(e=!1),D(()=>import(o),[])},n.NotFound)}s&&T().then(({app:e,router:a,data:t})=>{a.go().then(()=>{c(a.route,t.site),e.mount("#app")})});export{T as createApp};
