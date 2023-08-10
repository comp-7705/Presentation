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
                        <h2>Object Counting</h2>
                        <ul>
                            <li>
                                Regression-based methods: To learn counting by
                                regressing a
                                <span class="red-bold">density map</span>, and
                                the predicted count equals the integration of
                                the density map.
                            </li>
                            <li>
                                Multi-scale counting model(MSCM) is designed
                                based on regression-based method, used to
                                predict the number of each symbol class.
                            </li>
                        </ul>
                        <Image :src="im['CAN']" class="w-2/3" />
                        <span class="text-xl italic">
                            Li, B., Yuan, Y., Liang, D., Liu, X., Ji, Z., Bai,
                            J., ... & Bai, X. (2022, October). When counting
                            meets HMER: counting-aware network for handwritten
                            mathematical expression recognition. In European
                            Conference on Computer Vision (pp. 197-214). Cham:
                            Springer Nature Switzerland.
                        </span>
                    </VSection>
                    <VSection>
                        <h2>Multi-scale Counting Module(MSCM)</h2>
                        <!-- It consists of multi-scale feature extraction, channel
                        attention and sum-pooling operator. -->
                        <Image :src="im['MSCM']" class="w-5/6" />
                        <ul>
                            <li>
                                Two parallel multi-scale branches ($3 \times 3$,
                                $5 \times 5$) are used to generate counting
                                maps. Channel attention is adopted to enhance
                                the feature extraction.
                            </li>
                            <!-- It is noteworthy that the feature maps of different
                            branches contain different scale information and are
                            highly complementary. -->
                            <li>
                                In counting map, each map $\mathbf{M_i}$ is
                                actually a pseudo density map, where
                                $\mathbf{M_i} \in \mathbb{R}^{H \times W}$. We
                                can obtain counting vector $V$ by sum-pooling
                                the counting map, where $V \in
                                \mathbb{R}^{1\times C}$, $C$ is the vocabulary
                                size.
                            </li>
                            <li>
                                Each element in $V$ is the predicted count of
                                the i-th class symbol.
                            </li>
                        </ul>
                    </VSection>
                    <VSection>
                        <h2>Loss Function</h2>
                        <ul>
                            <li>
                                The updated loss function consists of two parts:
                                $$ L=L_{cls}+L_{counting} $$ where $L=L_{cls}$
                                is a common-used cross entropy classification
                                loss of the predicted probability with respect
                                to its ground-truth.
                            </li>
                            <li>
                                Denoting the counting ground truth of each
                                symbol class as $\hat{V}$: $$ L_{couting} =
                                \text{smooth}_{L1}(V, \hat{V}) $$
                            </li>
                            <li>
                                For batch size $N$, Smooth L1 loss is defined:
                                $$ \ell(x, y) = L = \{l_1, ..., l_N\}^T $$ $$
                                l_n = \begin{cases} 0.5 (x_n - y_n)^2, &
                                \text{if } |x_n - y_n| \le 1.0 \\ |x_n - y_n| -
                                0.5, & \text{otherwise } \end{cases} $$
                            </li>
                        </ul>
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Experiment" />
                    <VSection class="text-2xl">
                        <h2>Experiment</h2>
                        <div class="grid grid-cols-3">
                            <div>
                                Epoch
                                <img :src="im['epoch']" class="w-full" />
                            </div>
                            <div>
                                Training loss
                                <img :src="im['train-loss']" class="w-full" />
                            </div>
                            <div>
                                Validation loss
                                <img :src="im['val-loss']" class="w-full" />
                            </div>
                        </div>
                        <div class="grid grid-cols-5">
                            <div class="col-span-3">
                                Validation accuracy:
                                <span class="red-bold">0.597</span>
                                <img :src="im['val-acc']" class="w-full" />
                            </div>
                            <div class="col-span-2">
                                <p>Problems:</p>
                                <ul>
                                    <li>A sharp increse in validation loss.</li>
                                    <li>
                                        Validation accuracy is slightly less
                                        than experiments done in the last week
                                        (0.60).
                                    </li>
                                </ul>
                                <p>
                                    Reason: We only back-propagate counting loss
                                    from the encoder without putting the
                                    counting vector into the decoder.
                                </p>
                            </div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Next Schedule</h2>
                        <ul>
                            <li>Finalize our model and deploy it.</li>
                            <li>Write final report.</li>
                            <li>Prepare final presentation.</li>
                        </ul>
                        <Image :src="imgPhase3" class="w-4/5" />
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
