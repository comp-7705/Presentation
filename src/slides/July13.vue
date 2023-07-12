<script setup>
import { loadReveal, gallery, Week1, Week2, Week3, Week4 } from "@js/slide.js";
import imgPhase3 from "@images/June15/phase3.jpg";

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
                    <Week1 />
                    <Week2 />
                    <Week3 />
                    <Week4 />
                </section>
                <section>
                    <HSection text="II. Auxiliary Loss" />
                    <VSection>
                        <h2>Object counting</h2>
                        <p>
                            The regression-based methods, one of obeject
                            counting methods, is learning to count by regressing
                            a density map, and the predicted count equals the
                            integration of the density map.
                        </p>
                        <p>
                            Multi-scale counting model(MSCM) is designed based
                            on regression-based method, used to predict the
                            number of each symbol class. It consists of
                            multi-scale feature extraction, channel attention
                            and sum-pooling operator.
                        </p>
                        <Image :src="im['mscm']" class="w-full" />
                    </VSection>
                    <VSection>
                        <h2>Multi-scale counting module(MSCM)</h2>
                        <ul>
                            <li>
                                Here, MSCM utilize two parallel convolution
                                branches to extract multi-scale features.
                                Following the convolution layer, the channel
                                attention is adopted to enhance the feature
                                information further.
                            </li>
                            <br />
                            <li>
                                Following the $1*1$ convolution, it utilize a
                                sigmoid function to yield the value in a range
                                of (0,1) to generate counting map $M \in
                                \mathbb{R^{H\times W}}$.
                            </li>
                            <br />
                            <li>
                                In this sense, each $M_i$ is actually a pseudo
                                density map. Then utilize sum-pooling to obtain
                                counting vector $V_i=\sum_{p=1}^H \sum_{q=1}^W
                                M_{i,pq}$.
                                <br />
                                Here, $V_i \in \mathbb{R^{1\times 1}}$ is the
                                predicted count of the i-th class symbol. It is
                                noteworthy that the feature maps of different
                                branches contain different scale information and
                                are highly complementary.
                            </li>
                        </ul>
                    </VSection>

                    <VSection>
                        <h2>Loss function</h2>
                        The auxiliary loss function consists of two parts:
                        $L=L_{cls}+L_{counting}$
                        <br />
                        $L=L_{cls}$ is a common-used cross entropy
                        classification loss of the predicted probability with
                        respect to its ground-truth.
                        <br />
                        Denoting the counting ground truth of each symbol class
                        as $\hat V$, $L_{couting}$ is a smooth $L1$ regression
                        loss defined as follows: $L_{couting} = smooth_{L1}(V,
                        \hat V)$.
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Experiment" />
                    <VSection>
                        <h2>Next Schedule</h2>
                        <Image :src="imgPhase3" class="w-full" />
                    </VSection>
                    <VSection>
                        <h2>Experiment</h2>
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
