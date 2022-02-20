import{e as s}from"./app.14f0a0f3.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},o=s(`<h1 id="dynamic-programming" tabindex="-1"><a class="header-anchor" href="#dynamic-programming" aria-hidden="true">#</a> Dynamic programming</h1><h2 id="dynamic-programming-explained" tabindex="-1"><a class="header-anchor" href="#dynamic-programming-explained" aria-hidden="true">#</a> Dynamic programming explained</h2><p>Dynamic programming is a technique used to the vast majority of competitive programming, usually used to speed recursive or naive algorithms up. It can be applied when a problem can be solved using smaller versions of the same problem.</p><p>Dynamic programming has 3 parts: a state, a transition and a base case.</p><p>The simplest example often used to explain dynamic programming is to find Fibonacci numbers. We shall demonstrate the use of a recursive method, followed by 2 types of dynamic programming, as well as the different parts.</p><p>Naive recursive method (TLEs):</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> n) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (n </span><span style="color:#859900;">&lt;=</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">) </span><span style="color:#859900;">return</span><span style="color:#839496;"> n;</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(n </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">) </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(n </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">2</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>While this method works, it is far too slow and may check multiple numbers multiple times. At <code>n = 5</code>, <code>sum(2)</code> is recalculated 3 times.</p><h3 id="top-down-dp" tabindex="-1"><a class="header-anchor" href="#top-down-dp" aria-hidden="true">#</a> Top-down DP</h3><p>Top-down dynamic programming is a speedup of naive recursive functions, by preventing the need of recalculating the same function multiple times. This involves memoisation, which is the storing of previous solutions.</p><p>Top-down Fibonacci algorithm:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[</span><span style="color:#D33682;">100005</span><span style="color:#839496;">];</span><span style="color:#586E75;font-style:italic;"> // All initially set to -1</span></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(</span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> n) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (</span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[n] </span><span style="color:#859900;">!=</span><span style="color:#839496;"> </span><span style="color:#859900;">-</span><span style="color:#D33682;">1</span><span style="color:#839496;">) </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[n];</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">if</span><span style="color:#839496;"> (n </span><span style="color:#859900;">&lt;=</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">) { </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[n] </span><span style="color:#859900;">=</span><span style="color:#839496;"> n; </span><span style="color:#859900;">return</span><span style="color:#839496;"> n; }</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[n] </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(n </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">) </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#268BD2;">sum</span><span style="color:#839496;">(n </span><span style="color:#859900;">-</span><span style="color:#839496;"> </span><span style="color:#D33682;">2</span><span style="color:#839496;">);</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[n];</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><div class="highlight-line">\xA0</div><br><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>The states are stored in <code>memo[]</code>, and the transition is <code>memo[n] = sum[n - 1] + sum[n - 2]</code>. The base cases are when <code>n &lt;= 1</code>, <code>memo[n] = n</code>.</p><p>While this form of DP may be more intuitive sometimes, it usually takes up more memory.</p><h3 id="bottom-up-dp" tabindex="-1"><a class="header-anchor" href="#bottom-up-dp" aria-hidden="true">#</a> Bottom up DP</h3><p>Bottom-up dynamic programming is where you calculate all states leading up to the state that you are searching for.</p><p>Bottom-up Fibonacci algorithm:</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[n];</span></span>
<span class="line"><span style="color:#268BD2;">memo</span><span style="color:#839496;">[</span><span style="color:#D33682;">0</span><span style="color:#839496;">] </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">0</span><span style="color:#839496;">, </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[</span><span style="color:#D33682;">1</span><span style="color:#839496;">] </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">1</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#859900;">for</span><span style="color:#839496;"> (</span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">long</span><span style="color:#839496;"> i </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#D33682;">2</span><span style="color:#839496;">; i </span><span style="color:#859900;">&lt;</span><span style="color:#839496;"> n; i</span><span style="color:#859900;">++</span><span style="color:#839496;">) {</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[i] </span><span style="color:#859900;">=</span><span style="color:#839496;"> </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[i</span><span style="color:#859900;">-</span><span style="color:#D33682;">1</span><span style="color:#839496;">] </span><span style="color:#859900;">+</span><span style="color:#839496;"> </span><span style="color:#268BD2;">memo</span><span style="color:#839496;">[i</span><span style="color:#859900;">-</span><span style="color:#D33682;">2</span><span style="color:#839496;">];</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>The states are stored in <code>memo[n]</code>, the base cases are <code>memo[0]</code> and <code>memo[1]</code>, and the transition is <code>memo[i] = memo[i - 1] + memo[i - 2]</code>.</p><h3 id="conclusion" tabindex="-1"><a class="header-anchor" href="#conclusion" aria-hidden="true">#</a> Conclusion</h3><p>The 2 forms of DP have their own advantages. While bottom-up DP is usually more intuitive, some questions require the use of top-down DP. Regardless, both forms of DP help to speed up programs.</p>`,21);function l(e,p){return o}var c=n(a,[["render",l]]);export{c as default};
