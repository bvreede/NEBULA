import{g as d,Y as l,k as v,Z as f,B as p,$ as g,a0 as m,K as h,a1 as y,s as u,e as _}from"./entry.C6Y6OMUt.js";const C=d({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(i){const{query:t}=l(i),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&f("dd-navigation").value){const{navigation:a}=p();return{navigation:a}}const{data:o}=await g(`content-navigation-${m(n.value)}`,()=>y(n.value));return{navigation:o}},render(i){const t=h(),{navigation:n}=i,o=e=>u(_,{to:e._path},()=>e.title),a=(e,r)=>u("ul",r?{"data-level":r}:null,e.map(s=>s.children?u("li",null,[o(s),a(s.children,r+1)]):u("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),N=C;export{N as default};
