<script setup>
import { loadReveal, Cover, HSection, VSection, Image } from "@js/slide.js";
import { gallery } from "@js/utils.js";
// Import all images from the Home folder, only relative paths here, issue of vite
const imagePaths = Object.values(
    import.meta.glob("../assets/images/June15/*.{png,jpg,jpeg,PNG,JPEG,svg}", {
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
                <Cover date="June 15" />
                <section>
                    <HSection text="I. Failure Case" />
                    <VSection>
                        <h2>Impact of label length</h2>
                        <p>
                            Failure cases analysis have been conducted on BTTR, SAN, and CoMER. 
                            This table provides information on the number of failure cases for each model, 
                            along with the top 5 label lengths and their respective counts. <br>
                            The analysis revealed that these three models are particularly susceptible 
                            to failures when the label length is either <b>4, 14, or 16</b>.
                        </p>
                        <Image :src="im['labelLength']" alt="labelLength" class="w-4/5" />
                    </VSection>
                    <VSection>
                        <h2>Failures based on symbol</h2>
                        <p>
                            These failures can be categorized into two types based on symbol and structure.<br>
                        </p>
                        <ul>
                            <li>Symbol</li>
                            In example 1, all models incorrectly recognized the uppercase $X$ as a lowercase $x$, 
                            likely due to ambiguity in the image itself. In example 2, 
                            all models mistook the symbol $\exists$ for the number $7$, 
                            since $\exists$ is one of the five least frequently occurring tokens. 
                        </ul>
                        
                        <Image :src="im['symbol']" alt="symbol" class="w-4/12" />
                        <Image :src="im['failSymbol']" alt="failSymbol" class="w-3/5" />
                    </VSection>
                    <VSection>
                        <h2>Failures based on structure</h2>
                        <ul>
                            <li>Structure</li>
                            In example 3, the models BTTR and SAN failed to detect the superscript of $y^{b+1}$. 
                            Similarly, in example 4, BTTR could not include $(n-1)$ within the square root 
                            while SAN produced a duplicated value of $>0$. 
                            On the other hand, CoMER demonstrated successful recognition of these two examples.
                        </ul>
                        <Image :src="im['struct']" alt="struct" class="w-5/12" />
                        <Image :src="im['failStruct']" alt="failStruct" class="w-4/5" />
                    </VSection>
                </section>
                <section>
                    <HSection text="II. Website Demo"/>
                    <VSection>
                        <h2>DEMO</h2>
                        <div class="grid grid-cols-2">
                            <div>
                                <ul>
                                    <li>Enter formulas by drawing</li>
                                </ul>
                                <img :src="im['demo']" class="w-full" />
                            </div>
                            <div>
                                <ul>
                                    <li>Enter formulas by images</li>
                                </ul>
                                <img :src="im['demo2']" class="w-full" />
                            </div>
                        </div>
                    </VSection>
                </section>
                <section>
                    <HSection text="III. Schedule" />
                    <VSection>
                        <h2>Milestones</h2>
                        <Image :src="im['detailSche']" alt="schedule" class="w-5/12" />
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
