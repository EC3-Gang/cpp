import{o as n,c as l,F as p,a as s,e as a,d as e}from"./app.93c5d574.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";const o={},r=s("h1",{id:"bubble-sort",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bubble-sort","aria-hidden":"true"},"#"),a(" Bubble Sort")],-1),c=s("p",null,"Bubble Sort is a sorting algorithm that compares two adjacent elements and swaps them until they are in the intended order.",-1),B=s("p",null,"Just like the movement of air bubbles in the water that rise up to the surface, each element of the array move to the end in each iteration. Therefore, it is called bubble sort. It is one of the simplest sorting algorithms.",-1),i=s("table",null,[s("thead",null,[s("tr",null,[s("th",null,"Cases"),s("th",null,"Time")])]),s("tbody",null,[s("tr",null,[s("td",null,"Worst-Case Time Complexity"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{O}(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(". Worst case occurs when array is reverse sorted.")])]),s("tr",null,[s("td",null,"Best-Case Time Complexity"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("msup",null,[s("mi",null,"n"),s("mn",null,"2")]),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{O}(n^2)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1.0641em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mclose"},")")])])]),a(". Best case occurs when array is already sorted.")])]),s("tr",null,[s("td",null,"Auxiliary Space"),s("td",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mn",null,"1"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{O}(1)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"1"),s("span",{class:"mclose"},")")])])])])]),s("tr",null,[s("td",null,"Boundary Cases"),s("td",null,"Bubble sort takes minimum time (order of n) when elements are already sorted.")])])],-1),y=e(`<table><thead><tr><th>Property</th><th>\u2705/\u274C</th></tr></thead><tbody><tr><td>Sorting In Place</td><td>\u2705</td></tr><tr><td>Stable</td><td>\u2705</td></tr></tbody></table><h2 id="implementation" tabindex="-1"><a class="header-anchor" href="#implementation" aria-hidden="true">#</a> Implementation</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#7F848E;font-style:italic;">/* Code for bubble sort */</span></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">swap</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">xp</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#E06C75;font-style:italic;">yp</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> temp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">xp;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">xp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">yp;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">*</span><span style="color:#ABB2BF;">yp </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> temp;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// An optimized version of Bubble Sort</span></span>
<span class="line"><span style="color:#C678DD;">void</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">bubbleSort</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">arr</span><span style="color:#ABB2BF;">[], </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">n</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> i, j;</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#C678DD;">bool</span><span style="color:#ABB2BF;"> swapped;</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (i </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; i </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; i</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">     swapped </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">for</span><span style="color:#ABB2BF;"> (j </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">; j </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> n </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> i </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">; j</span><span style="color:#C678DD;">++</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">[j] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">[j</span><span style="color:#C678DD;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]) {</span></span>
<span class="line"><span style="color:#ABB2BF;">           </span><span style="color:#61AFEF;">swap</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">&amp;</span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">[j], </span><span style="color:#C678DD;">&amp;</span><span style="color:#E5C07B;">arr</span><span style="color:#ABB2BF;">[j</span><span style="color:#C678DD;">+</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">]);</span></span>
<span class="line"><span style="color:#ABB2BF;">           swapped </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">true</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">        }</span></span>
<span class="line"><span style="color:#ABB2BF;">     }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">     // IF no two elements were swapped by inner loop, then break</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (swapped </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">break</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">   }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div>`,3);function m(h,u){return n(),l(p,null,[r,c,B,i,y],64)}var D=t(o,[["render",m]]);export{D as default};