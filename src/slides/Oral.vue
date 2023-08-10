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
