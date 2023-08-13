<script setup>
import { loadReveal, gallery } from "@js/slide.js";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import videoUrl from "@images/Oral/demo-video.mp4";

const imagePaths = Object.values(
    import.meta.glob("../assets/images/Oral/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
        eager: true,
        as: "url",
    })
);
const im = gallery(imagePaths);

let videoDemo = videoUrl;
if (import.meta.env.DEV) {
    videoDemo = videoDemo.replace("@fs/", ""); // remove @fs
}

loadReveal();
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <Cover date="August 14" />
                <section>
                    <HSection text="I. Introduction" />
                    <VSection>
                        <h2>Definition of HMER</h2>
                        <p>
                            Handwritten Mathematical Expression Recognition
                            (HMER) is the process of automatically identifying
                            and extracting mathematical expressions from
                            handwritten input.
                        </p>
                        <Image :src="im['hmer']" alt="hmer" class="w-2/5" />
                    </VSection>
                    <VSection>
                        <h2>Definition of HMER</h2>
                        <p>
                            The extracted mathematical expressions will be
                            converted into LaTeX format, which facilitates
                            computer processing.
                        </p>
                        <Image :src="im['math-expression']" alt="math-expression" class="w-1/5" />
                        <p class="text-center">↓</p>
                        <pre style="font-size: xx-large; width: 60%">
                            <code data-trim>
                                \begin{align}
                                y &= (x+1)^2 \\
                                    &= x^2+2x+1
                                \end{align}
                            </code>
                        </pre>
                    </VSection>
                    <VSection>
                        <h2>Comparison with Other Recognition Methods</h2>
                        <ol>
                            <li>
                                Optical Character Recognition (OCR)
                                <ul>
                                    <li>
                                        Mainly used for
                                        <strong>digitizing printed text</strong>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Intelligent Character Recognition (ICR)
                                <ul>
                                    <li>
                                        Used for recognizing structured
                                        handwriting such as
                                        <strong>tables and forms</strong>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Handwritten Text Recognition (HTR)
                                <ul>
                                    <li>
                                        Aims to recognize
                                        <strong>handwritten text</strong>
                                        while handwritten formula recognition
                                        requires the recognition of
                                        <strong>
                                            mathematical symbols and structures
                                        </strong>
                                    </li>
                                </ul>
                            </li>
                        </ol>
                        <Image :src="im['ocr']" alt="OCR" class="w-2/5" />
                    </VSection>
                    <VSection>
                        <h2>Significance in Education and Research</h2>
                        <ul>
                            <li>
                                Editing formulas on the computer was a
                                challenging task,thus save time for researchers
                            </li>
                            <li>
                                Automatically grade handwritten mathematical
                                assignments
                            </li>
                            <li>
                                Interactive online courses that allow students
                                to enter handwritten formulas and receive
                                immediate feedback
                            </li>
                        </ul>
                        <Image class="w-1/2" :src="im['tedious']" />
                    </VSection>
                    <VSection>
                        <h2>Significance in Industry and Business</h2>
                        <ul>
                            <li>
                                In engineering, handwritten formula recognition
                                can be used to digitize hand-drawn diagrams and
                                engineering sketches, making them easier to edit
                                and share.
                            </li>
                            <li>
                                In finance, handwritten formula recognition can
                                be used to digitize handwritten financial
                                documents, such as invoices and receipts. This
                                can help to streamline accounting processes,
                                reduce errors, and improve efficiency.
                            </li>
                        </ul>
                        <Image class="w-1/3" :src="im['digitization']" />
                    </VSection>
                    <VSection>
                        <h2>Online & Offline Recognition</h2>
                        
                            <div>
                                <ul>
                                <li>
                                Online Recognition:classify symbols in the captured <span class="text-red-600">dynamic trajectories</span>,
                                including both <span class="text-red-600">time</span> and <span class="text-red-600">space</span> information
                                </li>
                                <li>
                                Offline Recognition: segment,analysis and then classify symbols in <span class="text-red-600">static images</span>
                                </li>
                                </ul>
                            </div>
                            <div>
                                <Image
                                :src="im['online_offline']"
                                alt="online_offline"
                                />
                            </div>
                        
                        
                    </VSection>
                    <VSection>
                        <h2>Workflow: Tradition vs Encoder-decoder</h2>
                        <Image
                            :src="im['tradition']"
                            alt="tradition"
                            class="w-3/5"
                        />
                        <Image
                            :src="im['seq2seq']"
                            alt="Seq2Seq"
                            class="w-4/5"
                        />
                    </VSection>
                    <VSection>
                        <h2>Encoder</h2>
                        <p>
                            The fundamental concept of DenseNet involves linking
                            all networks in a feed-forward manner, which
                            amplifies the flow of information between layers
                            through direct connections between each layer and
                            all subsequent layers.
                        </p>
                        <code>
                            $$\begin{align*} x_{\ell}=H_{\ell}\left(\left[x_0 ;
                            x_1 ; \ldots ; x_{\ell-1}\right]\right)
                            \end{align*}$$
                        </code>

                        Here, $H_{\ell}(\cdot)$ denotes a composite function
                        consisting of three consecutive layers (a batch
                        normalization layer, followed by a ReLU layer and a $3
                        \times 3$ convolution layer) and
                        $[x_0;x_1;\ldots;x_{\ell-1}]$ represents the
                        concatenation operation of all the output features.
                        Furthermore, a $1 \times 1$ convolutional layer can be
                        incorporated into the encoder part to adjust the output
                        image feature dimension to match the embedding dimension
                        for further processing.
                    </VSection>
                    <VSection>
                        <h2>Decoders</h2>
                        <div class="grid grid-cols-3">
                            <div>
                                BTTR Decoder(2021)
                                <span class="text-red-600">B</span
                                >idirectionally
                                <span class="text-red-600">T</span>rained
                                <span class="text-red-600">TR</span>ansformer
                                <img :src="im['bttr']" class="w-4/5" />
                            </div>
                            <div>
                                SAN Decoder(2022)
                                <span class="text-red-600">S</span>yntax
                                <span class="text-red-600">A</span>ware
                                <span class="text-red-600">N</span>etwork
                                <img :src="im['san']" class="w-2/3" />
                            </div>
                            <div>
                                CoMER Decoder(2022)
                                <span class="text-red-600">C</span>overage
                                information in the transfor<span
                                    class="text-red-600"
                                    >MER</span
                                >
                                decoder
                                <img :src="im['comer']" />
                            </div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>CROHME Dataset</h2>
                        <div class="flex mb-10">
                            <p class="w-3/5">
                                CROHME:
                                <span class="text-red-600">C</span>ompetition on
                                <span class="text-red-600">R</span>ecognition of
                                <span class="text-red-600">O</span>nline
                                <span class="text-red-600">H</span>andwritten
                                <span class="text-red-600">M</span>athematical
                                <span class="text-red-600">E</span>xpressions,
                                which currently is most widely used benchmark
                                dataset for HMER.
                            </p>
                            <Image
                            :src="im['crohme-compare']"
                            alt="crohme-compare"
                            class="w-3/4"
                            />
                        </div>
                        <Image
                            :src="im['dataset']"
                            alt="dataset"
                            class="w-3/4"
                        />
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Related Work" />
                    <VSection>
                        <h2>ResNet</h2>
                        <ul>
                            <li>
                                Residual connections allow additional layers to
                                simply pass through the input to the output. The
                                residual mapping can learn the
                                <span class="red-bold">identity function</span>
                                more easily.
                                <Image :src="im['resnet-formation']" class="w-1/5" />
                            </li>
                            <li>
                                As a consequence, residual connections allow us
                                to train much
                                <span class="red-bold">deeper networks</span>.
                                Residual connections had a major influence on
                                the design of subsequent deep neural networks,
                                both for convolutional and sequential nature.
                            </li>
                        </ul>
                        <Image :src="im['resnet-block']" class="w-2/5" />
                    </VSection>
                    <VSection>
                        <h2>DenseNet</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                In terms of cross-layer connections, unlike ResNet,
                        where inputs and outputs are added together, DenseNet
                        <span class="red-bold"> concatenates</span>
                        inputs and outputs on the channel dimension.
                            <br/>
                            <br/>
                            <br/>
                            <Image :src="im['resnet&densenet']" class="w-1/1" />
                            </div>
                            <div>
                                <Image :src="im['densenet']" class="w-1/1" />
                            </div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Feature Pyramid Network (FPN)</h2>
                        <ul>
                            <li>
                                FPN is a feature extractor that takes a
                                single-scale image of an arbitrary size as
                                input, and outputs
                                <span class="red-bold">multi-scale</span>
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
                        <h2>PSPNet</h2>
                        <ul>
                            <li>
                                PSPNet introduces the pyramid pooling module,
                                which empirically proves to be an effective
                                <span class="red-bold">
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
                    <VSection>
                        <h2>BTTR</h2>
                        <div class="grid grid-cols-2">
                            <div >
                                Unlike traditional Transformer models that rely on training in single direction, BTTR incorporated <span class="red-bold">bidirectional training method</span>, which allows the model to consider both past (left-to-right) and future (right-to-left) context when processing a given input sequence.
                                <br/>
                                <br/>
                                <br/>
                                <img :src="im['bttr_training']" class="w-full" />
                            </div>
                            <div><img :src="im['bttr']" class="w-3/5" style="margin: auto"/></div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>SAN</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                The inspiration of SAN comes from linguistic theories containing <span class="red-bold">dependency grammar</span> and <span class="red-bold">phrase structure grammar</span>
                                <br/>
                                <br/>
                                <br/>
                                <img :src="im['san-parsing']" class="w-2/1" style="margin: auto"/>
                            </div>
                            <div>
                                <img :src="im['san']" class="w-2/5" style="margin: auto" />
                            </div>
                        </div>
                        
                    </VSection>
                    <VSection>
                        <h2>CoMER</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                <ul>
                            <li>
                                Self-Coverage:Self-coverage uses the alignment information generated by the current layer as input to the attention refinement module.
                            </li>
                            <li>
                                Cross-coverage utilizes the alignment information of the previous layer as the input of the current layer ARM.
                            </li>
                            <li>
                                Fusion-coverage combines the self-coverage and cross-coverage, which can fully use the past alignment information generated from different layers.
                            </li>
                                </ul>
                            </div>
                            <div><img :src="im['comer']" class="w-4/5" style="margin: auto" /></div>
                        </div>
                        
                    </VSection>
                    <VSection>
                        <h2>CAN</h2>
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
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Methodology" />
                    <VSection>
                        <h2>Overview</h2>
                        <Image :src="im['structure-overview']" class="w-2/3" />
                    </VSection>
                    <VSection>
                        <h2>Encoder</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                <h4>DenseNet161</h4>
                                <Image :src="im['densenet161']" class="w-2/3" />
                            </div>
                            <div>
                                <h4>ResNet152</h4>
                                <Image :src="im['resnet152']" class="w-full" />
                            </div>
                        </div>  
                    </VSection>
                    <VSection>
                        <h2>Encoder</h2>
                            <h3>Pyramid Pooling Module</h3>
                            Pyramid Pooling Module (PPM) plays an important role in capturing multi-scale information from the feature maps, it pools the feature maps into multiple scales. <br/>This enables the module to gather contextual information of varying scales, effectively capturing both local and global context.       
                            <Image :src="im['pspnet']" class="w-full" />            
                    </VSection>
                    <VSection>
                        <h2>Encoder</h2>
                            Positional Encoding is a mechanism that injects spatial information into the feature representation by encoding the relative positions of elements within the sequence. 
                            <br/><br/>This allows the model to capture the positional relationships between different elements, which is particularly important in tasks involving sequential data. To get two-dimensional positional encoding on images, we compute the one-dimensional positional encoding along each axis, and concatenate them together.
                    </VSection>
                    <VSection>
                        <h2>Decoder:Self Attention</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                <Image :src="im['QKV']" class="w-full" />
                                <ul>
                                    <li>Decoder self-attention involves computing the similarity between the Query and Key embeddings, which determines <span class="red-bold">how much attention should be given to each Value embedding</span>. </li>
                                    <li>Once the self-attention weights are obtained, they are used to weight the Value embeddings. This weighted combination of Value embeddings represents the context or information that the <span class="red-bold">Decoder needs to focus on the LaTeX sequence</span>.</li>
                                </ul>
                            </div>
                            <div><Image :src="im['model']" class="w-1/2" style="margin: auto;"/></div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Decoder:Encoder-Decoder Attention</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                <Image :src="im['QKV']" class="w-full" />
                                <ul>
                                    <li>The Query is obtained from the output of the <span class="red-bold">Decoder's self-attention layer</span>, which captures the context information so far.   </li>
                                    <li>The Key and Value, on the other hand, are obtained from the <span class="red-bold">output of the Encoder</span>.</li>
                                </ul>
                            </div>
                            <div><Image :src="im['model']" class="w-1/2" style="margin: auto;"/></div>
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Loss Function</h2>
                        Loss function equals to common used cross entropy loss combined with L1 regression loss
                        <br/><br/><br/>
                        <Image :src="im['loss-function1']" class="w-1/3" />  
                        <Image :src="im['loss-function2']" class="w-2/5" />  
                        <Image :src="im['loss-function3']" class="w-2/3" />
                           
                    </VSection>
                </section>
                <section>
                    <HSection text="IV. CROHME Dataset" />
                    <VSection>
                        <h2>Introduction</h2>
                        <div class="flex mb-10">
                          <p class="w-3/5">
                            CROHME:
                            <span class="text-red-600">C</span>ompetition on
                            <span class="text-red-600">R</span>ecognition of
                            <span class="text-red-600">O</span>nline
                            <span class="text-red-600">H</span>andwritten
                            <span class="text-red-600">M</span>athematical
                            <span class="text-red-600">E</span>xpressions,
                            which currently is most widely used benchmark
                            dataset for HMER.
                          </p>
                          <table
                              class="table-auto text-xl border-2 border-slate-300"
                          >
                            <thead>
                            <tr>
                              <th
                                  class="border-2 border-slate-300"
                              ></th>
                              <th class="border-2 border-slate-300">
                                Number of Images
                              </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                              <td class="border-2 border-slate-300">
                                Training Set
                              </td>
                              <td class="border-2 border-slate-300">
                                8835
                              </td>
                            </tr>
                            <tr>
                              <td class="border-2 border-slate-300">
                                Test 2014
                              </td>
                              <td class="border-2 border-slate-300">
                                986
                              </td>
                            </tr>
                            <tr>
                              <td class="border-2 border-slate-300">
                                Test 2016
                              </td>
                              <td class="border-2 border-slate-300">
                                1147
                              </td>
                            </tr>
                            <tr>
                              <td class="border-2 border-slate-300">
                                Test 2019
                              </td>
                              <td class="border-2 border-slate-300">
                                1199
                              </td>
                            </tr>
                            <tr>
                              <td class="border-2 border-slate-300">
                                Total Test Set
                              </td>
                              <td class="border-2 border-slate-300">
                                3332
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <Image
                            :src="im['dataset']"
                            alt="dataset"
                            class="w-3/4"
                        />
                    </VSection>
                    <VSection>
                        <h2>Data Distribution</h2>
                        <div class="grid grid-cols-2">
                          <Image
                              :src="im['token-distri']"
                              class="inline w-2/3"
                          />
                          <Image
                              :src="im['train-len-distri']"
                              class="inline w-2/3"
                          />
                          <Image
                              :src="im['train-h-distri']"
                              class="inline w-2/3"
                          />
                          <Image
                              :src="im['train-w-distri']"
                              class="inline w-2/3"
                          />
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Failure Cases Analysis</h2>
                        <ul>
                          <li>
                            Label Length Distribution: SAN,BTTR and CoMER are
                            particularly susceptible to failures when the label
                            length is either
                            <span class="red-bold"> 4, 14, or 16. </span>
                          </li>
                          <li>
                            Symbol Recognition Failures: All models lack context
                            awareness.
                          </li>
                          <li>
                            Structure Recognition Failures:
                            <span class="red-bold">CoMER</span>
                            wins out from all models.
                          </li>
                        </ul>
                        <Image
                            :src="im['fail-label-len']"
                            class="pt-10 w-full"
                        />
                    </VSection>
                    <VSection>
                        <h2>Data Augmentation</h2>
                        <Image
                            :src="im['aug-model']"
                            class="pt-10 w-full"
                        />
                        <Image :src="im['symbol-case']" class="w-3/5" />
                        <Image :src="im['symbol-tab']" class="w-full" />
                        <Image :src="im['struct-case']" class="w-4/5" />
                        <Image :src="im['struct-tab']" class="w-full" />
                    </VSection>
                </section>
                <section>
                    <HSection text="V. Experimental Results" />
                    <VSection>
                        <h2>DenseNet & ResNet</h2>
                        <strong>Comparison Tables</strong>
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
                        
                    </VSection>
                    <VSection>
                        <h2>DenseNet & ResNet</h2>
                        <strong>Comparison Table</strong>
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
                        <h2>DenseNet & ResNet</h2>
                        <strong>Accuracy Curves</strong>
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
                        <h2>DenseNet & ResNet</h2>
                        <strong>Loss Curves</strong>
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
                    <VSection>
                        <h2>Experiments with/without PSPNet</h2>
                        <ul>
                            <li>
                                All the experiments are conduted on HKU GPU
                                Farm, including NVIDIA RTX 2080Ti, RTX 3090.
                            </li>
                            <li>
                                Experiment 1: DenseNet + Pyramid Pooling Module
                                + Transformer
                                <div class="grid grid-cols-4 text-2xl">
                                    <div>
                                        Epoch
                                        <img
                                            :src="im['exp1-epoch']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Training loss
                                        <img
                                            :src="im['exp1-train-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation loss
                                        <img
                                            :src="im['exp1-val-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation accuracy:
                                        <span class="red-bold">0.60</span>
                                        <img
                                            :src="im['exp1-val-acc']"
                                            class="w-full"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                Experiment 2: DenseNet + Transformer
                                <div class="grid grid-cols-4 text-2xl">
                                    <div>
                                        Epoch
                                        <img
                                            :src="im['exp2-epoch']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Training loss
                                        <img
                                            :src="im['exp2-train-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation loss
                                        <img
                                            :src="im['exp2-val-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation accuracy:
                                        <span class="red-bold">0.61</span>
                                        <img
                                            :src="im['exp2-val-acc']"
                                            class="w-full"
                                        />
                                    </div>
                                </div>
                            </li>
                            <li>
                                Validation accuracy of the state-of-the-art
                                models is around
                                <span class="red-bold">0.59</span>.
                            </li>
                        </ul>
                    </VSection>
                    <VSection class="text-2xl">
                        <h2>Without Counting Vector in Decoder</h2>
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
                </section>
                <section>
                    <HSection text="VI. System Demonstration" />
                    <VSection>
                        <h2>Demo Video</h2>
                        <div class="flex justify-center">
                            <VideoPlayer
                                :src="videoDemo"
                                controls
                                loop
                                :width="1200"
                                class="w-full"
                            />
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Data Preprocessing</h2>
                    </VSection>
                    <VSection>
                        <h2>Model Deployment</h2>
                    </VSection>
                </section>
                <section>
                    <HSection text="VII. Conclusion and Future Work" />
                    <VSection>
                        <h2>Research</h2>
                    </VSection>
                    <VSection>
                        <h2>System</h2>
                    </VSection>
                </section>
                <VSection>
                    <h2>Task List</h2>
                    <ol>
                        <li>Reading survey and state-of-the-art papers of HMER</li>
                        <li>Collecting dataset and preprocessing</li>
                        <li>Dataset analysis</li>
                        <li>Read relevant papers and test datasets on open source code</li>
                        <li>Analyzing the failure cases of state-of-the-art models</li>
                        <li>Developing and deploying project website</li>
                        <li>Designing a novel model and propose new method</li>
                        <li>Testing the model on the dataset, fixing bugs and constantly trying to improve accuracy</li>
                        <li>Deploying the final model to the back end</li>
                        <li>Keeping the project website updated</li>
                        <li>Write final report and prepare oral examination</li>
                    </ol>
                </VSection>
                <VSection>
                    <h2>Individual Contribution</h2>
                    <img
                        :src="im['contribution-table']"
                        class="w-full"
                    />
                </VSection>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
