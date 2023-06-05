<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import imgHMER from "@images/June8/hmer.jpg";
import imgTradition from "@images/June8/tradition.png";
import imgOCR from "@images/June8/ocr.jpg";
import imgTedious from "@images/June8/tedious.png"
loadReveal();
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <Cover date="June 8" />
                <section>
                    <HSection text="I. Introduction" />
                    <VSection>
                        <h2>Definition of HMER</h2>
                        <p>
                            HMER is the process of automatically identifying and
                            extracting mathematical expressions from handwritten
                            input.
                        </p>
                        <Image :src="imgHMER" alt="hmer" class="w-2/5" />
                    </VSection>
                    <VSection>
                        <h2>Definition of HMER</h2>
                        <p>
                            The extracted mathematical expressions will be
                            converted into LaTeX format, which facilitates
                            computer processing.
                        </p>
                        <code style="font-size:x-large;">
                            \begin{align} y &= (x+1)^2 \\ &= x^2+2x+1
                            \end{align}
                        </code>
                        <p class="text-center">↓</p>
                        <pre style="font-size:xx-large; width: 60%;">
                            <code data-trim>
                                \begin{align}
                                y &= (x+1)^2 \\
                                    &= x^2+2x+1
                                \end{align}
                            </code>
                        </pre>
                    </VSection>
                    <VSection>
                        <h2>Workflow</h2>
                        <ul>
                            <li>Preprocessing</li>
                            <li>Symbol Segmentation</li>
                            <li>Symbol Classification</li>
                            <li>Structural Analysis</li>
                        </ul>
                        <Image
                            :src="imgTradition"
                            alt="workflow"
                            class="w-2/3"
                        />
                    </VSection>
                    <VSection>
                        <h2>Comparison with Other Recognition Methods</h2>
                        <ol>
                            <li>
                                Optical Character Recognition (OCR)
                                <ul>
                                    <li>
                                        mainly used for
                                        <strong>digitizing printed text</strong>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Intelligent Character Recognition (ICR)
                                <ul>
                                    <li>
                                        used for recognizing structured
                                        handwriting such as
                                        <strong>tables and forms</strong>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Handwritten Text Recognition (HTR)
                                <ul>
                                    <li>
                                        aims to recognize
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
                        <Image
                            :src="imgOCR"
                            alt="OCR"
                            class="w-3/5"
                        />
                    </VSection>
                </section>
                <section>
                    <section>
                        <div class="center">
                            <div>
                                <h1>II. Significance</h1>
                            </div>
                        </div>
                    </section>
                    <section data-markdown>
                        <textarea data-template>
                            ## Education and Research
                            * Editing formulas on the computer was a challenging task,thus save time for researchers
                            * Automatically grade handwritten mathematical assignments
                            * Interactive online courses that allow students to enter handwritten formulas and receive immediate feedback
                            <image class="w-3/5" src="/src/assets/images/June8/tedious.png" style="margin:0 auto;"/>
                        </textarea>
                    </section>
                    <section data-markdown>
                        <textarea data-template >
                            ## Industry and Business
                            * In engineering, handwritten formula recognition can be used to digitize hand-drawn diagrams and engineering sketches, making them easier to edit and share.
                            * n finance, handwritten formula recognition can be used to digitize handwritten financial documents, such as invoices and receipts. This can help to streamline accounting processes, reduce errors, and improve efficiency.
                            <image class="w-2/5" src="/src/assets/images/June8/digitization.png" style="margin:0 auto;"/>
                        </textarea>
                    </section>
                </section>
                <section>
                    <section>
                        <div class="center">
                            <div>
                                <h1>III. Methodology</h1>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2>Three Phases</h2>
                        <div style="align-items: center;">
                            <blockquote>
                                Phase1: Data Collection & PreProcessing
                                <p>The preprocessing will involve data cleaning, normalization, resizing, and augmentation.</p>
                            </blockquote> 
                            <p class="text-center">↓</p>

                            <blockquote>
                                Phase2: Model Development & Evaluation
                                <p>A model with novel architectural components will be developed based on the encoder-decoder neural network.</p>
                            </blockquote> 
                            <p class="text-center">↓</p>

                            <blockquote>
                                Phase3: Continual Optimization and Model Deployment
                                <p>Overcome the corner cases and maximizing recognition accuracy</p>
                            </blockquote> 
                        </div>
                    </section>
                    <section data-markdown>
                        <textarea data-template>
                        <h2>Encoder</h2>
                        <p>The fundamental concept of DenseNet involves linking all networks in a feed-forward manner, which amplifies the flow of information between layers through direct connections between each layer and all subsequent layers.</p>
                        <code>
                            \begin{align} 
                                x_{\ell}=H_{\ell}\left(\left[x_0 ; x_1 ; \ldots ; x_{\ell-1}\right]\right)
                            \end{align}
                        </code>


                        Here, $H_{\ell}(\cdot)$ denotes a composite function consisting of three consecutive layers (a batch normalization layer, followed by a ReLU layer and a $3 \times 3$ convolution layer) and $\left[{x}_{0} ; {x}_{1} ; \ldots ; {x}_{\ell-1}\right]$  represents the concatenation operation of all the output features.
                        
                        
                        Furthermore, a $1 \times 1$ convolutional layer can be incorporated into the encoder part to adjust the output image feature dimension to match the embedding dimension for further processing.
                    </textarea>
                    </section>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
