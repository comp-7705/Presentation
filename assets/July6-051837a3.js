import{_ as m,a as g,b as p,c as h,d as v,e as f,f as x,g as y,h as w,i as b}from"./model-e75f3a6d.js";import{g as I,l as J,e as T,a as s,d as e,u as l,w as a,r as c,o as V,b as o,R as E,v as P}from"./index-9899f6fd.js";import{_ as k}from"./Week1-2ed0dbad.js";import{_ as N}from"./Week2-2e031bbb.js";import{_ as D}from"./Week3-f0423ea3.js";const S="/Presentation/assets/schedule-5e1b8242.png",A={class:"w-screen h-screen"},C={class:"reveal"},R={class:"slides"},O=s("h2",null,"Overview Architecture",-1),U={class:"grid grid-cols-2"},X=s("ul",null,[s("li",null,[o(" Encoder "),s("ul",null,[s("li",null," DenseNet: 3 dense blocks. Each block has 16 bottleneck layers. "),s("li",null," Pyramid Pooling Module (from PSPNet): Using 3-level pyramid (1, 2, and 4), the pooling kernels cover the whole, half of, and quarter of the image. ")])]),s("li",null,[o(" Transformer Decoder "),s("ul",null,[s("li",null," Decoder self attention: Query, key, and value are output embeddeding. "),s("li",null," Encoder-decoder attention: Query is the output of decoder self attention. Key and value are the output of encoder. ")])])],-1),j=s("h2",null,"Experiments",-1),B=s("li",null," All the experiments are conduted on HKU GPU Farm, including NVIDIA RTX 2080Ti, RTX 3090. ",-1),H={class:"grid grid-cols-4 text-2xl"},M=["src"],$=["src"],q=["src"],K=s("span",{class:"red-bold"},"0.60",-1),L=["src"],Q={class:"grid grid-cols-4 text-2xl"},F=["src"],G=["src"],z=["src"],W=s("span",{class:"red-bold"},"0.61",-1),Y=["src"],Z=s("li",null,[o(" Validation accuracy of the state-of-the-art models is around "),s("span",{class:"red-bold"},"0.59"),o(". ")],-1),ss=s("h2",null,"Improvement",-1),es=s("ul",null,[s("li",null," Add a dropdown list, allowing user to select different models "),s("li",null," Add a raw LaTeX column, allowing user to copy raw LaTeX sequence ")],-1),ls=s("h2",null,"Demo Video",-1),os={class:"flex justify-center"},ts=s("h2",null,"Next Schedule",-1),ms={__name:"July6",setup(ns){const r=Object.values(Object.assign({"../assets/images/July6/demo.png":m,"../assets/images/July6/exp1-epoch.svg":g,"../assets/images/July6/exp1-train-loss.svg":p,"../assets/images/July6/exp1-val-acc.svg":h,"../assets/images/July6/exp1-val-loss.svg":v,"../assets/images/July6/exp2-epoch.svg":f,"../assets/images/July6/exp2-train-loss.svg":x,"../assets/images/July6/exp2-val-acc.svg":y,"../assets/images/July6/exp2-val-loss.svg":w,"../assets/images/July6/model.png":b})),t=I(r);let d=P;return J(),(as,is)=>{const u=c("Cover"),i=c("HSection"),_=c("Image"),n=c("VSection");return V(),T("div",A,[s("div",C,[s("div",R,[e(u,{date:"July 6"}),s("section",null,[e(i,{text:"I. Recap"}),e(l(k)),e(l(N)),e(l(D))]),s("section",null,[e(i,{text:"II. Our Current Model and Experiments"}),e(n,null,{default:a(()=>[O,s("div",U,[X,e(_,{src:l(t).model,class:"w-5/12"},null,8,["src"])])]),_:1}),e(n,null,{default:a(()=>[j,s("ul",null,[B,s("li",null,[o(" Experiment 1: DenseNet + Pyramid Pooling Module + Transformer "),s("div",H,[s("div",null,[o(" Epoch "),s("img",{src:l(t)["exp1-epoch"],class:"w-full"},null,8,M)]),s("div",null,[o(" Training loss "),s("img",{src:l(t)["exp1-train-loss"],class:"w-full"},null,8,$)]),s("div",null,[o(" Validation loss "),s("img",{src:l(t)["exp1-val-loss"],class:"w-full"},null,8,q)]),s("div",null,[o(" Validation accuracy: "),K,s("img",{src:l(t)["exp1-val-acc"],class:"w-full"},null,8,L)])])]),s("li",null,[o(" Experiment 2: DenseNet + Transformer "),s("div",Q,[s("div",null,[o(" Epoch "),s("img",{src:l(t)["exp2-epoch"],class:"w-full"},null,8,F)]),s("div",null,[o(" Training loss "),s("img",{src:l(t)["exp2-train-loss"],class:"w-full"},null,8,G)]),s("div",null,[o(" Validation loss "),s("img",{src:l(t)["exp2-val-loss"],class:"w-full"},null,8,z)]),s("div",null,[o(" Validation accuracy: "),W,s("img",{src:l(t)["exp2-val-acc"],class:"w-full"},null,8,Y)])])]),Z])]),_:1})]),s("section",null,[e(i,{text:"III. Prototype Improvement"}),e(n,null,{default:a(()=>[ss,es,e(_,{src:l(t).demo,class:"w-2/3"},null,8,["src"])]),_:1}),e(n,null,{default:a(()=>[ls,s("div",os,[e(l(E),{src:l(d),controls:"",loop:"",width:1200,class:"w-full"},null,8,["src"])])]),_:1}),e(n,null,{default:a(()=>[ts,e(_,{src:l(S),class:"w-3/5"},null,8,["src"])]),_:1})]),e(i,{text:"Thank you!"})])])])}}};export{ms as default};
