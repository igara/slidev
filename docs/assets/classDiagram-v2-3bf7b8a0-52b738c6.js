import{p as $,d as N,s as M}from"./styles-ee63b5dc-552c7adf.js";import{ay as d,as as c,ax as w,aK as B,aI as G,aG as D,aH as _,aE as R,aB as C}from"./index-5894164a.js";import{G as z}from"./layout-de394db2-5c4df000.js";import{r as H}from"./index-e316e81a-bedac847.js";import"./edges-1a997dfb-33fce7dc.js";import"./createText-f11497a7-74bc1b98.js";import"./svgDraw-3835dd7e-bad5bfad.js";import"./line-cdde0d11-147c0d6b.js";import"./array-b7dcf730-9f3ba611.js";import"./constant-b644328d-6af51708.js";const S=s=>C.sanitizeText(s,c());let k={dividerMargin:10,padding:5,textHeight:10,curve:void 0};const P=function(s,t,y,n){const e=Object.keys(s);d.info("keys:",e),d.info(s),e.forEach(function(i){var o,r;const l=s[i],p={shape:"rect",id:l.id,domId:l.domId,labelText:S(l.id),labelStyle:"",style:"fill: none; stroke: black",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};t.setNode(l.id,p),A(l.classes,t,y,n,l.id),d.info("setNode",p)})},A=function(s,t,y,n,e){const i=Object.keys(s);d.info("keys:",i),d.info(s),i.filter(o=>s[o].parent==e).forEach(function(o){var r,l;const a=s[o],p=a.cssClasses.join(" "),f={labelStyle:"",style:""},h=a.label??a.id,b=0,m="class_box",u={labelStyle:f.labelStyle,shape:m,labelText:S(h),classData:a,rx:b,ry:b,class:p,style:f.style,id:a.id,domId:a.domId,tooltip:n.db.getTooltip(a.id,e)||"",haveCallback:a.haveCallback,link:a.link,width:a.type==="group"?500:void 0,type:a.type,padding:((r=c().flowchart)==null?void 0:r.padding)??((l=c().class)==null?void 0:l.padding)};t.setNode(a.id,u),e&&t.setParent(a.id,e),d.info("setNode",u)})},q=function(s,t,y,n){d.info(s),s.forEach(function(e,i){var o,r;const l=e,a="",p={labelStyle:"",style:""},f=l.text,h=0,b="note",m={labelStyle:p.labelStyle,shape:b,labelText:S(f),noteData:l,rx:h,ry:h,class:a,style:p.style,id:l.id,domId:l.id,tooltip:"",type:"note",padding:((o=c().flowchart)==null?void 0:o.padding)??((r=c().class)==null?void 0:r.padding)};if(t.setNode(l.id,m),d.info("setNode",m),!l.class||!(l.class in n))return;const u=y+i,x={id:`edgeNote${u}`,classes:"relation",pattern:"dotted",arrowhead:"none",startLabelRight:"",endLabelLeft:"",arrowTypeStart:"none",arrowTypeEnd:"none",style:"fill:none",labelStyle:"",curve:D(k.curve,_)};t.setEdge(l.id,l.class,x,u)})},F=function(s,t){const y=c().flowchart;let n=0;s.forEach(function(e){var i;n++;const o={classes:"relation",pattern:e.relation.lineType==1?"dashed":"solid",id:"id"+n,arrowhead:e.type==="arrow_open"?"none":"normal",startLabelRight:e.relationTitle1==="none"?"":e.relationTitle1,endLabelLeft:e.relationTitle2==="none"?"":e.relationTitle2,arrowTypeStart:E(e.relation.type1),arrowTypeEnd:E(e.relation.type2),style:"fill:none",labelStyle:"",curve:D(y==null?void 0:y.curve,_)};if(d.info(o,e),e.style!==void 0){const r=R(e.style);o.style=r.style,o.labelStyle=r.labelStyle}e.text=e.title,e.text===void 0?e.style!==void 0&&(o.arrowheadStyle="fill: #333"):(o.arrowheadStyle="fill: #333",o.labelpos="c",((i=c().flowchart)==null?void 0:i.htmlLabels)??c().htmlLabels?(o.labelType="html",o.label='<span class="edgeLabel">'+e.text+"</span>"):(o.labelType="text",o.label=e.text.replace(C.lineBreakRegex,`
`),e.style===void 0&&(o.style=o.style||"stroke: #333; stroke-width: 1.5px;fill:none"),o.labelStyle=o.labelStyle.replace("color:","fill:"))),t.setEdge(e.id1,e.id2,o,n)})},K=function(s){k={...k,...s}},V=async function(s,t,y,n){d.info("Drawing class - ",t);const e=c().flowchart??c().class,i=c().securityLevel;d.info("config:",e);const o=(e==null?void 0:e.nodeSpacing)??50,r=(e==null?void 0:e.rankSpacing)??50,l=new z({multigraph:!0,compound:!0}).setGraph({rankdir:n.db.getDirection(),nodesep:o,ranksep:r,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}}),a=n.db.getNamespaces(),p=n.db.getClasses(),f=n.db.getRelations(),h=n.db.getNotes();d.info(f),P(a,l,t,n),A(p,l,t,n),F(f,l),q(h,l,f.length+1,p);let b;i==="sandbox"&&(b=w("#i"+t));const m=i==="sandbox"?w(b.nodes()[0].contentDocument.body):w("body"),u=m.select(`[id="${t}"]`),x=m.select("#"+t+" g");if(await H(x,l,["aggregation","extension","composition","dependency","lollipop"],"classDiagram",t),B.insertTitle(u,"classTitleText",(e==null?void 0:e.titleTopMargin)??5,n.db.getDiagramTitle()),G(l,u,e==null?void 0:e.diagramPadding,e==null?void 0:e.useMaxWidth),!(e!=null&&e.htmlLabels)){const T=i==="sandbox"?b.nodes()[0].contentDocument:document,I=T.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const g of I){const L=g.getBBox(),v=T.createElementNS("http://www.w3.org/2000/svg","rect");v.setAttribute("rx",0),v.setAttribute("ry",0),v.setAttribute("width",L.width),v.setAttribute("height",L.height),g.insertBefore(v,g.firstChild)}}};function E(s){let t;switch(s){case 0:t="aggregation";break;case 1:t="extension";break;case 2:t="composition";break;case 3:t="dependency";break;case 4:t="lollipop";break;default:t="none"}return t}const W={setConf:K,draw:V},oe={parser:$,db:N,renderer:W,styles:M,init:s=>{s.class||(s.class={}),s.class.arrowMarkerAbsolute=s.arrowMarkerAbsolute,N.clear()}};export{oe as diagram};
