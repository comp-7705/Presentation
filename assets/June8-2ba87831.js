import{_ as u,o as s,c as l,a as e,t as f,b as n,d as x,n as w,l as v,e as a,u as t,w as r,f as y}from"./index-e032018f.js";const $={props:{date:String}},b={class:"center"},k=e("h1",null," Handwritten Mathematical Expression Recognition Based On Encoder-decoder Neural Network ",-1),q=e("p",null,[n(" Lu Chen, Yikang Liu, Wang Ho Fong "),e("br"),n(" Yifei Wang, Zixiang Xiao ")],-1),R=e("p",null,"Supervisor: Dr. Hengshuang Zhao",-1);function S(i,c,o,g,m,_){return s(),l("section",null,[e("div",b,[e("div",null,[k,q,R,e("p",null,f(o.date),1)])])])}const z=u($,[["render",S]]),C={props:{text:{type:String,default:"Section"}}},H={class:"center"};function I(i,c,o,g,m,_){return s(),l("section",null,[e("div",H,[e("div",null,[e("h1",null,f(o.text),1)])])])}const p=u(C,[["render",I]]),E={},T={class:"container mx-auto my-10"};function P(i,c){return s(),l("section",null,[e("div",T,[x(i.$slots,"default")])])}const d=u(E,[["render",P]]),M={props:{src:{type:String,required:!0},alt:{type:String,default:"image"},class:{type:String,default:"w-1/2"}}},D={class:"flex justify-center"},O=["src","alt"];function N(i,c,o,g,m,_){return s(),l("div",D,[e("img",{src:o.src,alt:o.alt,class:w(o.class)},null,10,O)])}const h=u(M,[["render",N]]),B="/Presentation/assets/hmer-b09a4318.jpg",V="/Presentation/assets/tradition-e3b7f34d.png",j="/Presentation/assets/ocr-90eaac18.jpg",J={class:"w-screen h-screen"},L={class:"reveal"},A={class:"slides"},W=e("h2",null,"Definition of HMER",-1),F=e("p",null," HMER is the process of automatically identifying and extracting mathematical expressions from handwritten input. ",-1),X=e("h2",null,"Definition of HMER",-1),Y=e("p",null," The extracted mathematical expressions will be converted into LaTeX format, which facilitates computer processing. ",-1),Z=e("code",{style:{"font-size":"x-large"}}," \\begin{align} y &= (x+1)^2 \\\\ &= x^2+2x+1 \\end{align} ",-1),U=e("p",{class:"text-center"},"↓",-1),G=e("pre",{style:{"font-size":"xx-large",width:"60%"}},[n("                            "),e("code",{"data-trim":""},`
                                \\begin{align}
                                y &= (x+1)^2 \\\\
                                    &= x^2+2x+1
                                \\end{align}
                            `),n(`
                        `)],-1),K=e("h2",null,"Workflow",-1),Q=e("ul",null,[e("li",null,"Preprocessing"),e("li",null,"Symbol Segmentation"),e("li",null,"Symbol Classification"),e("li",null,"Structural Analysis")],-1),ee=e("h2",null,"Comparison with Other Recognition Methods",-1),te=e("ol",null,[e("li",null,[n(" Optical Character Recognition (OCR) "),e("ul",null,[e("li",null,[n(" mainly used for "),e("strong",null,"digitizing printed text")])])]),e("li",null,[n(" Intelligent Character Recognition (ICR) "),e("ul",null,[e("li",null,[n(" used for recognizing structured handwriting such as "),e("strong",null,"tables and forms")])])]),e("li",null,[n(" Handwritten Text Recognition (HTR) "),e("ul",null,[e("li",null,[n(" aims to recognize "),e("strong",null,"handwritten text"),n(" while handwritten formula recognition requires the recognition of "),e("strong",null," mathematical symbols and structures ")])])])],-1),ne=y(`<section><section><div class="center"><div><h1>II. Significance</h1></div></div></section><section data-markdown><textarea data-template>
                            ## Education and Research
                            * Editing formulas on the computer was a challenging task,thus save time for researchers
                            * Automatically grade handwritten mathematical assignments
                            * Interactive online courses that allow students to enter handwritten formulas and receive immediate feedback
                            &lt;image class=&quot;w-3/5&quot; src=&quot;/src/assets/images/June8/tedious.png&quot; style=&quot;margin:0 auto;&quot;/&gt;
                        </textarea></section><section data-markdown><textarea data-template>
                            ## Industry and Business
                            * In engineering, handwritten formula recognition can be used to digitize hand-drawn diagrams and engineering sketches, making them easier to edit and share.
                            * n finance, handwritten formula recognition can be used to digitize handwritten financial documents, such as invoices and receipts. This can help to streamline accounting processes, reduce errors, and improve efficiency.
                            &lt;image class=&quot;w-2/5&quot; src=&quot;/src/assets/images/June8/digitization.png&quot; style=&quot;margin:0 auto;&quot;/&gt;
                        </textarea></section></section><section><section><div class="center"><div><h1>III. Methodology</h1></div></div></section><section><h2>Three Phases</h2><div style="align-items:center;"><blockquote> Phase1: Data Collection &amp; PreProcessing <p>The preprocessing will involve data cleaning, normalization, resizing, and augmentation.</p></blockquote><p class="text-center">↓</p><blockquote> Phase2: Model Development &amp; Evaluation <p>A model with novel architectural components will be developed based on the encoder-decoder neural network.</p></blockquote><p class="text-center">↓</p><blockquote> Phase3: Continual Optimization and Model Deployment <p>Overcome the corner cases and maximizing recognition accuracy</p></blockquote></div></section><section data-markdown><textarea data-template>
                        &lt;h2&gt;Encoder&lt;/h2&gt;
                        &lt;p&gt;The fundamental concept of DenseNet involves linking all networks in a feed-forward manner, which amplifies the flow of information between layers through direct connections between each layer and all subsequent layers.&lt;/p&gt;
                        &lt;code&gt;
                            \\begin{align} 
                                x_{\\ell}=H_{\\ell}\\left(\\left[x_0 ; x_1 ; \\ldots ; x_{\\ell-1}\\right]\\right)
                            \\end{align}
                        &lt;/code&gt;


                        Here, $H_{\\ell}(\\cdot)$ denotes a composite function consisting of three consecutive layers (a batch normalization layer, followed by a ReLU layer and a $3 \\times 3$ convolution layer) and $\\left[{x}_{0} ; {x}_{1} ; \\ldots ; {x}_{\\ell-1}\\right]$  represents the concatenation operation of all the output features.
                        
                        
                        Furthermore, a $1 \\times 1$ convolutional layer can be incorporated into the encoder part to adjust the output image feature dimension to match the embedding dimension for further processing.
                    </textarea></section></section>`,2),oe={__name:"June8",setup(i){return v(),(c,o)=>(s(),l("div",J,[e("div",L,[e("div",A,[a(t(z),{date:"June 8"}),e("section",null,[a(t(p),{text:"I. Introduction"}),a(t(d),null,{default:r(()=>[W,F,a(t(h),{src:t(B),alt:"hmer",class:"w-2/5"},null,8,["src"])]),_:1}),a(t(d),null,{default:r(()=>[X,Y,Z,U,G]),_:1}),a(t(d),null,{default:r(()=>[K,Q,a(t(h),{src:t(V),alt:"workflow",class:"w-2/3"},null,8,["src"])]),_:1}),a(t(d),null,{default:r(()=>[ee,te,a(t(h),{src:t(j),alt:"OCR",class:"w-3/5"},null,8,["src"])]),_:1})]),ne,a(t(p),{text:"Thank you!"})])])]))}};export{oe as default};
