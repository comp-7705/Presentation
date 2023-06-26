<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";

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
                    <h2>Recap of 1st Week and 2nd Week</h2>
                </VSection>
                <section>
                    <HSection text="I. Encoder from Scratch" />
                    <VSection>
                        <h2>ResNet</h2>
                    </VSection>
                    <VSection>
                        <h2>DenseNet</h2>
                    </VSection>
                    <VSection>
                        <h2>Feature Pyramid Network (FPN)</h2>
                    </VSection>
                    <VSection>
                        <h2>Pyramid Scene Parsing Network (PSPNet)</h2>
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Decoder from Scratch" />
                    <VSection>
                        <h2>Gated Recurrent Unit (GRU)</h2>
                        <!-- https://d2l.ai/chapter_recurrent-modern/gru.html -->
                    </VSection>
                    <VSection>
                        <h2>Attention Mechanism</h2>
                        <!-- https://d2l.ai/chapter_attention-mechanisms-and-transformers/queries-keys-values.html -->
                    </VSection>
                    <VSection>
                        <h2>Coverage Mechanism</h2>
                        <!-- https://ieeexplore.ieee.org/document/8546031 -->
                        <!-- See DenseWAP Paper, Equation 17 to 20 -->
                    </VSection>
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
                        <h2>Training Curves</h2>
                        <p>Loss:</p>
                        <p>Accuracy:</p>
                    </VSection>
                </section>
                <VSection>
                    <h2>Next Schedule</h2>
                </VSection>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
