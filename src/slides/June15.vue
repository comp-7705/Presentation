<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";
import imgHMER from "@images/June8/hmer.jpg";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import videoUrl from "@images/June15/web-demo-video.mp4";

// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/June15/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
        eager: true,
        as: "url",
    })
);
const im = gallery(imagePaths);

let videoDemo = videoUrl; // /Presentation/@fs/src/assets/images/June15/web-demo-video.mp4
if (import.meta.env.DEV) {
    videoDemo = videoDemo.replace("@fs/", ""); // remove @fs
}
// console.log(videoDemo);
loadReveal();
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <Cover date="June 15" />
                <VSection>
                    <h2>Recap</h2>
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
                    <Image :src="imgHMER" class="w-2/5" />
                </VSection>
                <section>
                    <HSection text="I. Failure Case Analysis" />
                    <VSection>
                        <h2>Label Length Distribution</h2>
                        <ul>
                            <li>Common failure cases of BTTR and SAN</li>
                        </ul>
                        <Image :src="im['common-distri']" class="w-3/5" />
                    </VSection>
                    <VSection>
                        <aside class="notes">
                            Failure cases analysis have been conducted on BTTR,
                            SAN, and CoMER. The analysis revealed that.
                        </aside>
                        <h2>Impact of Label Length</h2>
                        <ul>
                            <li>
                                The number of failure cases for each model,
                                along with the top 5 label lengths and their
                                respective counts.
                            </li>
                            <li>
                                These three models are particularly susceptible
                                to failures when the label length is either
                                <span class="text-red-600 font-bold"
                                    >4, 14, or 16</span
                                >.
                            </li>
                        </ul>
                        <Image
                            :src="im['fail-label-len']"
                            class="pt-10 w-full"
                        />
                    </VSection>
                    <VSection>
                        <aside class="notes">
                            These failures can be categorized into two types
                            based on symbol and structure. In example 1, all
                            models incorrectly recognized the uppercase $X$ as a
                            lowercase $x$, likely due to ambiguity in the image
                            itself. In example 2, all models mistook the symbol
                            $\exists$ for the number $7$, since $\exists$ is one
                            of the five least frequently occurring tokens.
                        </aside>
                        <h2>Symbol Recognition Failures</h2>
                        <Image :src="im['symbol-case']" class="w-3/5" />
                        <Image :src="im['symbol-tab']" class="w-full" />
                    </VSection>
                    <VSection>
                        <aside class="notes">
                            In example 3, the models BTTR and SAN failed to
                            detect the superscript of $y^{b+1}$. Similarly, in
                            example 4, BTTR could not include $(n-1)$ within the
                            square root while SAN produced a duplicated value of
                            $>0$. On the other hand, CoMER demonstrated
                            successful recognition of these two examples.
                        </aside>
                        <h2>Structure Recognition Failures</h2>
                        <Image :src="im['struct-case']" class="w-4/5" />
                        <Image :src="im['struct-tab']" class="w-full" />
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Prototype Demo" />
                    <VSection>
                        <aside class="notes">
                            Write on canvas. Support undo, redo.
                        </aside>
                        <h2>Enter Formulas By Handwritting</h2>
                        <Image :src="im['web-demo1']" class="w-full" />
                    </VSection>
                    <VSection>
                        <h2>Upload Images</h2>
                        <Image :src="im['web-demo2']" class="w-full" />
                    </VSection>
                    <VSection>
                        <h2>Video Demo</h2>
                        <div class="flex justify-center">
                            <VideoPlayer
                                :src="videoDemo"
                                controls
                                loop
                                autoplay="muted"
                                :width="900"
                                class="w-11/12"
                            />
                        </div>
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Schedule" />
                    <VSection>
                        <h2>Phase I</h2>
                        <ul>
                            <li>Data Collection & Pre-processing</li>
                        </ul>
                        <Image :src="im['phase1']" class="w-full" />
                    </VSection>
                    <VSection>
                        <h2>Phase II</h2>
                        <ul>
                            <li>Model Development & Evaluation</li>
                        </ul>
                        <Image :src="im['phase2']" class="w-full" />
                    </VSection>
                    <VSection>
                        <h2>Phase III</h2>
                        <ul>
                            <li>Continual Optimization and Model Deployment</li>
                        </ul>
                        <Image :src="im['phase3']" class="w-full" />
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
