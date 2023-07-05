<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";

import imgHMER from "@images/June8/hmer.jpg";
import imgDemo1 from "@images/June15/web-demo1.png";
import imgDemo2 from "@images/June15/web-demo2.jpg";
import imgSked from "@images/June29/schedule.png";
import imgExp4 from "@images/June29/Exp3n4-Acc.png";

import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import videoUrl from "@images/July6/demo-video.mp4";

// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/July6/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
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
                <Cover date="July 6" />
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
                </section>
                <section>
                    <HSection text="II. Our Current Model and Experiments" />
                    <VSection>
                        <h2>Overview Architecture</h2>
                        <div class="grid grid-cols-2">
                            <ul>
                                <li>
                                    Encoder
                                    <ul>
                                        <li>
                                            DenseNet: 3 dense blocks. Each block
                                            has 16 bottleneck layers.
                                        </li>
                                        <li>
                                            Pyramid Pooling Module (from
                                            PSPNet): Using 3-level pyramid (1,
                                            2, and 4), the pooling kernels cover
                                            the whole, half of, and quarter of
                                            the image.
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    Transformer Decoder
                                    <ul>
                                        <li>
                                            Decoder self attention: Query, key,
                                            and value are output embeddeding.
                                        </li>
                                        <li>
                                            Encoder-decoder attention: Query is
                                            the output of decoder self
                                            attention. Key and value are the
                                            output of encoder.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <Image :src="im['model']" class="w-7/12" />
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Experiments</h2>
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
                </section>
                <section>
                    <HSection text="III. Prototype Improvement" />
                    <VSection>
                        <h2>Improvement</h2>
                        <ul>
                            <li>
                                Add a dropdown list, allowing user to select
                                different models
                            </li>
                            <li>
                                Add a raw LaTeX column, allowing user to copy
                                raw LaTeX sequence
                            </li>
                        </ul>
                        <Image :src="im['demo']" class="w-2/3" />
                    </VSection>
                    <VSection>
                        <h2>Demo Video</h2>
                        <div class="flex justify-center">
                            <VideoPlayer
                                :src="videoDemo"
                                controls
                                loop
                                :width="1100"
                                class="w-full"
                            />
                        </div>
                    </VSection>
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
