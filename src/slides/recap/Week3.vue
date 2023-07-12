<script setup>
import imgExp4 from "@images/June29/Exp3n4-Acc.png";
</script>

<template>
    <VSection>
        <h2>Recap of 3rd Week</h2>
        <ul>
            <li>
                Encoder: ResNet, DenseNet, Feature Pyramid Network (FPN), and
                Pyramid Scene Parsing Network (PSPNet).
            </li>
            <li>Decoder: GRU, and Attention Mechanism.</li>
            <li>
                Experimental results are not desirable. The validation accuracy
                was only
                <span class="red-bold">0.33</span>.
            </li>
        </ul>
        <Image :src="imgExp4" class="w-2/3" />
    </VSection>
</template>
