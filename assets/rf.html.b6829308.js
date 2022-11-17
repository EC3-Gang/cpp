import{_ as e,r as t,o as i,c as l,a as s,b as n,d as c,e as p}from"./app.7a075486.js";const o={},r=p(`<h1 id="recursive-functions" tabindex="-1"><a class="header-anchor" href="#recursive-functions" aria-hidden="true">#</a> Recursive Functions</h1><p>Recursive functions are functions which are called within the same function. Crazy, right?</p><p>Pseudocode:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>function fn with variable A &amp; B
  if A smaller or equals to B
    print a
    recall function fn with variable A+1 and B

fn(1, 10);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1
2
3
4
5
6
7
8
9
10
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="uses-in-cp" tabindex="-1"><a class="header-anchor" href="#uses-in-cp" aria-hidden="true">#</a> Uses in CP</h2><p>Well...not a lot, to be honest. It TLEs when the there are too many recursions, but usually works for smaller inputs.</p><p>Example of a recursive function in CP (calculates the Fibonacci sequence):</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;iostream&gt;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">endl</span> <span class="token string">&quot;\\n&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">ll</span> <span class="token expression"><span class="token keyword">long</span> <span class="token keyword">long</span></span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

ll <span class="token function">sum</span><span class="token punctuation">(</span>ll n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">sum</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">sum</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  ll n<span class="token punctuation">;</span>
  cin <span class="token operator">&gt;&gt;</span> n<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> cout <span class="token operator">&lt;&lt;</span> <span class="token function">sum</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">&lt;&lt;</span> <span class="token char">&#39;\\n&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><div class="highlight-line"> </div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>The highlighted part is the recursive function.</em></p>`,11),u={href:"https://codebreaker.xyz/problem/fibo",target:"_blank",rel:"noopener noreferrer"};function d(v,k){const a=t("ExternalLinkIcon");return i(),l("div",null,[r,s("p",null,[n("The above solution was written for "),s("a",u,[n("this problem"),c(a)]),n(", but TLE'd on one of the last test cases.")])])}const b=e(o,[["render",d],["__file","rf.html.vue"]]);export{b as default};
