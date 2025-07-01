import{d,i as _,a as p,u,b as h,c as m,e as f,f as i,g as t,t as a,h as n,F as g,r as v,n as x,j as b,o as l,k as y,l as N,m as k,p as P,q as w,_ as S}from"./index-d6591c88.js";import{N as V}from"./NoteDisplay-dde1d329.js";const j={class:"m-4"},L={class:"mb-10"},T={class:"text-4xl font-bold mt-2"},B={class:"opacity-50"},C={class:"text-lg"},D={class:"font-bold flex gap-2"},H={class:"opacity-50"},z={key:0,class:"border-gray-400/50 mb-8"},F=d({__name:"PresenterPrint",setup(M){_(p),u(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const r=f(()=>b.map(s=>{var o;return(o=s.meta)==null?void 0:o.slide}).filter(s=>s!==void 0&&s.noteHTML!==""));return(s,o)=>(l(),i("div",{id:"page-root",style:x(n(w))},[t("div",j,[t("div",L,[t("h1",T,a(n(m).title),1),t("div",B,a(new Date().toLocaleString()),1)]),(l(!0),i(g,null,v(n(r),(e,c)=>(l(),i("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",C,[t("div",D,[t("div",H,a(e==null?void 0:e.no)+"/"+a(n(y)),1),N(" "+a(e==null?void 0:e.title)+" ",1),o[0]||(o[0]=t("div",{class:"flex-auto"},null,-1))])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<n(r).length-1?(l(),i("hr",z)):P("v-if",!0)]))),128))])],4))}}),E=S(F,[["__file","/Users/igarashishou/github/slidev/node_modules/.pnpm/@slidev+client@0.42.5_postcss@8.4.26_vite@4.4.4/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
