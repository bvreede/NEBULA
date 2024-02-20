import{_ as x}from"./nuxt-link.Z3zMjPMr.js";import{_ as u,o,c as s,a as e,b as a,w as g,P as w,t as d,f as y,g as $,h as S,v as k,F as h,r as f,i as B}from"./entry.Ch0c546s.js";const C=""+new URL("nlesc-logo.pyibK3gc.svg",import.meta.url).href,N={},L={class:"flex flex-row bg-eScienceWhite"},P={class:"flex p-5 items-center"},R=e("img",{src:C,alt:"Netherlands eScience Center Logo",width:"250px"},null,-1),F={class:"flex font-display font-semibold pt-12 pl-10"},V={key:0},D={class:"text-4xl text-eSciencePurple"};function E(t,c,l,_,p,m){const i=x;return o(),s("div",L,[e("div",P,[a(i,{to:"/"},{default:g(()=>[R]),_:1})]),e("div",F,[(t._.provides[w]||t.$route).path==="/"?(o(),s("div",V,[e("h1",D,d(t.$config.public.title)+" Modules ",1)])):y("",!0)])])}const M=u(N,[["render",E]]),T={props:{title:{type:String,default:"Title"},author:{type:String,default:"Author"},thumbnail:{type:String,default:"./public/nlesc-logo.svg"},url:{type:String,default:"/"}}},U={class:"relative"},q={class:"flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48"},W={class:"prose font-display m-4 mr-10"},A=["src"];function G(t,c,l,_,p,m){const i=x;return o(),$(i,{to:l.url},{default:g(()=>[e("div",U,[e("div",q,[e("div",W,[e("h3",null,d(l.title),1)]),e("img",{src:l.thumbnail,alt:"module icon",class:"max-w-xs rounded-tr-3xl"},null,8,A)])])]),_:1},8,["to"])}const K=u(T,[["render",G]]),j={},z={class:"flex flex-col w-screen bg-gentleBlue h-screen overflow-auto"},H={class:"flex flex-col pt-4 pb-6 pl-6"},I={class:"prose-2xl font-display font-bold text-eSciencePurple w-full pl-2"};function J(t,c,l,_,p,m){const i=M,b=K,v=B("Footer");return o(),s("div",z,[a(i),S(e("input",{"onUpdate:modelValue":c[0]||(c[0]=r=>t.query=r),type:"search",class:"w-2/3 mt-4 mr-4 p-2 self-end",placeholder:"search"},null,512),[[k,t.query]]),e("div",H,[(o(!0),s(h,null,f(["Getting started","Reusability","Publishing & Citing","Resources","Examples","Upcoming (under construction)"],r=>(o(),s("div",{key:r,class:"flex flex-wrap gap-4 mb-8"},[e("h2",I,d(r),1),(o(!0),s(h,null,f([{id:4,slug:"demo",title:"Demo",author:"Robin",thumbnail:"nlesc-dummy.png",category:"Examples",visibility:t.True}],n=>(o(),$(b,{key:n.id,title:n.title,author:n.author,thumbnail:`public/${n.slug}/${n.thumbnail}`,url:`/modules/${n.slug}`},null,8,["title","author","thumbnail","url"]))),128))]))),128))]),a(v)])}const X=u(j,[["render",J]]);export{X as default};
