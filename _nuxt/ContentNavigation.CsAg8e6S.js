import{q as m,e as v,j as l,u as d}from"./query.ldDhNFwa.js";import{B as g,C as y,D as h,i as _,E as w,j as C,F as P,G as $,k as x,m as p}from"./entry.DDTPqjh_.js";import{h as f,u as E}from"./preview.BZpnfvlK.js";import{w as c,s as N,u as j}from"./utils.Cz0DBAks.js";import{_ as T}from"./nuxt-link.C489w9Mk.js";const D="$s";function S(...t){const n=typeof t[t.length-1]=="string"?t.pop():void 0;typeof t[0]!="string"&&t.unshift(n);const[e,o]=t;if(!e||typeof e!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+e);if(o!==void 0&&typeof o!="function")throw new Error("[nuxt] [useState] init must be a function: "+o);const a=D+e,r=h(),i=g(r.payload.state,a);if(i.value===void 0&&o){const s=o();if(y(s))return r.payload.state[a]=s,s;i.value=s}return i}const b=async t=>{const{content:n}=_().public;typeof(t==null?void 0:t.params)!="function"&&(t=m(t));const e=t.params(),o=n.experimental.stripQueryParameters?c(`/navigation/${`${f(e)}.${n.integrity}`}/${v(e)}.json`):c(`/navigation/${f(e)}.${n.integrity}.json`);if(N())return(await w(()=>import("./client-db.CJTzI92b.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url).then(i=>i.generateNavigation))(e);const a=await $fetch(o,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:l(e),previewToken:E().getPreviewToken()}});if(typeof a=="string"&&a.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return a},Q=C({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(t){const{query:n}=P(t),e=$(()=>{var a;return typeof((a=n.value)==null?void 0:a.params)=="function"?n.value.params():n.value});if(!e.value&&S("dd-navigation").value){const{navigation:a}=j();return{navigation:a}}const{data:o}=await d(`content-navigation-${f(e.value)}`,()=>b(e.value));return{navigation:o}},render(t){const n=x(),{navigation:e}=t,o=i=>p(T,{to:i._path},()=>i.title),a=(i,s)=>p("ul",s?{"data-level":s}:null,i.map(u=>u.children?p("li",null,[o(u),a(u.children,s+1)]):p("li",null,o(u)))),r=i=>a(i,0);return n!=null&&n.default?n.default({navigation:e,...this.$attrs}):r(e)}});export{Q as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.CJTzI92b.js","./entry.DDTPqjh_.js","./query.ldDhNFwa.js","./preview.BZpnfvlK.js","./utils.Cz0DBAks.js","./index.BphKXUyx.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
