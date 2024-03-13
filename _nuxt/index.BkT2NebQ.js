import{_ as g}from"./nuxt-link.CghAhBos.js";import{_ as p,o,c as l,a as e,b as r,w as h,P as N,t as f,C as k,B as $,D as L,f as P,A as R,F as m,E as x}from"./entry.BYQPEo4l.js";import V from"./ContentList.BmklrNVo.js";import"./ContentQuery.Bmon1uCP.js";const A=""+new URL("nlesc-logo.pyibK3gc.svg",import.meta.url).href,E={},F={class:"flex flex-row bg-eScienceWhite"},W={class:"flex p-5 items-center"},D=e("img",{src:A,alt:"Netherlands eScience Center Logo",width:"250px"},null,-1),M={class:"flex font-display font-semibold pt-12 pl-10"},T={key:0},U={class:"text-4xl text-eSciencePurple"};function q(s,i,n,a,_,d){const c=g;return o(),l("div",F,[e("div",W,[r(c,{to:"/"},{default:h(()=>[D]),_:1})]),e("div",M,[(s._.provides[N]||s.$route).path==="/"?(o(),l("div",T,[e("h1",U,f(s.$config.public.title)+" Modules ",1)])):k("",!0)])])}const G=p(E,[["render",q]]),K={props:{title:{type:String,default:"Title"},author:{type:String,default:"Author"},thumbnail:{type:String,default:"./public/nlesc-logo.svg"},url:{type:String,default:"/"}}},Q={class:"relative"},Y={class:"flex flex-row bg-eScienceWhite shadow-xl max-w-xl rounded-bl-3xl rounded-tr-3xl h-48"},z={class:"prose font-display m-4 mr-10"},H=["src"];function I(s,i,n,a,_,d){const c=g;return o(),$(c,{to:n.url},{default:h(()=>[e("div",Q,[e("div",Y,[e("div",z,[e("h3",null,f(n.title),1)]),e("img",{src:n.thumbnail,alt:"module icon",class:"max-w-xs rounded-tr-3xl"},null,8,H)])])]),_:1},8,["to"])}const J=p(K,[["render",I]]),X={},Z=L('<div class="decoration-slice bg-gentleBlue p-4"></div><div id="footer" class="bg-eSciencePurple p-2"><p class="font-body text-eScienceWhite text-sm text-center"> These materials are developed by the <a href="https://www.esciencecenter.nl">Netherlands eScience Center</a>. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY 4.0</a> unless otherwise noted. </p></div>',2),j=[Z];function O(s,i,n,a,_,d){return o(),l("div",null,j)}const ee=p(X,[["render",O]]),te={class:"flex flex-col w-screen bg-gentleBlue h-screen overflow-auto"},oe={class:"flex flex-col pt-4 pb-6 pl-6"},se={class:"prose-2xl font-display font-bold text-eSciencePurple w-full pl-2"},he=P({__name:"index",setup(s){const{globals:i,navigation:n,surround:a,page:_,excerpt:d,toc:c,type:ne,layout:le,next:ie,prev:ce}=R();console.log(i);const v={path:"/modules",where:[{visibility:"visible"}]};return(re,ae)=>{const b=G,y=J,w=V,S=ee;return o(),l("div",te,[r(b),e("div",oe,[(o(),l(m,null,x(["Getting Started","Reusability","Resources"],u=>e("div",{key:u,class:"flex flex-wrap gap-4 mb-8"},[e("h2",se,f(u),1),r(w,{path:"/modules",query:v},{default:h(({list:C})=>[(o(!0),l(m,null,x(C.filter(t=>t.category===u&&t.visibility==="visible").sort((t,B)=>t.id-B.id),t=>(o(),$(y,{key:t.id,title:t.title,author:t.author,thumbnail:`/NEBULA/${t._path}/media/${t.thumbnail}`,url:t._path},null,8,["title","author","thumbnail","url"]))),128))]),_:2},1024)])),64))]),r(S)])}}});export{he as default};