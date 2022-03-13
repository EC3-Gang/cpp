import{r as a,o as r,c as t,a as s,b as l,w as c,F as i,e as n,d as e}from"./app.c1b471cd.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";const h={},b=s("h1",{id:"binary-search",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#binary-search","aria-hidden":"true"},"#"),n(" Binary Search")],-1),d=s("h2",{id:"binary-search-explained",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#binary-search-explained","aria-hidden":"true"},"#"),n(" Binary Search Explained")],-1),m=s("p",null,"Binary Search is a searching algorithm used in a sorted array by repeatedly dividing the search interval in half.",-1),u=s("p",null,[n("The idea of binary search is to use the information that the array is sorted and reduce the time complexity to "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"script"},"O"),s("mo",{stretchy:"false"},"("),s("mi",null,"log"),s("mo",null,"\u2061"),s("mi",null,"n"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"\\mathcal{O}(\\log{n})")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathcal",style:{"margin-right":"0.02778em"}},"O"),s("span",{class:"mopen"},"("),s("span",{class:"mop"},[n("lo"),s("span",{style:{"margin-right":"0.01389em"}},"g")]),s("span",{class:"mspace",style:{"margin-right":"0.1667em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"n")]),s("span",{class:"mclose"},")")])])]),n(".")],-1),g=s("p",null,"The basic steps to perform Binary Search are:",-1),f=s("ol",null,[s("li",null,"Begin with an interval covering the whole array."),s("li",null,"If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half."),s("li",null,"Otherwise, narrow it to the upper half."),s("li",null,"Go back to Step 2 until the value is found or the interval is empty.")],-1),_=s("p",null,[s("img",{src:"https://www.geeksforgeeks.org/wp-content/uploads/Binary-Search.png",alt:"binary search"}),s("em",null,"Image from GeeksforGeeks")],-1),w=s("h2",{id:"implementation",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#implementation","aria-hidden":"true"},"#"),n(" Implementation")],-1),A=n("There's... actually a built-in function defined in header "),x=s("code",null,"<algorithm>",-1),B=n(" ("),v=s("code",null,"std::binary_search",-1),k=n("). There's really no need to write your own. You can read more about it "),D={href:"https://en.cppreference.com/w/cpp/algorithm/binary_search",target:"_blank",rel:"noopener noreferrer"},S=n("here"),E=n("."),I=s("p",null,"Ok. I get it. You just feel restless and geeky and want to write your own Binary Search function.",-1),T={class:"custom-container details"},C=e(`<summary>Code</summary><p>Here you go nerds:</p><h3 id="iteration-method" tabindex="-1"><a class="header-anchor" href="#iteration-method" aria-hidden="true">#</a> Iteration method</h3><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#586E75;font-style:italic;">// Binary Search in C++</span></span>
<span class="line"></span>
<span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">binarySearch</span><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> array[], </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> x, </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> low, </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> high) {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">  // Repeat until the pointers low and high meet each other</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">while</span><span style="color:#839496;"> (low </span><span style="color:#859900;">&lt;=</span><span style="color:#839496;"> high) {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> mid </span><span style="color:#859900;">=</span><span style="color:#839496;"> low </span><span style="color:#859900;">+</span><span style="color:#839496;"> (high </span><span style="color:#859900;">-</span><span style="color:#839496;"> low) </span><span style="color:#859900;">/</span><span style="color:#839496;"> </span><span style="color:#D33682;">2</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">array</span><span style="color:#839496;">[mid] </span><span style="color:#859900;">==</span><span style="color:#839496;"> x)</span></span>
<span class="line"><span style="color:#839496;">      </span><span style="color:#859900;">return</span><span style="color:#839496;"> mid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">array</span><span style="color:#839496;">[mid] </span><span style="color:#859900;">&lt;</span><span style="color:#839496;"> x)</span></span>
<span class="line"><span style="color:#839496;">      low </span><span style="color:#859900;">=</span><span style="color:#839496;"> mid </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">else</span></span>
<span class="line"><span style="color:#839496;">      high </span><span style="color:#859900;">=</span><span style="color:#839496;"> mid </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#859900;">-</span><span style="color:#D33682;">1</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="recursive-method" tabindex="-1"><a class="header-anchor" href="#recursive-method" aria-hidden="true">#</a> Recursive method</h3>`,5),L=n("This uses recursive functions, so you might want to go take a look at "),O=n("this"),R=n("."),N=e(`<p>Recursion is basically running a code again and again until you get the desired results. For example:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;bits/stdc++.h&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">recur</span><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> n,</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> peaches)</span></span>
<span class="line"><span style="color:#839496;">{</span></span>
<span class="line"><span style="color:#839496;">	</span><span style="color:#859900;">if</span><span style="color:#839496;">(n</span><span style="color:#859900;">==</span><span style="color:#D33682;">0</span><span style="color:#839496;">) </span><span style="color:#859900;">return</span><span style="color:#839496;"> peaches;</span></span>
<span class="line"><span style="color:#839496;">	peaches</span><span style="color:#859900;">=</span><span style="color:#839496;">(peaches</span><span style="color:#859900;">+</span><span style="color:#D33682;">1</span><span style="color:#839496;">)</span><span style="color:#859900;">*</span><span style="color:#D33682;">2</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">	</span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">recur</span><span style="color:#839496;">(n</span><span style="color:#859900;">-</span><span style="color:#D33682;">1</span><span style="color:#839496;">,peaches);</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">()</span></span>
<span class="line"><span style="color:#839496;">{</span></span>
<span class="line"><span style="color:#839496;">	</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> peaches</span><span style="color:#859900;">=</span><span style="color:#D33682;">1</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">	</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> n;</span></span>
<span class="line"><span style="color:#839496;">	cin</span><span style="color:#859900;">&gt;&gt;</span><span style="color:#839496;">n;</span></span>
<span class="line"><span style="color:#839496;">	cout</span><span style="color:#859900;">&lt;&lt;</span><span style="color:#268BD2;">recur</span><span style="color:#839496;">(n,peaches);</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>This is a recursive binary search algorithm</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">binarySearch</span><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> array[], </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> x, </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> low, </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> high) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (high </span><span style="color:#859900;">&gt;=</span><span style="color:#839496;"> low) {</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> mid </span><span style="color:#859900;">=</span><span style="color:#839496;"> low </span><span style="color:#859900;">+</span><span style="color:#839496;"> (high </span><span style="color:#859900;">-</span><span style="color:#839496;"> low) </span><span style="color:#859900;">/</span><span style="color:#839496;"> </span><span style="color:#D33682;">2</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    // If found at mid, then return it</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">array</span><span style="color:#839496;">[mid] </span><span style="color:#859900;">==</span><span style="color:#839496;"> x)</span></span>
<span class="line"><span style="color:#839496;">      </span><span style="color:#859900;">return</span><span style="color:#839496;"> mid;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    // Search the left half</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">array</span><span style="color:#839496;">[mid] </span><span style="color:#859900;">&gt;</span><span style="color:#839496;"> x)</span></span>
<span class="line"><span style="color:#839496;">      </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">binarySearch</span><span style="color:#839496;">(array, x, low, mid </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#586E75;font-style:italic;">    // Search the right half</span></span>
<span class="line"><span style="color:#839496;">    </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">binarySearch</span><span style="color:#839496;">(array, x, mid </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">, high);</span></span>
<span class="line"><span style="color:#839496;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#859900;">-</span><span style="color:#D33682;">1</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,4);function V(F,G){const p=a("ExternalLinkIcon"),o=a("RouterLink");return r(),t(i,null,[b,d,m,u,g,f,_,w,s("p",null,[A,x,B,v,k,s("a",D,[S,l(p)]),E]),I,s("details",T,[C,s("p",null,[L,l(o,{to:"/guide/more-adv/rf.html"},{default:c(()=>[O]),_:1}),R]),N])],64)}var j=y(h,[["render",V]]);export{j as default};