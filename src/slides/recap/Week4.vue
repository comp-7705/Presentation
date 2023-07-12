<script setup>
import imgModel from "@images/July6/model.png";
import imgDemo from "@images/July6/demo.png";
</script>

<template>
    <VSection>
        <h2>Recap of 4th Week</h2>
        <div class="grid grid-cols-2">
            <ul>
                <li>
                    Our model architecture:
                    <ul>
                        <li>Encoder: DenseNet & Pyramid Pooling Module</li>
                        <li>Decoder: Transformer decoder</li>
                    </ul>
                </li>
                <li>
                    Validation accuracy is increased to
                    <span class="red-bold">0.61</span>.
                </li>
                <li>
                    Prototype improvement:
                    <Image :src="imgDemo" class="w-full" />
                </li>
            </ul>
            <Image :src="imgModel" class="w-7/12" />
        </div>
    </VSection>
</template>
