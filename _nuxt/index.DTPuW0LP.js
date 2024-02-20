import{_ as x}from"./nuxt-link.CzrnyEws.js";import{_ as u,o,c as n,a as e,b as a,w as g,P as w,t as d,f as y,g as $,h as S,v as k,F as h,r as f,i as B}from"./entry.HNK1whpg.js";const N=""+new URL("nlesc-logo.pyibK3gc.svg",import.meta.url).href,C={},L={class:"flex flex-row bg-eScienceWhite"},P={class:"flex p-5 items-center"},R=e("img",{src:N,alt:"Netherlands eScience Center Logo",width:"250px"},null,-1),E={class:"flex font-display font-semibold pt-12 pl-10"},F={key:0},U={class:"text-4xl text-eSciencePurple"};function V(t,c,l,_,p,m){const i=x;return o(),n("div",L,[e("div",P,[a(i,{to:"/"},{default:g(()=>[R]),_:1})]),e("div",E,[(t._.provides[w]||t.$route).path==="/"?(o(),n("div",F,[e("h1",U,d(t.$config.public.title)+" Modules ",1)])):y("",!0)])])}const D=u(C,[["render",V]]),M={props:{title:{type:String,default:"Title"},author:{type:String,default:"Author"},thumbnail:{type:String,default:"./public/nlesc-logo.svg"},url:{type:String,default:"/"}}},T={class:"relative"},q={class:"flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48"},A={class:"prose font-display m-4 mr-10"},W=["src"];function G(t,c,l,_,p,m){const i=x;return o(),$(i,{to:l.url},{default:g(()=>[e("div",T,[e("div",q,[e("div",A,[e("h3",null,d(l.title),1)]),e("img",{src:l.thumbnail,alt:"module icon",class:"max-w-xs rounded-tr-3xl"},null,8,W)])])]),_:1},8,["to"])}const K=u(M,[["render",G]]),j={},z={class:"flex flex-col w-screen bg-gentleBlue h-screen overflow-auto"},H={class:"flex flex-col pt-4 pb-6 pl-6"},I={class:"prose-2xl font-display font-bold text-eSciencePurple w-full pl-2"};function J(t,c,l,_,p,m){const i=D,b=K,v=B("Footer");return o(),n("div",z,[a(i),S(e("input",{"onUpdate:modelValue":c[0]||(c[0]=r=>t.query=r),type:"search",class:"w-2/3 mt-4 mr-4 p-2 self-end",placeholder:"search"},null,512),[[k,t.query]]),e("div",H,[(o(!0),n(h,null,f(["Getting started","Reusability","Publishing & Citing","Resources","Examples","Upcoming (under construction)"],r=>(o(),n("div",{key:r,class:"flex flex-wrap gap-4 mb-8"},[e("h2",I,d(r),1),(o(!0),n(h,null,f([{id:4,slug:"demo",title:"Demo",author:"Robin",thumbnail:"nlesc-dummy.png",category:"Examples",visibility:t.True}],s=>(o(),$(b,{key:s.id,title:s.title,author:s.author,thumbnail:`/NEBULA/modules/${s.slug}/_assets/${s.thumbnail}`,url:`/modules/${s.slug}`},null,8,["title","author","thumbnail","url"]))),128))]))),128))]),a(v)])}const X=u(j,[["render",J]]);export{X as default};
