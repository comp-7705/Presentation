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
                            CROHME dataset and State-of-the-art models (BTTR,
                            SAN, CoMER)
                        </li>
                    </ul>
                    <Image :src="im['hmer']" class="w-1/3" />    
                </VSection>
                <VSection>
                    <h2>Recap of 2nd Week: Failure Case Analysis</h2>
                    <ul>
                        <li>
                            Label Length Distribution: <br/>
                            SAN,BTTR and CoMER are particularly susceptible
                                to failures when the label length is either
                                <span class="text-red-600 font-bold"
                                    >4, 14, or 16</span
                                >.
                        </li>
                        <li>
                            Symbol Recognition Failures: <br/>
                            <aside class="note">
                                All models incorrectly recognized the uppercase $X$ as a
                                lowercase $x$, likely due to ambiguity in the image
                                itself, all models mistook the symbol
                                $\exists$ for the number $7$, since $\exists$ is one
                                of the five least frequently occurring tokens.
                            </aside>
                        </li>
                        <li>
                            Structure Recognition Failures: <br/>
                            <aside class="note">
                                The models BTTR and SAN failed to
                                detect the superscript of $y^{b+1}$. Similarly, BTTR could not include $(n-1)$ within the
                                square root while SAN produced a duplicated value of
                                $>0$. On the other hand, CoMER demonstrated
                                successful recognition of these two examples.
                            </aside>
                        </li>
                    </ul>   
                </VSection>
                <section>
                    <HSection text="I. Encoder From Scratch" />
                    <VSection>
                        <h2>ResNet</h2>
                        <ul>
                        <li>
                            When deeper networks are able to start converging, 
                            a degradation problem has been exposed: <br/>
                            With the network depth increasing, 
                            accuracy gets saturated (which might be unsurprising) 
                            and then degrades rapidly. 
                        </li>
                        <li>
                            The degradation problem is addressed by introducing a deep residual learning framework.
                            Instead of hoping each few stacked layers directly fit a desired underlying mapping,
                            we explicitly let these layers fit a residual mapping. 
                            It is easier to optimize the residual mapping than to optimize the original, unreferenced mapping. 
                        </li>
                    </ul>
                        <Image :src="im['resnet-block']" class="w-2/5"/>
                    </VSection>
                    <VSection>
                        <h2>ResNet</h2>
                        We use ResNet152 practically in our model as following.
                        <Image :src="im['resnet152']" />
                    </VSection>
                    <VSection>
                        <h2>DenseNet</h2>
                        <ul>
                        <li>
                            Problem to solve: Just as the same as ResNet
                        </li>
                        <li>
                            To ensure maximum information flow between layers, 
                            All layers are connected with other layers (but ensure that feature maps of the 
                            same size are present).
                            In order to preserve the characteristics of forward propagation, each layer takes 
                            the previous layer as input and passes its own feature map to the subsequent layers.
                        </li>
                        </ul>
                        <Image :src="im['densenet']" class="w-2/5"/>
                    </VSection>
                    <VSection>
                        <h2>DenseNet</h2>
                        
                        <Image :src="im['densenet161']" class="w-2/5"/>
                    </VSection>
                    <VSection>
                        <h2>Feature Pyramid Network (FPN)</h2>
                        <ul>
                        <li>
                            (a) Scale the images to different scales, 
                            and then use the model to predict the images of each scale in turn.
                        </li>
                        <li>
                            (b) The final feature map is obtained by performing convolution 
                            and pooling operations on the image, 
                            and then predictions are made on the final feature map.
                        </li>
                        <li>
                            (c) SSD forms a feature pyramid by calculating feature maps from different layers 
                            in the convolutional network. 
                        </li>
                        <li>
                            (d) The features on different feature maps are fused and predictions are made on the fused feature maps.
                        </li>
                        </ul>
                        <Image :src="im['fpn']" class="w-1/3"/>
                    </VSection>
                    <VSection>
                        <h2>Pyramid Scene Parsing Network (PSPNet)</h2>
                        In complex-scene parsing,there are 3 common issues:<br/>
                        <ul>
                        <li>
                            Mismatched Relationship
                        </li>
                        <li>
                            Confusion Categories
                        </li>
                        <li>
                            Inconspicuous Classes
                        </li>
                        </ul>
                        <br/>
                        On top of the map, we use the pyramid pooling module shown in (c) to gather context information. 
                        Using our 4-level pyramid, the pooling kernels cover the whole, 
                        half of, and small portions of the image. 
                        They are fused as the global prior. 
                        Then we concatenate the prior with the original feature map in the final part of (c).
                        It is followed by a convolution layer to generate the final prediction map in (d).

                        <Image :src="im['pspnet']"/>
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Decoder from Scratch" />
                    <VSection>
                        <h2>Gated Recurrent Unit (GRU)</h2>
                        <ul>
                            <li>
                                <aside class="note">
                                    Reset Gate $R_t$: 
                                    $R_t=\sigma(W_rx_t+U_rH_{t-1}+b_r)$
                                </aside>
                            </li>
                            <li>
                                <aside class="note">
                                    Update Gate $Z_t$: 
                                    $Z_t=\sigma(W_zx_t+U_zH_{t-1}+b_z)$
                                </aside>
                            </li>
                            <li>
                                <aside class="note">
                                    $\widetilde{H_t}=\tanh(W_cx_t,U(r_t\cdot H_{t-1}))$ <br/>
                                    $H_t=z_th_{t-1}+(1-z_t)\cdot \widetilde{H_t}$
                                </aside>
                            </li>
                        </ul>
                        <Image :src="im['gru']" class="w-2/1"/>
                        <!-- https://d2l.ai/chapter_recurrent-modern/gru.html -->
                    </VSection>
                    <VSection>
                        <h2>Attention Mechanism</h2>
                        <aside class="note">
                            The attention mechanism computes a linear combination over values $\bf{v_i}$ 
 via attention pooling, where weights are derived according to the compatibility between a query $\bf{q}$ 
 and keys $\bf{k_i}$
.
                        </aside>
                        
                        <Image :src="im['attention-qkv']"/>
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
                        <h2>Training Curves</h2>
                        <div class="grid grid-cols-2">
                            <Image :src="im['Exp1n2-Acc']" class="w-1/1"/>
                            <Image :src="im['Exp3n4-Acc']" class="w-1/1"/>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Training Curves</h2>
                        <div class="grid grid-cols-2">
                            <Image :src="im['Exp1n2-Loss']" class="w-1/1"/>
                            <Image :src="im['Exp3n4-Loss']" class="w-1/1"/>
                        </div>
                    </VSection>
                </section>
                <VSection>
                    <h2>Next Schedule</h2>
                    <div class="grid grid-cols-2">
                        <div>
                            <ul>
                                <li>Phase I: Data Collection & Pre-processing</li>
                            </ul>
                            <br/><br/>
                            <ul>
                                <li>Phase II: Model Development & Evaluation</li>
                            </ul>
                            <br/><br/>
                            <ul>
                                <li>Phase III: Continual Optimization and Model Deployment</li>
                            </ul>
                        </div>
                        <Image :src="im['schedule']" class="w-4/5"/>
                    </div>
                    
                </VSection>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
