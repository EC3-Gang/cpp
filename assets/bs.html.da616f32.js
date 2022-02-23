import{r as a,o as r,c as t,a as s,b as l,w as c,F as i,e as n,d as e}from"./app.93c5d574.js";import{_ as B}from"./plugin-vue_export-helper.21dcd24c.js";const y={},h=s("h1",{id:"binary-search",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#binary-search","aria-hidden":"true"},"#"),n(" Binary Search")],-1),m=s("h2",{id:"binary-search-explained",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#binary-search-explained","aria-hidden":"true"},"#"),n(" Binary Search Explained")],-1),d=s("p",null,"Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.",-1),u=s("p",null,[n("The idea of binary search is to use the information that the array is sorted and reduce the time complexity to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{O}(\\log{n})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n")]),s("span",{class:"mclose"},")")])])]),n(".")],-1),b=s("p",null,"The basic steps to perform Binary Search are:",-1),D=s("ol",null,[s("li",null,"Begin with an interval covering the whole array."),s("li",null,"If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half."),s("li",null,"Otherwise, narrow it to the upper half."),s("li",null,"Go back to Step 2 until the value is found or the interval is empty.")],-1),F=s("p",null,[s("img",{src:"https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png",alt:"binary search"}),s("em",null,"Image from GeeksforGeeks")],-1),A=s("h2",{id:"implementation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#implementation","aria-hidden":"true"},"#"),n(" Implementation")],-1),C=n("There's... actually a built-in function defined in header "),_=s("code",null,"<algorithm>",-1),f=n(" ("),g=s("code",null,"std::binary_search",-1),w=n("). There's really no need to write your own. You can read more about it "),x={href:"https://en.cppreference.com/w/cpp/algorithm/binary_search",target:"_blank",rel:"noopener noreferrer"},v=n("here"),E=n("."),k=s("p",null,"Ok. I get it. You just feel restless and geeky and want to write your own Binary Search function.",-1),S={class:"custom-container details"},I=e(`<summary>Code</summary><p>Here you go nerds:</p><h3 id="iteration-method" tabindex="-1"><a class="header-anchor" href="#iteration-method" aria-hidden="true">#</a> Iteration method</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#7F848E;font-style:italic;">// Binary Search in C++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">#include</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#C678DD;">using</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">namespace</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">std</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binarySearch</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">array</span><span style="color:#ABB2BF;">[], </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">low</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">high</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // Repeat until the pointers low and high meet each other</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">while</span><span style="color:#ABB2BF;"> (low </span><span style="color:#C678DD;">&lt;=</span><span style="color:#ABB2BF;"> high) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> low </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> (high </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> low) </span><span style="color:#C678DD;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">array</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> mid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">array</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">&lt;</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#ABB2BF;">      low </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">else</span></span>
<span class="line"><span style="color:#ABB2BF;">      high </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="recursive-method" tabindex="-1"><a class="header-anchor" href="#recursive-method" aria-hidden="true">#</a> Recursive method</h3>`,5),T=n("This uses recursive functions, so you might want to go take a look at "),L=n("this"),O=n("."),N=e(`<div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#282c34;"><code><span class="line"><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binarySearch</span><span style="color:#ABB2BF;">(</span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">array</span><span style="color:#ABB2BF;">[], </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">low</span><span style="color:#ABB2BF;">, </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;font-style:italic;">high</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (high </span><span style="color:#C678DD;">&gt;=</span><span style="color:#ABB2BF;"> low) {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">int</span><span style="color:#ABB2BF;"> mid </span><span style="color:#C678DD;">=</span><span style="color:#ABB2BF;"> low </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> (high </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> low) </span><span style="color:#C678DD;">/</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // If found at mid, then return it</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">array</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">==</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> mid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // Search the left half</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">if</span><span style="color:#ABB2BF;"> (</span><span style="color:#E5C07B;">array</span><span style="color:#ABB2BF;">[mid] </span><span style="color:#C678DD;">&gt;</span><span style="color:#ABB2BF;"> x)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binarySearch</span><span style="color:#ABB2BF;">(array, x, low, mid </span><span style="color:#C678DD;">-</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    // Search the right half</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">binarySearch</span><span style="color:#ABB2BF;">(array, x, mid </span><span style="color:#C678DD;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, high);</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#C678DD;">-</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1);function R(V,G){const p=a("ExternalLinkIcon"),o=a("RouterLink");return r(),t(i,null,[h,m,d,u,b,D,F,A,s("p",null,[C,_,f,g,w,s("a",x,[v,l(p)]),E]),k,s("details",S,[I,s("p",null,[T,l(o,{to:"/guide/more-adv/rf.html"},{default:c(()=>[L]),_:1}),O]),N])],64)}var j=B(y,[["render",R]]);export{j as default};