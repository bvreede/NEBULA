import{u as h,j as g,k as d,n as C,l as w,m as v,q as x,s as D,x as r}from"./entry.D-QRF3hT.js";import{u as q}from"./vue.f36acd1f.D2aDG7sG.js";import S from"./ContentRenderer.DdJ5Ke29.js";import _ from"./ContentQuery.D7X-outq.js";import"./ContentRendererMarkdown.ByVmvjlU.js";import"./index.BphKXUyx.js";import"./preview.DuhcZVPq.js";import"./query.IT5wqKVf.js";import"./utils.Dh4fr6Dm.js";const y=(u,e=d())=>{const m=h(u),p=w();g(()=>h(u),(t=m)=>{if(!e.path||!t)return;const n=Object.assign({},(t==null?void 0:t.head)||{});n.meta=[...n.meta||[]],n.link=[...n.link||[]];const s=n.title||(t==null?void 0:t.title);s&&(n.title=s),p.public.content.host;const c=(n==null?void 0:n.description)||(t==null?void 0:t.description);c&&n.meta.filter(o=>o.name==="description").length===0&&n.meta.push({name:"description",content:c}),n!=null&&n.image||(t==null||t.image),C(()=>q(n))},{immediate:!0})},k=v({name:"ContentDoc",props:{tag:{type:String,required:!1,default:"div"},excerpt:{type:Boolean,default:!1},path:{type:String,required:!1,default:void 0},query:{type:Object,required:!1,default:void 0},head:{type:Boolean,required:!1,default:!0}},render(u){const e=x(),{tag:m,excerpt:p,path:f,query:t,head:n}=u,s={...t||{},path:f||(t==null?void 0:t.path)||D(d().path),find:"one"},c=(o,i)=>r("pre",null,JSON.stringify({message:"You should use slots with <ContentDoc>",slot:o,data:i},null,2));return r(_,s,{default:e!=null&&e.default?({data:o,refresh:i,isPartial:a})=>{var l;return n&&y(o),(l=e.default)==null?void 0:l.call(e,{doc:o,refresh:i,isPartial:a,excerpt:p,...this.$attrs})}:({data:o})=>(n&&y(o),r(S,{value:o,excerpt:p,tag:m,...this.$attrs},{empty:i=>e!=null&&e.empty?e.empty(i):c("default",o)})),empty:o=>{var i;return((i=e==null?void 0:e.empty)==null?void 0:i.call(e,o))||r("p",null,"Document is empty, overwrite this content with #empty slot in <ContentDoc>.")},"not-found":o=>{var i;return((i=e==null?void 0:e["not-found"])==null?void 0:i.call(e,o))||r("p",null,"Document not found, overwrite this content with #not-found slot in <ContentDoc>.")}})}}),$=k;export{$ as default};