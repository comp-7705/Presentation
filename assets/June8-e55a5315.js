import{l as t,c as e,o as n,b as a}from"./index-e24305ad.js";const i={class:"w-screen h-screen"},o=a(`<div class="reveal"><div class="slides"><section data-markdown><textarea data-template>
                        ### Handwritten Mathematical Expression Recognition based on Encoder-decoder Neural Network
                        
                        #### Status Presentation
                        
                        ##### June 8th
                    </textarea></section><section><section>I. Introduction</section><section data-markdown><textarea data-template>
                            HMER is the process of automatically identifying and extracting mathematical expressions from handwritten input.
                            &lt;img src=&quot;/src/assets/images/hmer.jpg&quot; alt=&quot;hmer&quot; style=&quot;zoom:60%; margin:0 auto&quot; /&gt;
                        </textarea></section><section> The extracted mathematical expressions will be converted into LaTeX format, which facilitates computer processing. <code> \\begin{align} y &amp;= (x+1)^2 \\\\ &amp;= x^2+2x+1 \\end{align} </code> ↓ <pre style="width:40%;"><code data-trim data-noescape>
                                    \\begin{align}
                                    y &amp;= (x+1)^2 \\\\
                                      &amp;= x^2+2x+1
                                    \\end{align}
                        </code></pre></section><section data-markdown><textarea data-template>
                            ### Workflow
                            * Preprocessing
                            * Symbol Segmentation
                            * Symbol Classification
                            * Structural Analysis
                            &lt;img src=&quot;/src/assets/images/tradition.png&quot; alt=&quot;workflow&quot; style=&quot;margin:0 auto&quot; /&gt;
                        </textarea></section><section data-markdown><textarea data-template>
                            ### Comparison with Other Recognition Methods
                            1. Optical Character Recognition (OCR)
                                * mainly used for **digitizing printed text**
                            2. Intelligent Character Recognition (ICR)
                                * used for recognizing structured handwriting such as **tables and forms**
                            3. Handwritten Text Recognition (HTR)
                                * aims to recognize **handwritten text** while handwritten formula recognition requires the recognition of **mathematical symbols and structures**
                        </textarea></section></section><section><section>II. Significance</section><section data-markdown><textarea data-template>
                            ### Education and Research
                            * Editing formulas on the computer was a challenging task,thus save time for researchers
                            * Automatically grade handwritten mathematical assignments
                            * Interactive online courses that allow students to enter handwritten formulas and receive immediate feedback
                        </textarea></section><section data-markdown><textarea data-template>
                            ### Industry and Business
                            * Digitize hand-drawn diagrams and engineering sketches
                            * Digitize handwritten financial documents in accounting
                        </textarea></section><section data-markdown><textarea data-template>
                            ### Overall Advantages
                            1. Increased Efficiency and Productivity
                            2. Improved Accuracy and Precision
                            3. Enhanced Accessibility and Usability
                        </textarea></section></section><section><section>III. Principal</section></section><section>End</section></div></div>`,1),s=[o],m={__name:"June8",setup(r){return t(),(c,d)=>(n(),e("div",i,s))}};export{m as default};
