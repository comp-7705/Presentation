<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";
import imgHMER from "@images/June8/hmer.jpg";
import imgDemo1 from "@images/June15/web-demo1.png";
import imgDemo2 from "@images/June15/web-demo2.jpg";

// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/June29/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
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
                <Cover date="June 29" />
                <VSection>
                    <h2>Recap of 1st Week</h2>
                    <ul>
                        <li>
                            Handwritten Mathematical Expression Recognition
                            (HMER): <br />
                            Images or Trajectories ⇒ Markup Languages like LaTeX
                            or MathML
                        </li>
                        <li>
                            Sigificance in Education and Research, in Industry
                            and Business
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
                                    <span class="text-red-600 font-bold">
                                        4, 14, or 16.
                                    </span>
                                </li>
                                <li>
                                    Symbol Recognition Failures: All models lack
                                    context awareness.
                                </li>
                                <li>
                                    Structure Recognition Failures: CoMER wins
                                    out from all models.
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
                <section>
                    <HSection text="I. Encoder From Scratch" />
                    <VSection>
                        <h2>ResNet</h2>
                        <ul>
                            <li>
                                Residual connections allow additional layers to
                                simply pass through the input to the output. The
                                residual mapping can learn the
                                <span class="text-red-600 font-bold"
                                    >identity function</span
                                >
                                more easily, such as pushing parameters in the
                                weight layer to zero.
                            </li>
                            <li>
                                As a consequence, residual connections allow us
                                to train much
                                <span class="text-red-600 font-bold"
                                    >deeper networks</span
                                >. Residual connections had a major influence on
                                the design of subsequent deep neural networks,
                                both for convolutional and sequential nature.
                            </li>
                        </ul>
                        <Image :src="im['resnet-block']" class="w-3/5" />
                    </VSection>
                    <VSection>
                        <h2>ResNet-152</h2>
                        <!-- We use ResNet-152 in our experimental model. -->
                        <Image :src="im['resnet152']" class="w-4/5" />
                    </VSection>
                    <VSection>
                        <h2>DenseNet</h2>
                        In terms of cross-layer connections, unlike ResNet,
                        where inputs and outputs are added together, DenseNet
                        <span class="text-red-600 font-bold">
                            concatenates</span
                        >
                        inputs and outputs on the channel dimension.
                        <Image :src="im['densenet']" class="w-1/2" />
                    </VSection>
                    <VSection>
                        <h2>DenseNet-161</h2>

                        <Image :src="im['densenet161']" class="w-1/2" />
                    </VSection>
                    <VSection>
                        <h2>Feature Pyramid Network (FPN)</h2>
                        <ul>
                            <li>
                                FPN is a feature extractor that takes a
                                single-scale image of an arbitrary size as
                                input, and outputs
                                <span class="text-red-600 font-bold"
                                    >multi-scale</span
                                >
                                feature maps at multiple levels.
                            </li>
                            <li>
                                The features maps at different levels are fused
                                and predictions are made on the fused feature
                                maps.
                            </li>
                        </ul>
                        <Image :src="im['fpn']" class="w-2/3" />
                    </VSection>
                    <VSection>
                        <h2>Pyramid Scene Parsing Network (PSPNet)</h2>
                        <ul>
                            <li>
                                PSPNet introduces the pyramid pooling module,
                                which empirically proves to be an effective
                                <span class="text-red-600 font-bold">
                                    global contextual prior.
                                </span>
                                PSPNet uses the Pyramid Pooling Module shown in
                                (c) to gather context information in feature
                                maps.
                            </li>
                            <li>
                                Using 4-level pyramid (1, 2, 3, and 6), the
                                pooling kernels cover the whole, half of, and
                                small portions of the image. They are fused as
                                the global priors. Then the global priors are
                                upsampled and concatenated with the original
                                feature map.
                            </li>
                        </ul>
                        <Image :src="im['pspnet']" class="w-full" />
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Decoder from Scratch" />
                    <VSection>
                        <h2>Gated Recurrent Unit (GRU)</h2>
                        Reset Gate $R_t$. Update Gate $Z_t$. Candidate hidden
                        state $\tilde{H_t}$. Hidden state $H_t$.
                        <!-- prettier-ignore -->
                        <code>
                            \begin{aligned}
                            \mathbf{R}_t &= \sigma(\mathbf{X}_t \mathbf{W}_{xr} + \mathbf{H}_{t-1} \mathbf{W}_{hr} + \mathbf{b}_r), \\
                            \mathbf{Z}_t &= \sigma(\mathbf{X}_t \mathbf{W}_{xz} + \mathbf{H}_{t-1} \mathbf{W}_{hz} + \mathbf{b}_z), \\
                            \tilde{\mathbf{H}}_t &= \tanh(\mathbf{X}_t \mathbf{W}_{xh} + \left(\mathbf{R}_t \odot \mathbf{H}_{t-1}\right) \mathbf{W}_{hh} + \mathbf{b}_h), \\
                            \mathbf{H}_t &= \mathbf{Z}_t \odot \mathbf{H}_{t-1} + (1 - \mathbf{Z}_t) \odot \tilde{\mathbf{H}}_t.
                            \end{aligned}
                        </code>
                        <!-- Hadamard (elementwise) product operator -->
                        <Image :src="im['gru']" class="w-2/3" />
                        <!-- https://d2l.ai/chapter_recurrent-modern/gru.html -->
                    </VSection>
                    <VSection>
                        <h2>Attention Mechanism</h2>
                        <ul>
                            <li>
                                Query is used to determine the relevance or
                                importance of different elements in the input
                                sequence.
                            </li>
                            <li>
                                Key is often derived from the input sequence
                                itself, and its purpose is to provide a basis
                                for comparison with the query.
                            </li>
                            <li>
                                Value is the actual information associated with
                                each element or position in the input sequence.
                                It can be seen as the content or meaning that we
                                want to focus on.
                            </li>
                        </ul>
                        <Image :src="im['attention-qkv']" />
                        <!-- https://d2l.ai/chapter_attention-mechanisms-and-transformers/queries-keys-values.html -->
                    </VSection>
                    <!-- 感觉讲不完这么多，可以留着下次讲，说使用了一种性能更好的模型
                        <VSection>
                        <h2>Coverage Mechanism</h2>
                        <Image :src="im['gru']" class="w-2/1"/>
                        https://ieeexplore.ieee.org/document/8546031 -->
                    <!-- See DenseWAP Paper, Equation 17 to 20 -->
                    <!--</VSection> 
                    -->
                </section>
                <section>
                    <HSection text="III. Experiment" />
                    <VSection>
                        <h2>Comparison Tables</h2>
                        <p>Training setting:</p>
                        <table class="table-auto border-y-2 border-black">
                            <thead>
                                <tr>
                                    <th>No. Exp</th>
                                    <th>Encoder</th>
                                    <th>Decoder</th>
                                    <th>Epoch</th>
                                    <th>Learning Rate</th>
                                    <th>Batch Size</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,2</td>
                                    <td>ResNet-152</td>
                                    <td>GRU+Attention</td>
                                    <td>50</td>
                                    <td>1e-4</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <td>3,4</td>
                                    <td>DenseNet-161</td>
                                    <td>GRU+Attention</td>
                                    <td>100</td>
                                    <td>1e-4</td>
                                    <td>8</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Loss:</p>
                        <table class="table-auto border-y-2 border-black">
                            <thead>
                                <tr>
                                    <th>No. Exp</th>
                                    <th>Training</th>
                                    <th>2014</th>
                                    <th>2016</th>
                                    <th>2019</th>
                                    <th>Validation (Total)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,2</td>
                                    <td>2.565</td>
                                    <td>3.063</td>
                                    <td>3.106</td>
                                    <td>2.974</td>
                                    <td>3.048</td>
                                </tr>
                                <tr>
                                    <td>3,4</td>
                                    <td>2.553</td>
                                    <td>2.955</td>
                                    <td>2.948</td>
                                    <td>2.854</td>
                                    <td>2.919</td>
                                </tr>
                            </tbody>
                        </table>
                        <p>Accuracy (%) on CROHME dataset:</p>
                        <table class="table-auto border-y-2 border-black">
                            <thead>
                                <tr>
                                    <th>No. Exp</th>
                                    <th>Training</th>
                                    <th>2014</th>
                                    <th>2016</th>
                                    <th>2019</th>
                                    <th>Validation (Total)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1,2</td>
                                    <td>95.90</td>
                                    <td>25.92</td>
                                    <td>24.32</td>
                                    <td>27.53</td>
                                    <td>25.92</td>
                                </tr>
                                <tr>
                                    <td>3,4</td>
                                    <td>99.22</td>
                                    <td>33.84</td>
                                    <td>33.18</td>
                                    <td>32.36</td>
                                    <td>33.13</td>
                                </tr>
                            </tbody>
                        </table>
                    </VSection>
                    <VSection>
                        <h2>Accuracy Curves</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                Experiment 1 & 2
                                <Image :src="im['Exp1n2-Acc']" class="w-full" />
                            </div>
                            <div>
                                Experiment 3 & 4
                                <Image :src="im['Exp3n4-Acc']" class="w-full" />
                            </div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Loss Curves</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                Experiment 1 & 2
                                <Image
                                    :src="im['Exp1n2-Loss']"
                                    class="w-full"
                                />
                            </div>
                            <div>
                                Experiment 3 & 4
                                <Image
                                    :src="im['Exp3n4-Loss']"
                                    class="w-full"
                                />
                            </div>
                        </div>
                    </VSection>
                </section>
                <VSection>
                    <h2>Next Schedule</h2>
                    <Image :src="im['schedule']" class="w-2/3" />
                </VSection>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
