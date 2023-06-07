import{_ as h,o as d,c as u,a as e,t as f,b as s,d as b,n as x,g as w,l as v,e as n,u as t,w as l}from"./index-bdeae1c3.js";const y={props:{date:String}},$={class:"center"},R=e("h1",null," Handwritten Mathematical Expression Recognition Based On Encoder-decoder Neural Network ",-1),k=e("p",null,[s(" Lu Chen, Yikang Liu, Wang Ho Fong "),e("br"),s(" Yifei Wang, Zixiang Xiao ")],-1),P=e("p",null,"Supervisor: Dr. Hengshuang Zhao",-1);function S(r,c,a,g,m,p){return d(),u("section",null,[e("div",$,[e("div",null,[R,k,P,e("p",null,f(a.date),1)])])])}const T=h(y,[["render",S]]),C={props:{text:{type:String,default:"Section"}}},E={class:"center"};function J(r,c,a,g,m,p){return d(),u("section",null,[e("div",E,[e("div",null,[e("h1",null,f(a.text),1)])])])}const _=h(C,[["render",J]]),z={},D={class:"container mx-auto my-10"};function H(r,c){return d(),u("section",null,[e("div",D,[b(r.$slots,"default")])])}const o=h(z,[["render",H]]),I={props:{src:{type:String,required:!0},alt:{type:String,default:"image"},class:{type:String,default:"w-1/2"}}},N={class:"flex justify-center"},q=["src","alt"];function M(r,c,a,g,m,p){return d(),u("div",N,[e("img",{src:a.src,alt:a.alt,class:x(a.class)},null,10,q)])}const i=h(I,[["render",M]]),j="/Presentation/assets/bttr-9b81a02f.png",O="/Presentation/assets/comer-0a70b13e.png",B="/Presentation/assets/dataset-b14bd942.jpg",A="/Presentation/assets/digitization-c38f50c4.png",L="/Presentation/assets/hmer-b09a4318.jpg",V="/Presentation/assets/model-comparison-10f4d435.jpg",W="/Presentation/assets/ocr-90eaac18.jpg",F="/Presentation/assets/san-6fc4c2a7.png",X="/Presentation/assets/schedule-dfba380c.png",Y="/Presentation/assets/seq2seq-48e60895.svg",Z="/Presentation/assets/tedious-86da3107.png",U="/Presentation/assets/token-distri-351bd0ce.png",G="/Presentation/assets/tradition-e3b7f34d.png",K="/Presentation/assets/train-h-distri-1db44f2b.png",Q="/Presentation/assets/train-len-distri-34d1d96a.png",ee="/Presentation/assets/train-w-distri-76e1e57a.png",te={class:"w-screen h-screen"},se={class:"reveal"},ne={class:"slides"},ae=e("h2",null,"Definition of HMER",-1),le=e("p",null," HMER is the process of automatically identifying and extracting mathematical expressions from handwritten input. ",-1),oe=e("h2",null,"Definition of HMER",-1),ie=e("p",null," The extracted mathematical expressions will be converted into LaTeX format, which facilitates computer processing. ",-1),re=e("code",{style:{"font-size":"x-large"}}," \\begin{align} y &= (x+1)^2 \\\\ &= x^2+2x+1 \\end{align} ",-1),ce=e("p",{class:"text-center"},"↓",-1),de=e("pre",{style:{"font-size":"xx-large",width:"60%"}},[s("                            "),e("code",{"data-trim":""},`
                                \\begin{align}
                                y &= (x+1)^2 \\\\
                                    &= x^2+2x+1
                                \\end{align}
                            `),s(`
                        `)],-1),ue=e("h2",null,"Workflow: Tradition vs Encoder-decoder",-1),_e=e("h2",null,"Comparison with Other Recognition Methods",-1),he=e("ol",null,[e("li",null,[s(" Optical Character Recognition (OCR) "),e("ul",null,[e("li",null,[s(" mainly used for "),e("strong",null,"digitizing printed text")])])]),e("li",null,[s(" Intelligent Character Recognition (ICR) "),e("ul",null,[e("li",null,[s(" used for recognizing structured handwriting such as "),e("strong",null,"tables and forms")])])]),e("li",null,[s(" Handwritten Text Recognition (HTR) "),e("ul",null,[e("li",null,[s(" aims to recognize "),e("strong",null,"handwritten text"),s(" while handwritten formula recognition requires the recognition of "),e("strong",null," mathematical symbols and structures ")])])])],-1),ge=e("h2",null,"Education and Research",-1),me=e("ul",null,[e("li",null," Editing formulas on the computer was a challenging task,thus save time for researchers "),e("li",null," Automatically grade handwritten mathematical assignments "),e("li",null," Interactive online courses that allow students to enter handwritten formulas and receive immediate feedback ")],-1),pe=e("h2",null,"Industry and Business",-1),fe=e("ul",null,[e("li",null," In engineering, handwritten formula recognition can be used to digitize hand-drawn diagrams and engineering sketches, making them easier to edit and share. "),e("li",null," In finance, handwritten formula recognition can be used to digitize handwritten financial documents, such as invoices and receipts. This can help to streamline accounting processes, reduce errors, and improve efficiency. ")],-1),be=e("h2",null,"Three Phases",-1),xe=e("blockquote",null,[s(" Phase1: Data Collection & PreProcessing "),e("p",null," Data cleaning, normalization, resizing, and augmentation. ")],-1),we=e("p",{class:"text-center"},"↓",-1),ve=e("blockquote",null,[s(" Phase2: Model Development & Evaluation "),e("p",null," A model with novel architectural components will be developed based on the encoder-decoder neural network. ")],-1),ye=e("p",{class:"text-center"},"↓",-1),$e=e("blockquote",null,[s(" Phase3: Continual Optimization and Model Deployment "),e("p",null," Overcome the corner cases and maximizing recognition accuracy ")],-1),Re=e("h2",null,"Encoder",-1),ke=e("p",null," The fundamental concept of DenseNet involves linking all networks in a feed-forward manner, which amplifies the flow of information between layers through direct connections between each layer and all subsequent layers. ",-1),Pe=e("code",null," \\begin{align} x_{\\ell}=H_{\\ell}\\left(\\left[x_0 ; x_1 ; \\ldots ; x_{\\ell-1}\\right]\\right) \\end{align} ",-1),Se=e("h2",null,"Decoders",-1),Te={class:"grid grid-cols-3"},Ce=e("span",{class:"text-red-600"},"B",-1),Ee=e("span",{class:"text-red-600"},"T",-1),Je=e("span",{class:"text-red-600"},"TR",-1),ze=["src"],De=e("span",{class:"text-red-600"},"S",-1),He=e("span",{class:"text-red-600"},"A",-1),Ie=e("span",{class:"text-red-600"},"N",-1),Ne=["src"],qe=e("span",{class:"text-red-600"},"C",-1),Me=e("span",{class:"text-red-600"},"MER",-1),je=["src"],Oe=e("h2",null,"CROHME Dataset",-1),Be=e("div",{class:"flex mb-10"},[e("p",{class:"w-3/5"},[s(" CROHME: "),e("span",{class:"red"},"C"),s("ompetition on "),e("span",{class:"text-red-600"},"R"),s("ecognition of "),e("span",{class:"text-red-600"},"O"),s("nline "),e("span",{class:"text-red-600"},"H"),s("andwritten "),e("span",{class:"text-red-600"},"M"),s("athematical "),e("span",{class:"text-red-600"},"E"),s("xpressions,which currently is most widely used benchmark dataset for HMER. ")]),e("table",{class:"table-auto text-xl border-2 border-slate-300"},[e("thead",null,[e("tr",null,[e("th",{class:"border-2 border-slate-300"}),e("th",{class:"border-2 border-slate-300"}," Number of Images ")])]),e("tbody",null,[e("tr",null,[e("td",{class:"border-2 border-slate-300"}," Training Set "),e("td",{class:"border-2 border-slate-300"}," 8835 ")]),e("tr",null,[e("td",{class:"border-2 border-slate-300"}," Test 2014 "),e("td",{class:"border-2 border-slate-300"}," 986 ")]),e("tr",null,[e("td",{class:"border-2 border-slate-300"}," Test 2016 "),e("td",{class:"border-2 border-slate-300"}," 1147 ")]),e("tr",null,[e("td",{class:"border-2 border-slate-300"}," Test 2019 "),e("td",{class:"border-2 border-slate-300"}," 1199 ")]),e("tr",null,[e("td",{class:"border-2 border-slate-300"}," Total Test Set "),e("td",{class:"border-2 border-slate-300"}," 3332 ")])])])],-1),Ae=e("h2",null,"Data Distribution",-1),Le={class:"grid grid-cols-2"},Ve=e("h2",null,"Expression Recognition Rate Comparison",-1),We=e("ul",null,[e("li",null," (Number1, Number2): Number1 is taken from the papers. Number2 is our reproduced result. Single value indicates that Number1 == Number2. "),e("li",null," ≤ 1error and ≤ 2error represent expression recognition rate when 1 to 2 structural or symbol errors can be tolerated. ")],-1),Fe=e("h2",null,"Schedule",-1),Ye={__name:"June8",setup(r){const c=Object.values(Object.assign({"../assets/images/June8/bttr.png":j,"../assets/images/June8/comer.png":O,"../assets/images/June8/dataset.jpg":B,"../assets/images/June8/digitization.png":A,"../assets/images/June8/hmer.jpg":L,"../assets/images/June8/model-comparison.jpg":V,"../assets/images/June8/ocr.jpg":W,"../assets/images/June8/san.png":F,"../assets/images/June8/schedule.png":X,"../assets/images/June8/seq2seq.svg":Y,"../assets/images/June8/tedious.png":Z,"../assets/images/June8/token-distri.png":U,"../assets/images/June8/tradition.png":G,"../assets/images/June8/train-h-distri.png":K,"../assets/images/June8/train-len-distri.png":Q,"../assets/images/June8/train-w-distri.png":ee})),a=w(c);return v(),(g,m)=>(d(),u("div",te,[e("div",se,[e("div",ne,[n(t(T),{date:"June 8"}),e("section",null,[n(t(_),{text:"I. Introduction"}),n(t(o),null,{default:l(()=>[ae,le,n(t(i),{src:t(a).hmer,alt:"hmer",class:"w-2/5"},null,8,["src"])]),_:1}),n(t(o),null,{default:l(()=>[oe,ie,re,ce,de]),_:1}),n(t(o),null,{default:l(()=>[ue,n(t(i),{src:t(a).tradition,alt:"workflow",class:"w-3/5"},null,8,["src"]),n(t(i),{src:t(a).seq2seq,alt:"Seq2Seq",class:"w-4/5"},null,8,["src"])]),_:1}),n(t(o),null,{default:l(()=>[_e,he,n(t(i),{src:t(a).ocr,alt:"OCR",class:"w-2/5"},null,8,["src"])]),_:1})]),e("section",null,[n(t(_),{text:"II. Significance"}),n(t(o),null,{default:l(()=>[ge,me,n(t(i),{class:"w-1/2",src:t(a).tedious},null,8,["src"])]),_:1}),n(t(o),null,{default:l(()=>[pe,fe,n(t(i),{class:"w-1/3",src:t(a).digitization},null,8,["src"])]),_:1})]),e("section",null,[n(t(_),{text:"III. Methodology"}),n(t(o),null,{default:l(()=>[be,xe,we,ve,ye,$e]),_:1}),n(t(o),null,{default:l(()=>[Re,ke,Pe,s(" Here, $H_{\\ell}(\\cdot)$ denotes a composite function consisting of three consecutive layers (a batch normalization layer, followed by a ReLU layer and a $3 \\times 3$ convolution layer) and $[x_0;x_1;\\ldots;x_{\\ell-1}]$ represents the concatenation operation of all the output features. Furthermore, a $1 \\times 1$ convolutional layer can be incorporated into the encoder part to adjust the output image feature dimension to match the embedding dimension for further processing. ")]),_:1}),n(t(o),null,{default:l(()=>[Se,e("div",Te,[e("div",null,[s(" BTTR Decoder(2021) "),Ce,s("idirectionally "),Ee,s("rained "),Je,s("ansformer "),e("img",{src:t(a).bttr,class:"w-4/5"},null,8,ze)]),e("div",null,[s(" SAN Decoder(2022) "),De,s("yntax "),He,s("ware "),Ie,s("etwork "),e("img",{src:t(a).san,class:"w-2/3"},null,8,Ne)]),e("div",null,[s(" CoMER Decoder(2022) "),qe,s("overage information in the transfor"),Me,s(" decoder "),e("img",{src:t(a).comer},null,8,je)])])]),_:1}),n(t(o),null,{default:l(()=>[Oe,Be,n(t(i),{src:t(a).dataset,alt:"dataset",class:"w-3/4"},null,8,["src"])]),_:1}),n(t(o),null,{default:l(()=>[Ae,e("div",Le,[n(t(i),{src:t(a)["token-distri"],class:"inline w-7/12"},null,8,["src"]),n(t(i),{src:t(a)["train-len-distri"],class:"inline w-7/12"},null,8,["src"]),n(t(i),{src:t(a)["train-h-distri"],class:"inline w-7/12"},null,8,["src"]),n(t(i),{src:t(a)["train-w-distri"],class:"inline w-7/12"},null,8,["src"])])]),_:1}),n(t(o),null,{default:l(()=>[Ve,We,n(t(i),{class:"w-3/4",src:t(a)["model-comparison"],alt:"model comparison"},null,8,["src"])]),_:1}),n(t(o),null,{default:l(()=>[Fe,n(t(i),{src:t(a).schedule,class:"w-4/5"},null,8,["src"])]),_:1})]),n(t(_),{text:"Thank you!"})])])]))}};export{Ye as default};
