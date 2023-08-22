<script setup>
import { loadReveal } from "@js/slide.js";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import videoUrl from "@images/July6/demo-video.mp4";

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
            </div>
        </div>
    </div>
</template>
