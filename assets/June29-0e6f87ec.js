import{g as r,l as d,c as _,a as e,b as l,u as t,w as s,o as h,m as n}from"./index-8f948407.js";import{i as p}from"./hmer-5ed49e20.js";import{C as m,V as a,H as u}from"./VSection-c1cbfe7c.js";import{I as o}from"./Image-4e20ce2d.js";const g="/Presentation/assets/Exp1n2-Acc-e3baab9a.png",f="/Presentation/assets/Exp1n2-Loss-a1b76c9b.png",b="/Presentation/assets/Exp3n4-Acc-485b442a.png",v="/Presentation/assets/Exp3n4-Loss-2b1edf88.png",x="/Presentation/assets/attention-qkv-700667af.svg",w="/Presentation/assets/densenet-b2364abf.png",y="/Presentation/assets/densenet161-b57dc275.png",E="/Presentation/assets/fpn-228baa35.jpg",R="/Presentation/assets/gru-7c6e684f.svg",P="/Presentation/assets/pspnet-3270c487.jpg",k="/Presentation/assets/resnet-block-f6e8bcbc.svg",N="/Presentation/assets/resnet152-e40ec634.png",T="/Presentation/assets/schedule-1b4a0ccf.png",A="/Presentation/assets/web-demo1-da6423c0.png",H="/Presentation/assets/web-demo2-84611852.jpg",S={class:"w-screen h-screen"},J={class:"reveal"},L={class:"slides"},C=e("h2",null,"Recap of 1st Week",-1),M=e("ul",null,[e("li",null,[n(" Handwritten Mathematical Expression Recognition (HMER): "),e("br"),n(" Images or Trajectories ⇒ Markup Languages like LaTeX or MathML ")]),e("li",null," Sigificance in Education and Research, in Industry and Business "),e("li",null," Analysis of CROHME dataset and State-of-the-art models (BTTR, SAN, CoMER) ")],-1),I=e("h2",null,"Recap of 2nd Week",-1),q=e("li",null,[n(" Failure Case Analysis "),e("ul",null,[e("li",null,[n(" Label Length Distribution: SAN,BTTR and CoMER are particularly susceptible to failures when the label length is either "),e("span",{class:"text-red-600 font-bold"}," 4, 14, or 16. ")]),e("li",null," Symbol Recognition Failures: All models lack context awareness. "),e("li",null," Structure Recognition Failures: CoMER wins out from all models. ")])],-1),D={class:"flex"},j=["src"],V=["src"],W=e("h2",null,"ResNet",-1),$=e("ul",null,[e("li",null,[n(" Residual connections allow additional layers to simply pass through the input to the output. The residual mapping can learn the "),e("span",{class:"text-red-600 font-bold"},"identity function"),n(" more easily, such as pushing parameters in the weight layer to zero. ")]),e("li",null,[n(" As a consequence, residual connections allow us to train much "),e("span",{class:"text-red-600 font-bold"},"deeper networks"),n(". Residual connections had a major influence on the design of subsequent deep neural networks, both for convolutional and sequential nature. ")])],-1),B=e("h2",null,"ResNet-152",-1),F=e("h2",null,"DenseNet",-1),z=e("span",{class:"text-red-600 font-bold"}," concatenates",-1),G=e("h2",null,"DenseNet-161",-1),U=e("ul",null,[e("li",null," growth_rate = 48, block_config = [6, 12, 36, 24] "),e("li",null," out_channel = in_channel + block_config[i] * growth_rate ")],-1),O=e("h2",null,"Feature Pyramid Network (FPN)",-1),X=e("ul",null,[e("li",null,[n(" FPN is a feature extractor that takes a single-scale image of an arbitrary size as input, and outputs "),e("span",{class:"text-red-600 font-bold"},"multi-scale"),n(" feature maps at multiple levels. ")]),e("li",null," The features maps at different levels are fused and predictions are made on the fused feature maps. ")],-1),Z=e("h2",null,"Pyramid Scene Parsing Network (PSPNet)",-1),K=e("ul",null,[e("li",null,[n(" PSPNet introduces the pyramid pooling module, which empirically proves to be an effective "),e("span",{class:"text-red-600 font-bold"}," global contextual prior. "),n(" PSPNet uses the Pyramid Pooling Module shown in (c) to gather context information in feature maps. ")]),e("li",null," Using 4-level pyramid (1, 2, 3, and 6), the pooling kernels cover the whole, half of, and small portions of the image. They are fused as the global priors. Then the global priors are upsampled and concatenated with the original feature map. ")],-1),Q=e("h2",null,"Gated Recurrent Unit (GRU)",-1),Y=e("code",null," \\begin{aligned} \\mathbf{R}_t &= \\sigma(\\mathbf{X}_t \\mathbf{W}_{xr} + \\mathbf{H}_{t-1} \\mathbf{W}_{hr} + \\mathbf{b}_r), \\\\ \\mathbf{Z}_t &= \\sigma(\\mathbf{X}_t \\mathbf{W}_{xz} + \\mathbf{H}_{t-1} \\mathbf{W}_{hz} + \\mathbf{b}_z), \\\\ \\tilde{\\mathbf{H}}_t &= \\tanh(\\mathbf{X}_t \\mathbf{W}_{xh} + \\left(\\mathbf{R}_t \\odot \\mathbf{H}_{t-1}\\right) \\mathbf{W}_{hh} + \\mathbf{b}_h), \\\\ \\mathbf{H}_t &= \\mathbf{Z}_t \\odot \\mathbf{H}_{t-1} + (1 - \\mathbf{Z}_t) \\odot \\tilde{\\mathbf{H}}_t. \\end{aligned} ",-1),ee=e("h2",null,"Attention Mechanism",-1),te=e("ul",null,[e("li",null," Query is used to determine the relevance or importance of different elements in the input sequence. "),e("li",null," Key is often derived from the input sequence itself, and its purpose is to provide a basis for comparison with the query. "),e("li",null," Value is the actual information associated with each element or position in the input sequence. It can be seen as the content or meaning that we want to focus on. ")],-1),le=e("h2",null,"Comparison Tables",-1),ne=e("p",null,"Training setting:",-1),se=e("table",{class:"table-auto border-y-2 border-black"},[e("thead",null,[e("tr",null,[e("th",null,"No. Exp"),e("th",null,"Encoder"),e("th",null,"Decoder"),e("th",null,"Epoch"),e("th",null,"Learning Rate"),e("th",null,"Batch Size")])]),e("tbody",null,[e("tr",null,[e("td",null,"1,2"),e("td",null,"ResNet-152"),e("td",null,"GRU+Attention"),e("td",null,"50"),e("td",null,"1e-4"),e("td",null,"8")]),e("tr",null,[e("td",null,"3,4"),e("td",null,"DenseNet-161"),e("td",null,"GRU+Attention"),e("td",null,"100"),e("td",null,"1e-4"),e("td",null,"8")])])],-1),ae=e("p",null,"Loss:",-1),oe=e("table",{class:"table-auto border-y-2 border-black"},[e("thead",null,[e("tr",null,[e("th",null,"No. Exp"),e("th",null,"Training"),e("th",null,"2014"),e("th",null,"2016"),e("th",null,"2019"),e("th",null,"Validation (Total)")])]),e("tbody",null,[e("tr",null,[e("td",null,"1,2"),e("td",null,"2.565"),e("td",null,"3.063"),e("td",null,"3.106"),e("td",null,"2.974"),e("td",null,"3.048")]),e("tr",null,[e("td",null,"3,4"),e("td",null,"2.553"),e("td",null,"2.955"),e("td",null,"2.948"),e("td",null,"2.854"),e("td",null,"2.919")])])],-1),ie=e("p",null,"Accuracy (%) on CROHME dataset:",-1),ue=e("table",{class:"table-auto border-y-2 border-black"},[e("thead",null,[e("tr",null,[e("th",null,"No. Exp"),e("th",null,"Training"),e("th",null,"2014"),e("th",null,"2016"),e("th",null,"2019"),e("th",null,"Validation (Total)")])]),e("tbody",null,[e("tr",null,[e("td",null,"1,2"),e("td",null,"95.90"),e("td",null,"25.92"),e("td",null,"24.32"),e("td",null,"27.53"),e("td",null,"25.92")]),e("tr",null,[e("td",null,"3,4"),e("td",null,"99.22"),e("td",null,"33.84"),e("td",null,"33.18"),e("td",null,"32.36"),e("td",null,"33.13")])])],-1),ce=e("h2",null,"Accuracy Curves",-1),re={class:"grid grid-cols-2"},de=e("h2",null,"Loss Curves",-1),_e={class:"grid grid-cols-2"},he=e("h2",null,"Next Schedule",-1),we={__name:"June29",setup(pe){const c=Object.values(Object.assign({"../assets/images/June29/Exp1n2-Acc.png":g,"../assets/images/June29/Exp1n2-Loss.png":f,"../assets/images/June29/Exp3n4-Acc.png":b,"../assets/images/June29/Exp3n4-Loss.png":v,"../assets/images/June29/attention-qkv.svg":x,"../assets/images/June29/densenet.png":w,"../assets/images/June29/densenet161.png":y,"../assets/images/June29/fpn.jpg":E,"../assets/images/June29/gru.svg":R,"../assets/images/June29/pspnet.jpg":P,"../assets/images/June29/resnet-block.svg":k,"../assets/images/June29/resnet152.png":N,"../assets/images/June29/schedule.png":T})),i=r(c);return d(),(me,ge)=>(h(),_("div",S,[e("div",J,[e("div",L,[l(t(m),{date:"June 29"}),l(t(a),null,{default:s(()=>[C,M,l(t(o),{src:t(p),class:"w-1/3"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[I,e("ul",null,[q,e("li",null,[n(" Prototype Demo "),e("div",D,[e("img",{src:t(A),class:"w-1/2"},null,8,j),e("img",{src:t(H),class:"w-1/2"},null,8,V)])])])]),_:1}),e("section",null,[l(t(u),{text:"I. Encoder From Scratch"}),l(t(a),null,{default:s(()=>[W,$,l(t(o),{src:t(i)["resnet-block"],class:"w-3/5"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[B,l(t(o),{src:t(i).resnet152,class:"w-4/5"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[F,n(" In terms of cross-layer connections, unlike ResNet, where inputs and outputs are added together, DenseNet "),z,n(" inputs and outputs on the channel dimension. "),l(t(o),{src:t(i).densenet,class:"w-1/2"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[G,U,l(t(o),{src:t(i).densenet161,class:"w-2/5"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[O,X,l(t(o),{src:t(i).fpn,class:"w-2/3"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[Z,K,l(t(o),{src:t(i).pspnet,class:"w-full"},null,8,["src"])]),_:1})]),e("section",null,[l(t(u),{text:"II. Decoder from Scratch"}),l(t(a),null,{default:s(()=>[Q,n(" Reset Gate $R_t$. Update Gate $Z_t$. Candidate hidden state $\\tilde{H_t}$. Hidden state $H_t$. "),Y,l(t(o),{src:t(i).gru,class:"w-2/3"},null,8,["src"])]),_:1}),l(t(a),null,{default:s(()=>[ee,te,l(t(o),{src:t(i)["attention-qkv"]},null,8,["src"])]),_:1})]),e("section",null,[l(t(u),{text:"III. Experiment"}),l(t(a),null,{default:s(()=>[le,ne,se,ae,oe,ie,ue]),_:1}),l(t(a),null,{default:s(()=>[ce,e("div",re,[e("div",null,[n(" Experiment 1 & 2 "),l(t(o),{src:t(i)["Exp1n2-Acc"],class:"w-full"},null,8,["src"])]),e("div",null,[n(" Experiment 3 & 4 "),l(t(o),{src:t(i)["Exp3n4-Acc"],class:"w-full"},null,8,["src"])])])]),_:1}),l(t(a),null,{default:s(()=>[de,e("div",_e,[e("div",null,[n(" Experiment 1 & 2 "),l(t(o),{src:t(i)["Exp1n2-Loss"],class:"w-full"},null,8,["src"])]),e("div",null,[n(" Experiment 3 & 4 "),l(t(o),{src:t(i)["Exp3n4-Loss"],class:"w-full"},null,8,["src"])])])]),_:1})]),l(t(a),null,{default:s(()=>[he,l(t(o),{src:t(i).schedule,class:"w-2/3"},null,8,["src"])]),_:1}),l(t(u),{text:"Thank you!"})])])]))}};export{we as default};
