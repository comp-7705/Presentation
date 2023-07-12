import{g as u,l as d,c as h,a as e,b as s,u as l,w as n,o as _,d as t}from"./index-0e60c26a.js";import{i as m}from"./hmer-5ed49e20.js";import{i as g,a as p}from"./web-demo2-5d8a7e9d.js";import{i as f,a as b}from"./schedule-17e14e9d.js";import{C as y,H as i,V as o}from"./VSection-c93ccf02.js";import{I as a}from"./Image-73d12453.js";const w="/Presentation/assets/mscm-131c721a.jpg",M="/Presentation/assets/recap4.0-061492a6.jpg",R="/Presentation/assets/recap4-29f66485.jpg",$={class:"w-screen h-screen"},x={class:"reveal"},v={class:"slides"},E=e("h2",null,"Recap of 1st Week",-1),L=e("ul",null,[e("li",null,[t(" Handwritten Mathematical Expression Recognition (HMER): "),e("br"),t(" Images or Trajectories ⇒ Markup Languages like LaTeX or MathML ")]),e("li",null," Sigificance in Education and Research, in Industry and Business "),e("li",null," Analysis of CROHME dataset and State-of-the-art models (BTTR, SAN, CoMER) ")],-1),N=e("h2",null,"Recap of 2nd Week",-1),P=e("li",null,[t(" Failure Case Analysis "),e("ul",null,[e("li",null,[t(" Label Length Distribution: SAN,BTTR and CoMER are particularly susceptible to failures when the label length is either "),e("span",{class:"red-bold"}," 4, 14, or 16. ")]),e("li",null," Symbol Recognition Failures: All models lack context awareness. "),e("li",null,[t(" Structure Recognition Failures: "),e("span",{class:"red-bold"},"CoMER"),t(" wins out from all models. ")])])],-1),S={class:"flex"},T=["src"],k=["src"],I=e("h2",null,"Recap of 3rd Week",-1),j=e("ul",null,[e("li",null," Encoder: ResNet, DenseNet, Feature Pyramid Network (FPN), and Pyramid Scene Parsing Network (PSPNet). "),e("li",null,"Decoder: GRU, and Attention Mechanism."),e("li",null,[t(" Experimental results are not desirable. The validation accuracy was only "),e("span",{class:"red-bold"},"0.33"),t(". ")])],-1),C=e("h2",null,"Recap of 4th Week",-1),D=e("li",null,[t(" Our model architecture "),e("ul",null,[e("li",null," Encoder: DenseNet & Pyramid Pooling Module "),e("li",null," Decoder: Transformer ")])],-1),H=e("h2",null,"Obeject counting",-1),V=e("br",null,null,-1),A=e("br",null,null,-1),F=e("h2",null,"Multi-scale counting module(MSCM)",-1),B=e("ul",null,[e("li",null," Here, MSCM utilize two parallel convolution branches to extract multi-scale features. Following the convolution layer, the channel attention is adopted to enhance the feature information further. "),e("br"),e("li",null," Following the $1*1$ convolution, it utilize a sigmoid function to yield the value in a range of (0,1) to generate counting map $M \\in \\mathbb{R^{H\\times W}}$. "),e("br"),e("li",null,[t(" In this sense, each $M_i$ is actually a pseudo density map. Then utilize sum-pooling to obtain counting vector $V_i=\\sum_{p=1}^H \\sum_{q=1}^W M_{i,pq}$. "),e("br"),t(" Here, $V_i \\in \\mathbb{R^{1\\times 1}}$ is the predicted count of the i-th class symbol. It is noteworthy that the feature maps of different branches contain different scale information and are highly complementary. ")])],-1),W=e("h2",null,"Loss function",-1),J=e("br",null,null,-1),O=e("br",null,null,-1),q=e("h2",null,"Next Schedule",-1),z=e("h2",null,"Experiment",-1),se={__name:"July13",setup(G){const r=Object.values(Object.assign({"../assets/images/July13/mscm.jpg":w,"../assets/images/July13/recap4.0.jpg":M,"../assets/images/July13/recap4.jpg":R})),c=u(r);return d(),(U,X)=>(_(),h("div",$,[e("div",x,[e("div",v,[s(l(y),{date:"July 13"}),e("section",null,[s(l(i),{text:"I. Recap"}),s(l(o),null,{default:n(()=>[E,L,s(l(a),{src:l(m),class:"w-1/3"},null,8,["src"])]),_:1}),s(l(o),null,{default:n(()=>[N,e("ul",null,[P,e("li",null,[t(" Prototype Demo "),e("div",S,[e("img",{src:l(g),class:"w-1/2"},null,8,T),e("img",{src:l(p),class:"w-1/2"},null,8,k)])])])]),_:1}),s(l(o),null,{default:n(()=>[I,j,s(l(a),{src:l(f),class:"w-2/3"},null,8,["src"])]),_:1}),s(l(o),null,{default:n(()=>[C,e("ul",null,[D,e("li",null,[t(" Experiments and validation accuracy "),e("ul",null,[e("li",null,[t(" DenseNet + Pyramid Pooling Module + Transformer "),s(l(a),{src:l(c)["recap4.0"],class:"w-8/12"},null,8,["src"])]),e("li",null,[t(" DenseNet + Transformer "),s(l(a),{src:l(c).recap4,class:"w-8/12"},null,8,["src"])])])])])]),_:1})]),e("section",null,[s(l(i),{text:"II. Auxiliary Loss"}),s(l(o),null,{default:n(()=>[H,t(" The regression-based methods, one of obeject counting methods, is learning to count by regressing a density map, and the predicted count equals the integration of the density map."),V,A,t(" Multi-scale counting model(MSCM) is designed based on regression-based method, used to predict the number of each symbol class. It consists of multi-scale feature extraction, channel attention and sum-pooling operator. "),s(l(a),{src:l(c).mscm,class:"w-8/12"},null,8,["src"])]),_:1}),s(l(o),null,{default:n(()=>[F,B]),_:1}),s(l(o),null,{default:n(()=>[W,t(" The auxiliary loss function consists of two parts: $L=L_{cls}+L_{counting}$ "),J,t(" $L=L_{cls}$ is a common-used cross entropy classification loss of the predicted probability with respect to its ground-truth. "),O,t(" Denoting the counting ground truth of each symbol class as $\\hat V$, $L_{couting}$ is a smooth $L1$ regression loss defined as follows: $L_{couting} = smooth_{L1}(V, \\hat V)$. ")]),_:1})]),e("section",null,[s(l(i),{text:"III. Experiment"}),s(l(o),null,{default:n(()=>[q,s(l(a),{src:l(b),class:"w-3/5"},null,8,["src"])]),_:1}),s(l(o),null,{default:n(()=>[z]),_:1})]),s(l(i),{text:"Thank you!"})])])]))}};export{se as default};
