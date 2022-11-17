import{_ as n,o as s,c as a,e as t}from"./app.21da5c4c.js";const p={},e=t(`<h1 id="bitmask" tabindex="-1"><a class="header-anchor" href="#bitmask" aria-hidden="true">#</a> Bitmask</h1><h2 id="bitmask-explanation" tabindex="-1"><a class="header-anchor" href="#bitmask-explanation" aria-hidden="true">#</a> Bitmask explanation</h2><p>it sounds cool ngl</p><p>So what bitmask does is that it manipulates variables and stores them in terms of bits.</p><p>wtv heres the code</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">int</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> <span class="token operator">++</span>j<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		v<span class="token punctuation">.</span><span class="token function">push_back</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","bitmask.html.vue"]]);export{r as default};