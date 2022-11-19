import{_ as e,r as t,o as p,c,a as s,b as n,d as o,e as i}from"./app.57b91a14.js";const l={},r=i(`<h1 id="structs-and-classes" tabindex="-1"><a class="header-anchor" href="#structs-and-classes" aria-hidden="true">#</a> Structs and Classes</h1><h2 id="structs" tabindex="-1"><a class="header-anchor" href="#structs" aria-hidden="true">#</a> Structs</h2><p>Structs are a way to group several related variables into one &quot;datatype&quot;. Each variable in the struct is known as a <strong>member</strong> of the struct.</p><p>For example, this is a struct.</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">struct</span> <span class="token punctuation">{</span>
  <span class="token keyword">int</span> x<span class="token punctuation">,</span>y<span class="token punctuation">;</span>
  <span class="token keyword">char</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span> name<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This initialises a struct, <code>name</code>. Inputting a struct is based on its members:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code>std<span class="token double-colon punctuation">::</span>cin <span class="token operator">&gt;&gt;</span> name<span class="token punctuation">.</span>x <span class="token operator">&gt;&gt;</span> name<span class="token punctuation">.</span>y <span class="token operator">&gt;&gt;</span> name<span class="token punctuation">.</span>c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d %d %c&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">.</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token operator">&amp;</span>name<span class="token punctuation">.</span>c<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Since a struct acts like a data type by itself, variables of that struct can be initialised:</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// single variable</span>
  name name1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token char">&#39;c&#39;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token comment">// or an array of names!</span>
  name s<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes" aria-hidden="true">#</a> Classes</h2><p>A class is the building block of OOP in C++. While not widely used within the realm of CP, they are still important in other fields.</p><h3 id="what-are-they" tabindex="-1"><a class="header-anchor" href="#what-are-they" aria-hidden="true">#</a> What are they?</h3><p>Like structs, classes contain various member variables, but also contain member functions: functions specifically tailored to that datatype.</p><div class="language-cpp line-numbers-mode" data-ext="cpp"><pre class="language-cpp"><code><span class="token keyword">class</span> <span class="token class-name">Cca</span> <span class="token punctuation">{</span>
  <span class="token keyword">public</span><span class="token operator">:</span>
  string name<span class="token punctuation">;</span>
  <span class="token keyword">int</span> members<span class="token punctuation">;</span>
   
  <span class="token comment">// printName is not defined inside class definition</span>
  <span class="token keyword">void</span> <span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   
  <span class="token comment">// printMembers is defined inside the class definition</span>
  <span class="token keyword">void</span> <span class="token function">printMembers</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;Number of members: &quot;</span> <span class="token operator">&lt;&lt;</span> members<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
 
<span class="token comment">// definition of member functions using scope resolution operator ::</span>
<span class="token keyword">void</span> <span class="token class-name">Cca</span><span class="token double-colon punctuation">::</span><span class="token function">printName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    cout <span class="token operator">&lt;&lt;</span> <span class="token string">&quot;CCA: &quot;</span> <span class="token operator">&lt;&lt;</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),u={href:"https://www.geeksforgeeks.org/c-classes-and-objects/",target:"_blank",rel:"noopener noreferrer"};function d(m,k){const a=t("ExternalLinkIcon");return p(),c("div",null,[r,s("p",null,[n("More advanced concepts for classes, such as constructors and destructors, appear almost nowhere within competitive programming. Instead, you can read about them "),s("a",u,[n("here"),o(a)]),n(".")])])}const b=e(l,[["render",d],["__file","classes.html.vue"]]);export{b as default};
