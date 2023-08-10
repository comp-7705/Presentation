<script setup>
import { loadReveal, gallery } from "@js/slide.js";
// import { VideoPlayer } from "@videojs-player/vue";
// import "video.js/dist/video-js.css";
// import videoUrl from "@images/July6/demo-video.mp4";

const imagePaths = Object.values(
    import.meta.glob("../assets/images/Oral/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
        eager: true,
        as: "url",
    })
);
const im = gallery(imagePaths);

// let videoDemo = videoUrl;
// if (import.meta.env.DEV) {
//     videoDemo = videoDemo.replace("@fs/", ""); // remove @fs
// }

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
                        <h2>Workflow: Tradition vs Encoder-decoder</h2>
                        <Image
                            :src="im['tradition']"
                            alt="workflow"
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
                </section>
                <section>
                    <HSection text="III. Methodology" />
                </section>
                <section>
                    <HSection text="IV. CROHME Dataset" />
                </section>
                <section>
                    <HSection text="V. Experimental Results" />
                </section>
                <section>
                    <HSection text="VI. System Demonstration" />
                </section>
                <section>
                    <HSection text="VII. Conclusion and Future Work" />
                </section>
                <VSection>
                    <h2>Individual Contribution</h2>
                </VSection>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
