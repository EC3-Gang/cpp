import{_ as h,r as d,o as _,c as m,a as s,d as a,w as n,b as t,e as i}from"./app.1e698665.js";const k={},f=i(`<h1 id="the-basics-of-the-basics-of-c" tabindex="-1"><a class="header-anchor" href="#the-basics-of-the-basics-of-c" aria-hidden="true">#</a> The basics of the basics of C++</h1><p>Ok, so essentially, these are the things you must take note of when starting out with <code>C++</code>. I will first cover the data types.</p><h2 id="the-structure-of-a-c-program" tabindex="-1"><a class="header-anchor" href="#the-structure-of-a-c-program" aria-hidden="true">#</a> The Structure of a C++ Program</h2><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is a basic C++ program which prints &quot;Hello World&quot; to the console.</p><p>It is made up of three essential parts:</p><ol><li><code>#include</code>: It includes the necessary header files for functions used in the program.</li><li><code>using namespace std</code>: Includes that standard library of functions.</li><li><code>int main() {}</code>: The main function, where all your code should go.</li></ol><p>Notice that we use <code>cout</code> for printing. The opposite of that, <code>cin &gt;&gt; variable</code>, is for receiving input to a variable, however that variable must be defined prior to the statement.</p><h2 id="data-types" tabindex="-1"><a class="header-anchor" href="#data-types" aria-hidden="true">#</a> Data Types</h2><h3 id="basic-data-types" tabindex="-1"><a class="header-anchor" href="#basic-data-types" aria-hidden="true">#</a> Basic Data Types</h3>`,10),g=s("thead",null,[s("tr",null,[s("th",null,"Data Type"),s("th",null,"Size (in bytes)"),s("th",null,"Stores"),s("th",null,"Example")])],-1),x=s("td",null,[s("code",null,"int")],-1),w={class:"katex"},b={class:"katex-mathml"},v=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])],-1),y={class:"katex"},M={class:"katex-mathml"},L=i('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2147483648</span></span></span>',1),T={class:"katex"},q={class:"katex-mathml"},z=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2147483647")])],-1),N={class:"katex"},I={class:"katex-mathml"},C=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12442")])],-1),D=s("td",null,[s("code",null,"float")],-1),O={class:"katex"},S={class:"katex-mathml"},E=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])],-1),F={class:"katex"},B={class:"katex-mathml"},V=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"7")])],-1),W={class:"katex"},A={class:"katex-mathml"},H=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5.63562")])],-1),P=s("td",null,[s("code",null,"double")],-1),R={class:"katex"},Y={class:"katex-mathml"},$=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8")])],-1),j={class:"katex"},G={class:"katex-mathml"},J=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"15")])],-1),K={class:"katex"},Q={class:"katex-mathml"},U=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"3.1415926535879732")])],-1),X=s("td",null,[s("code",null,"bool")],-1),Z={class:"katex"},ss={class:"katex-mathml"},as=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])],-1),ns=s("td",null,[s("code",null,"true"),t(" or "),s("code",null,"false"),t(" values")],-1),ts=s("td",null,[s("code",null,"true"),t(", "),s("code",null,"false")],-1),es=s("td",null,[s("code",null,"char")],-1),ls={class:"katex"},os={class:"katex-mathml"},cs=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])],-1),ps=s("td",null,"A single character",-1),is=s("td",null,[s("code",null,"'D'"),t(", "),s("code",null,"'$'")],-1),ds=s("tr",null,[s("td",null,[s("code",null,"string")]),s("td",null,"variable"),s("td",null,"Multi-character text"),s("td",null,[s("code",null,"'hi mom'")])],-1),us=i('<h3 id="data-type-modifiers" tabindex="-1"><a class="header-anchor" href="#data-type-modifiers" aria-hidden="true">#</a> Data Type Modifiers</h3><p>Numeric data types (<code>int</code> and <code>double</code>) can be modified with:</p><ul><li><code>short</code></li><li><code>long</code> (or even <code>long long</code>)</li><li><code>signed</code></li><li><code>unsigned</code></li></ul><p>which give a variety of ranges of the same numerical datatype.</p><p>Note that the default modified datatype is <code>int</code>.</p>',5),rs=s("thead",null,[s("tr",null,[s("th",null,"Modified Datatype"),s("th",null,"Size (in bytes)"),s("th",null,"Range")])],-1),hs=s("td",null,[s("code",null,"short")],-1),_s={class:"katex"},ms={class:"katex-mathml"},ks=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])],-1),fs={class:"katex"},gs={class:"katex-mathml"},xs=i('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">32768</span></span></span>',1),ws={class:"katex"},bs={class:"katex-mathml"},vs=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"32767")])],-1),ys=s("td",null,[s("code",null,"unsigned short")],-1),Ms={class:"katex"},Ls={class:"katex-mathml"},Ts=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2")])],-1),qs={class:"katex"},zs={class:"katex-mathml"},Ns=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])],-1),Is={class:"katex"},Cs={class:"katex-mathml"},Ds=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"65535")])],-1),Os=s("td",null,[s("code",null,"unsigned")],-1),Ss={class:"katex"},Es={class:"katex-mathml"},Fs=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])],-1),Bs={class:"katex"},Vs={class:"katex-mathml"},Ws=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])],-1),As={class:"katex"},Hs={class:"katex-mathml"},Ps=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4294967295")])],-1),Rs=s("td",null,[s("code",null,"long")],-1),Ys={class:"katex"},$s={class:"katex-mathml"},js=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])],-1),Gs={class:"katex"},Js={class:"katex-mathml"},Ks=i('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7278em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord">2147483648</span></span></span>',1),Qs={class:"katex"},Us={class:"katex-mathml"},Xs=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"2147483647")])],-1),Zs=s("td",null,[s("code",null,"unsigned long")],-1),sa={class:"katex"},aa={class:"katex-mathml"},na=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])],-1),ta={class:"katex"},ea={class:"katex-mathml"},la=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])],-1),oa={class:"katex"},ca={class:"katex-mathml"},pa=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4294967295")])],-1),ia=s("td",null,[s("code",null,"long long")],-1),da={class:"katex"},ua={class:"katex-mathml"},ra=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8")])],-1),ha={class:"katex"},_a={class:"katex-mathml"},ma=i('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span></span></span>',1),ka={class:"katex"},fa={class:"katex-mathml"},ga=i('<span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8974em;vertical-align:-0.0833em;"></span><span class="mord"><span class="mord">2</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">63</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span>',1),xa=s("td",null,[s("code",null,"unsigned long long")],-1),wa={class:"katex"},ba={class:"katex-mathml"},va=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"8")])],-1),ya={class:"katex"},Ma={class:"katex-mathml"},La=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"0")])],-1),Ta={class:"katex"},qa={class:"katex-mathml"},za=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"18446744073709551615")])],-1),Na=s("td",null,[s("code",null,"long double")],-1),Ia={class:"katex"},Ca={class:"katex-mathml"},Da=s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"12")])],-1),Oa=s("td",null,"-",-1),Sa=i(`<h2 id="control-flow" tabindex="-1"><a class="header-anchor" href="#control-flow" aria-hidden="true">#</a> Control Flow</h2><h3 id="if-statements" tabindex="-1"><a class="header-anchor" href="#if-statements" aria-hidden="true">#</a> If Statements</h3><p>For leaving decisions to your computer.</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> a<span class="token punctuation">;</span>
  cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;enter your age: &quot;</span><span class="token punctuation">;</span>
  cin <span class="token operator">&gt;&gt;</span> a<span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">18</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;access denied&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span> cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;have a drink!&quot;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice that the conditions are surrounded by <strong>parentheses</strong> and the following code to be executed is in curly braces.</p><p>If you know how programming works, you can also use <code>else if</code> for multiple conditions.</p><h4 id="logical-operators" tabindex="-1"><a class="header-anchor" href="#logical-operators" aria-hidden="true">#</a> Logical Operators</h4><table><thead><tr><th>Op.</th><th>Means</th><th>True Example</th><th>False Example</th></tr></thead><tbody><tr><td><code>&amp;&amp;</code></td><td>&quot;and&quot;</td><td><code>(5 &gt; 3 &amp;&amp; 2 &lt; 4)</code></td><td><code>(3 &gt; 5 &amp;&amp; 2 &lt; 4)</code></td></tr><tr><td><code>||</code></td><td>&quot;or&quot;</td><td><code>(&#39;s&#39; == &#39;s&#39; or &#39;t&#39; == &#39;u&#39;)</code></td><td><code>(&#39;s&#39; == &#39;t&#39; or &#39;t&#39; == &#39;u&#39;)</code></td></tr><tr><td><code>!</code></td><td>&quot;not&quot;</td><td><code>(!(5 &lt; 3))</code></td><td><code>(!(&#39;a&#39; == &#39;a&#39;))</code></td></tr></tbody></table><h4 id="comparison-operators" tabindex="-1"><a class="header-anchor" href="#comparison-operators" aria-hidden="true">#</a> Comparison Operators</h4><table><thead><tr><th>Op.</th><th>Means</th><th>True Example</th></tr></thead><tbody><tr><td><code>==</code></td><td>is equal to</td><td><code>(5 == 5)</code></td></tr><tr><td><code>!=</code></td><td>is not equal to</td><td><code>(5 != 3)</code></td></tr><tr><td><code>&gt;</code></td><td>is greater than</td><td><code>(5 &gt; 3)</code></td></tr><tr><td><code>&gt;=</code></td><td>is greater than or equal to</td><td><code>(5 &gt;= 5)</code></td></tr><tr><td><code>&lt;</code></td><td>is smaller than</td><td><code>(3 &lt; 5)</code></td></tr><tr><td><code>&lt;=</code></td><td>is smaller than or equal to</td><td><code>(5 &lt;= 5)</code></td></tr></tbody></table><h3 id="loops" tabindex="-1"><a class="header-anchor" href="#loops" aria-hidden="true">#</a> Loops</h3><h4 id="for-loop" tabindex="-1"><a class="header-anchor" href="#for-loop" aria-hidden="true">#</a> For Loop</h4><p>This is a bit complicated. There are 3 perimeters in a for loop: initialization, loop condition, and increment.</p><ol><li><p>Initialization: initialize whatever variables you want to use</p></li><li><p>Loop condition: loop as long as this is true</p></li><li><p>Increment: change variables that you initalized in step 1</p></li></ol><p>Note: any of these parts can be ommited</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">//  initialize, cond., inc./dec.</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="while-loop" tabindex="-1"><a class="header-anchor" href="#while-loop" aria-hidden="true">#</a> While Loop</h4><p>As long as (condition) is true, run the loop.</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// put condition in parens.</span>
    cout <span class="token operator">&lt;&lt;</span> i <span class="token operator">&lt;&lt;</span> <span class="token char">&#39; &#39;</span><span class="token punctuation">;</span>
    i<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="functions-or-subroutines-as-i-like-to-call-it" tabindex="-1"><a class="header-anchor" href="#functions-or-subroutines-as-i-like-to-call-it" aria-hidden="true">#</a> Functions (or subroutines, as I like to call it)</h2><p>There are different types of functions</p><ol><li>The int function This function returns a int</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>The void function This functions returns nothing lmao</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  cout<span class="token operator">&lt;&lt;</span>a<span class="token operator">+</span>b<span class="token operator">+</span>c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>The string function This returns a string</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>string <span class="token function">add</span><span class="token punctuation">(</span>string a<span class="token punctuation">,</span> string b<span class="token punctuation">,</span> string c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>The boolean function This function returns a boolean (true or false) You can do this:</li></ol><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">bool</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token operator">&gt;</span>c<span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Or this:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token keyword">int</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> c<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>a<span class="token operator">+</span>b<span class="token operator">&gt;</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice how in the first code, there is no &quot;else&quot; function to help return false. This is because after returning the desired value, it will stop the function. The return type of the function is always specified, followed by its parameters (with their specific types).</p>`,32);function Ea(Fa,Ba){const e=d("mn"),l=d("mrow"),o=d("annotation"),c=d("semantics"),p=d("math"),u=d("mo"),r=d("msup");return _(),m("div",null,[f,s("table",null,[g,s("tbody",null,[s("tr",null,[x,s("td",null,[s("span",w,[s("span",b,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4")]),_:1})]),_:1})]),_:1})]),v])]),s("td",null,[t("Numbers ("),s("span",y,[s("span",M,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(u,null,{default:n(()=>[t("−")]),_:1}),a(e,null,{default:n(()=>[t("2147483648")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("-2 147 483 648")]),_:1})]),_:1})]),_:1})]),L]),t(" to "),s("span",T,[s("span",q,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("2147483647")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("2 147 483 647")]),_:1})]),_:1})]),_:1})]),z]),t(")")]),s("td",null,[s("span",N,[s("span",I,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("12442")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("12 442")]),_:1})]),_:1})]),_:1})]),C])])]),s("tr",null,[D,s("td",null,[s("span",O,[s("span",S,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4")]),_:1})]),_:1})]),_:1})]),E])]),s("td",null,[t("Decimal numbers (up to "),s("span",F,[s("span",B,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("7")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("7")]),_:1})]),_:1})]),_:1})]),V]),t(" d.p.)")]),s("td",null,[s("span",W,[s("span",A,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("5.63562")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("5.63562")]),_:1})]),_:1})]),_:1})]),H])])]),s("tr",null,[P,s("td",null,[s("span",R,[s("span",Y,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("8")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("8")]),_:1})]),_:1})]),_:1})]),$])]),s("td",null,[t("Decimal numbers (up to "),s("span",j,[s("span",G,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("15")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("15")]),_:1})]),_:1})]),_:1})]),J]),t(" d.p.)")]),s("td",null,[s("span",K,[s("span",Q,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("3.1415926535879732")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("3.1415926535879732")]),_:1})]),_:1})]),_:1})]),U])])]),s("tr",null,[X,s("td",null,[s("span",Z,[s("span",ss,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("1")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("1")]),_:1})]),_:1})]),_:1})]),as])]),ns,ts]),s("tr",null,[es,s("td",null,[s("span",ls,[s("span",os,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("1")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("1")]),_:1})]),_:1})]),_:1})]),cs])]),ps,is]),ds])]),us,s("table",null,[rs,s("tbody",null,[s("tr",null,[hs,s("td",null,[s("span",_s,[s("span",ms,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("2")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("2")]),_:1})]),_:1})]),_:1})]),ks])]),s("td",null,[s("span",fs,[s("span",gs,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(u,null,{default:n(()=>[t("−")]),_:1}),a(e,null,{default:n(()=>[t("32768")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("-32 768")]),_:1})]),_:1})]),_:1})]),xs]),t(" to "),s("span",ws,[s("span",bs,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("32767")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("32 767")]),_:1})]),_:1})]),_:1})]),vs])])]),s("tr",null,[ys,s("td",null,[s("span",Ms,[s("span",Ls,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("2")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("2")]),_:1})]),_:1})]),_:1})]),Ts])]),s("td",null,[s("span",qs,[s("span",zs,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("0")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("0")]),_:1})]),_:1})]),_:1})]),Ns]),t(" to "),s("span",Is,[s("span",Cs,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("65535")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("65 535")]),_:1})]),_:1})]),_:1})]),Ds])])]),s("tr",null,[Os,s("td",null,[s("span",Ss,[s("span",Es,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4")]),_:1})]),_:1})]),_:1})]),Fs])]),s("td",null,[s("span",Bs,[s("span",Vs,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("0")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("0")]),_:1})]),_:1})]),_:1})]),Ws]),t(" to "),s("span",As,[s("span",Hs,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4294967295")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4 294 967 295")]),_:1})]),_:1})]),_:1})]),Ps])])]),s("tr",null,[Rs,s("td",null,[s("span",Ys,[s("span",$s,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4")]),_:1})]),_:1})]),_:1})]),js])]),s("td",null,[s("span",Gs,[s("span",Js,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(u,null,{default:n(()=>[t("−")]),_:1}),a(e,null,{default:n(()=>[t("2147483648")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("-2 147 483 648")]),_:1})]),_:1})]),_:1})]),Ks]),t(" to "),s("span",Qs,[s("span",Us,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("2147483647")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("2 147 483 647")]),_:1})]),_:1})]),_:1})]),Xs])])]),s("tr",null,[Zs,s("td",null,[s("span",sa,[s("span",aa,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4")]),_:1})]),_:1})]),_:1})]),na])]),s("td",null,[s("span",ta,[s("span",ea,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("0")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("0")]),_:1})]),_:1})]),_:1})]),la]),t(" to "),s("span",oa,[s("span",ca,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("4294967295")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("4 294 967 295")]),_:1})]),_:1})]),_:1})]),pa])])]),s("tr",null,[ia,s("td",null,[s("span",da,[s("span",ua,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("8")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("8")]),_:1})]),_:1})]),_:1})]),ra])]),s("td",null,[s("span",ha,[s("span",_a,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(u,null,{default:n(()=>[t("−")]),_:1}),a(r,null,{default:n(()=>[a(e,null,{default:n(()=>[t("2")]),_:1}),a(e,null,{default:n(()=>[t("63")]),_:1})]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("-2^{63}")]),_:1})]),_:1})]),_:1})]),ma]),t(" to "),s("span",ka,[s("span",fa,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(r,null,{default:n(()=>[a(e,null,{default:n(()=>[t("2")]),_:1}),a(e,null,{default:n(()=>[t("63")]),_:1})]),_:1}),a(u,null,{default:n(()=>[t("−")]),_:1}),a(e,null,{default:n(()=>[t("1")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("2^{63} - 1")]),_:1})]),_:1})]),_:1})]),ga])])]),s("tr",null,[xa,s("td",null,[s("span",wa,[s("span",ba,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("8")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("8")]),_:1})]),_:1})]),_:1})]),va])]),s("td",null,[s("span",ya,[s("span",Ma,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("0")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("0")]),_:1})]),_:1})]),_:1})]),La]),t(" to "),s("span",Ta,[s("span",qa,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("18446744073709551615")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("18 446 744 073 709 551 615")]),_:1})]),_:1})]),_:1})]),za])])]),s("tr",null,[Na,s("td",null,[s("span",Ia,[s("span",Ca,[a(p,{xmlns:"http://www.w3.org/1998/Math/MathML"},{default:n(()=>[a(c,null,{default:n(()=>[a(l,null,{default:n(()=>[a(e,null,{default:n(()=>[t("12")]),_:1})]),_:1}),a(o,{encoding:"application/x-tex"},{default:n(()=>[t("12")]),_:1})]),_:1})]),_:1})]),Da])]),Oa])])]),Sa])}const Wa=h(k,[["render",Ea],["__file","index.html.vue"]]);export{Wa as default};