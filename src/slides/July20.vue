<script setup>
import { loadReveal, gallery, Week1, Week2, Week3 } from "@js/slide.js";
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";
import videoUrl from "@images/July6/demo-video.mp4";

const June8 = gallery(
    Object.values(
        import.meta.glob(
            "../assets/images/June8/*.{png,jpg,jpeg,PNG,JPEG,svg}",
            {
                eager: true,
                as: "url",
            }
        )
    )
);
const July6 = gallery(
    Object.values(
        import.meta.glob(
            "../assets/images/July6/*.{png,jpg,jpeg,PNG,JPEG,svg}",
            {
                eager: true,
                as: "url",
            }
        )
    )
);
const July13 = gallery(
    Object.values(
        import.meta.glob(
            "../assets/images/July13/*.{png,jpg,jpeg,PNG,JPEG,svg}",
            {
                eager: true,
                as: "url",
            }
        )
    )
);
const im = gallery(
    Object.values(
        import.meta.glob(
            "../assets/images/July20/*.{png,jpg,jpeg,PNG,JPEG,svg}",
            {
                eager: true,
                as: "url",
            }
        )
    )
);
loadReveal();
let videoDemo = videoUrl;
if (import.meta.env.DEV) {
    videoDemo = videoDemo.replace("@fs/", ""); // remove @fs
}
</script>

<template>
    <div class="w-screen h-screen">
        <div class="reveal">
            <div class="slides">
                <Cover date="July 20" />
                <section>
                    <HSection text="I. 1st Week and 2nd Week" />
                    <Week1 />
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
                            <table
                                class="table-auto text-xl border-2 border-slate-300"
                            >
                                <thead>
                                    <tr>
                                        <th
                                            class="border-2 border-slate-300"
                                        ></th>
                                        <th class="border-2 border-slate-300">
                                            Number of Images
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="border-2 border-slate-300">
                                            Training Set
                                        </td>
                                        <td class="border-2 border-slate-300">
                                            8835
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-2 border-slate-300">
                                            Test 2014
                                        </td>
                                        <td class="border-2 border-slate-300">
                                            986
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-2 border-slate-300">
                                            Test 2016
                                        </td>
                                        <td class="border-2 border-slate-300">
                                            1147
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-2 border-slate-300">
                                            Test 2019
                                        </td>
                                        <td class="border-2 border-slate-300">
                                            1199
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="border-2 border-slate-300">
                                            Total Test Set
                                        </td>
                                        <td class="border-2 border-slate-300">
                                            3332
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <Image
                            :src="June8['dataset']"
                            alt="dataset"
                            class="w-3/4"
                        />
                    </VSection>
                    <VSection>
                        <h2>Data Distribution</h2>
                        <div class="grid grid-cols-2">
                            <Image
                                :src="June8['token-distri']"
                                class="inline w-2/3"
                            />
                            <Image
                                :src="June8['train-len-distri']"
                                class="inline w-2/3"
                            />
                            <Image
                                :src="June8['train-h-distri']"
                                class="inline w-2/3"
                            />
                            <Image
                                :src="June8['train-w-distri']"
                                class="inline w-2/3"
                            />
                        </div>
                    </VSection>
                    <VSection>
                        <h2>Expression Recognition Rate Comparison</h2>
                        <ul>
                            <li>
                                (Number1, Number2): Number1 is taken from the
                                papers. Number2 is our reproduced result. Single
                                value indicates that Number1 == Number2.
                            </li>
                            <li>
                                ≤ 1 error and ≤ 2 error represent expression
                                recognition rate when 1 to 2 structural or
                                symbol errors can be tolerated.
                            </li>
                        </ul>
                        <Image
                            class="w-3/4"
                            :src="June8['model-comparison']"
                            alt="model comparison"
                        />
                    </VSection>
                    <Week2 />
                </section>
                <section>
                    <HSection text="II. 3rd Week and 4th Week" />
                    <Week3 />
                    <VSection>
                        <h2>Recap of 4th Week</h2>
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
                            <Image :src="July6['model']" class="w-7/12" />
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
                                            :src="July6['exp1-epoch']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Training loss
                                        <img
                                            :src="July6['exp1-train-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation loss
                                        <img
                                            :src="July6['exp1-val-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation accuracy:
                                        <span class="red-bold">0.60</span>
                                        <img
                                            :src="July6['exp1-val-acc']"
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
                                            :src="July6['exp2-epoch']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Training loss
                                        <img
                                            :src="July6['exp2-train-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation loss
                                        <img
                                            :src="July6['exp2-val-loss']"
                                            class="w-full"
                                        />
                                    </div>
                                    <div>
                                        Validation accuracy:
                                        <span class="red-bold">0.61</span>
                                        <img
                                            :src="July6['exp2-val-acc']"
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
                </section>
                <section>
                    <HSection text="III. 5th Week and Last Week" />
                    <VSection>
                        <h2>Object Counting</h2>
                        <ul>
                            <li>
                                Regression-based methods: To learn counting by
                                regressing a
                                <span class="red-bold">density map</span>, and
                                the predicted count equals the integration of
                                the density map.
                            </li>
                            <li>
                                Multi-scale counting model(MSCM) is designed
                                based on regression-based method, used to
                                predict the number of each symbol class.
                            </li>
                        </ul>
                        <Image :src="July13['CAN']" class="w-2/3" />
                        <span class="text-xl italic">
                            Li, B., Yuan, Y., Liang, D., Liu, X., Ji, Z., Bai,
                            J., ... & Bai, X. (2022, October). When counting
                            meets HMER: counting-aware network for handwritten
                            mathematical expression recognition. In European
                            Conference on Computer Vision (pp. 197-214). Cham:
                            Springer Nature Switzerland.
                        </span>
                    </VSection>
                    <VSection>
                        <h2>Loss Function</h2>
                        <ul>
                            <li>
                                The updated loss function consists of two parts:
                                $$ L=L_{cls}+L_{counting} $$ where $L=L_{cls}$
                                is a common-used cross entropy classification
                                loss of the predicted probability with respect
                                to its ground-truth.
                            </li>
                            <li>
                                Denoting the counting ground truth of each
                                symbol class as $\hat{V}$: $$ L_{couting} =
                                \text{smooth}_{L1}(V, \hat{V}) $$
                            </li>
                            <li>
                                For batch size $N$, Smooth L1 loss is defined:
                                $$ \ell(x, y) = L = \{l_1, ..., l_N\}^T $$ $$
                                l_n = \begin{cases} 0.5 (x_n - y_n)^2, &
                                \text{if } |x_n - y_n| \le 1.0 \\ |x_n - y_n| -
                                0.5, & \text{otherwise } \end{cases} $$
                            </li>
                        </ul>
                    </VSection>
                    <VSection>
                        <h2>Last Week</h2>
                        <ul>
                            <li>Update project webpage</li>
                            <Image :src="im['webpage']" class="w-5/6" />
                        </ul>
                    </VSection>
                    <VSection>
                        <h2>Write Final Report</h2>
                        <ul>
                            <li>LaTeX format on Overleaf</li>
                        </ul>
                        <Image :src="im['final-report']" class="w-5/6" />
                    </VSection>
                </section>
                <HSection text="Thank you!" />
            </div>
        </div>
    </div>
</template>
