<script setup>
import { loadReveal, gallery, Week1, Week2, Week3 } from "@js/slide.js";
import imgSked from "@images/June29/schedule.png";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import videoUrl from "@images/July6/demo-video.mp4";

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
                    <Week1 />
                    <Week2 />
                    <Week3 />
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
                                :width="1200"
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
