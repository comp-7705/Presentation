<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";

import imgHMER from "@images/June8/hmer.jpg";
import imgDemo1 from "@images/June15/web-demo1.png";
import imgDemo2 from "@images/June15/web-demo2.jpg";
import imgExp4 from "@images/June29/Exp3n4-Acc.png";
import imgSked from "@images/June29/schedule.png";

// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/July13/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
        eager: true,
        as: "url",
    })
);
const im = gallery(imagePaths);
loadReveal();
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <Cover date="July 13" />
                <section>
                    <HSection text="I. Recap" />
                    <VSection>
                        <h2>Recap of 1st Week</h2>
                        <ul>
                            <li>
                                Handwritten Mathematical Expression Recognition
                                (HMER): <br />
                                Images or Trajectories ⇒ Markup Languages like
                                LaTeX or MathML
                            </li>
                            <li>
                                Sigificance in Education and Research, in
                                Industry and Business
                            </li>
                            <li>
                                Analysis of CROHME dataset and State-of-the-art
                                models (BTTR, SAN, CoMER)
                            </li>
                        </ul>
                        <Image :src="imgHMER" class="w-1/3" />
                    </VSection>
                    <VSection>
                        <h2>Recap of 2nd Week</h2>
                        <ul>
                            <li>
                                Failure Case Analysis
                                <ul>
                                    <li>
                                        Label Length Distribution: SAN,BTTR and
                                        CoMER are particularly susceptible to
                                        failures when the label length is either
                                        <span class="red-bold">
                                            4, 14, or 16.
                                        </span>
                                    </li>
                                    <li>
                                        Symbol Recognition Failures: All models
                                        lack context awareness.
                                    </li>
                                    <li>
                                        Structure Recognition Failures:
                                        <span class="red-bold">CoMER</span>
                                        wins out from all models.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Prototype Demo
                                <div class="flex">
                                    <img :src="imgDemo1" class="w-1/2" />
                                    <img :src="imgDemo2" class="w-1/2" />
                                </div>
                            </li>
                        </ul>
                    </VSection>
                    <VSection>
                        <h2>Recap of 3rd Week</h2>
                        <ul>
                            <li>
                                Encoder: ResNet, DenseNet, Feature Pyramid
                                Network (FPN), and Pyramid Scene Parsing Network
                                (PSPNet).
                            </li>
                            <li>Decoder: GRU, and Attention Mechanism.</li>
                            <li>
                                Experimental results are not desirable. The
                                validation accuracy was only
                                <span class="red-bold">0.33</span>.
                            </li>
                        </ul>
                        <Image :src="imgExp4" class="w-2/3" />
                    </VSection>
                    <VSection>
                        <h2>Recap of 4th Week</h2>
                        <ul>
                            <li>
                                Our model architecture
                                <ul>
                                    <li>
                                        Encoder: DenseNet & Pyramid Pooling Module
                                    </li>
                                    <li>
                                        Decoder: Transformer
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Experiments and validation accuracy
                                <ul>
                                    <li>
                                        DenseNet + Pyramid Pooling Module + Transformer
                                        <Image :src="im['recap4.0']" class="w-8/12" />
                                    </li>
                                    <li>
                                        DenseNet + Transformer
                                        <Image :src="im['recap4']" class="w-8/12" />
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <!-- <Image :src="im['recap4']" class="w-10/12" /> -->
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Auxiliary Loss" />
                    <VSection>
                        <h2>Obeject counting</h2>
                        The regression-based methods, one of obeject counting methods, 
                        is learning to count by regressing a density map, 
                        and the predicted count equals the integration of the density map.<br><br>

                        Multi-scale counting model(MSCM) is designed based on regression-based method, 
                        used to predict the number of each symbol class. It 
                        consists of multi-scale feature extraction, channel attention and sum-pooling operator.
                        <Image :src="im['mscm']" class="w-8/12" />
                    </VSection>
                    <VSection>
                        <h2>Multi-scale counting module(MSCM)</h2>
                        <ul>
                            <li>
                                Here, MSCM utilize two parallel convolution branches to extract multi-scale features.
                                Following the convolution layer, the channel attention is adopted 
                                to enhance the feature information further.
                            </li>
                            <br>
                            <li>
                                Following the $1*1$ convolution, it utilize a sigmoid function to yield 
                                the value in a range of (0,1) to generate counting map $M \in \mathbb{R^{H\times W}}$.
                            </li>
                            <br>
                            <li>
                                In this sense, each $M_i$ is actually a pseudo density map.
                                Then utilize sum-pooling to obtain counting vector $V_i=\sum_{p=1}^H \sum_{q=1}^W M_{i,pq}$.
                                <br>
                                Here, $V_i \in \mathbb{R^{1\times 1}}$ is the predicted count of the i-th class symbol. 
                                It is noteworthy that the feature maps of different branches contain different 
                                scale information and are highly complementary.
                            </li>
                        </ul>
                    </VSection>
                    
                    <VSection>
                        <h2>Loss function</h2>
                        The auxiliary loss function consists of two parts: $L=L_{cls}+L_{counting}$
                        <br>
                        $L=L_{cls}$ is a common-used cross entropy classification loss 
                        of the predicted probability with respect to its ground-truth.
                        <br>
                        Denoting the counting ground truth of each symbol class as $\hat V$, $L_{couting}$ 
                        is a smooth $L1$ regression loss defined as follows: $L_{couting} = smooth_{L1}(V, \hat V)$.
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Experiment" />
                    <VSection>
                        <h2>Next Schedule</h2>
                        <Image :src="imgSked" class="w-3/5" />
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
