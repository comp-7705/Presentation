<script setup>
import imgDemo1 from "@images/June15/web-demo1.png";
import imgDemo2 from "@images/June15/web-demo2.jpg";
</script>

<template>
    <VSection>
        <h2>Recap of 2nd Week</h2>
        <ul>
            <li>
                Failure Case Analysis
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
</template>
