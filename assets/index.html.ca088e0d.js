import{r as t,o as n,c as r,a as e,b as l,F as p,d as a,e as s}from"./app.d4960dc3.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const d={},c=a('<h2 id="cpp-guide-for-competitive-programming-hci-ec3" tabindex="-1"><a class="header-anchor" href="#cpp-guide-for-competitive-programming-hci-ec3" aria-hidden="true">#</a> CPP Guide for Competitive Programming (HCI EC\xB3)</h2><p>This a guide made by a few EC\xB3 dudes in Lower Secondary. Have fun reading and getting confused!</p><h3 id="introduction-to-cp" tabindex="-1"><a class="header-anchor" href="#introduction-to-cp" aria-hidden="true">#</a> Introduction to CP</h3><p><em>Informatics olympiads</em>, also known as <em>competitive programming</em>, is a form of programming where contestants are required to solve problems within a certain time limit.</p><p>Their code will be checked against a set of inputs and outputs, which determine if the code is correct.</p><p>This form of programming requires a vast amount of knowledge in common algorithms, math, as well as logical thinking.</p><h3 id="common-terminology" tabindex="-1"><a class="header-anchor" href="#common-terminology" aria-hidden="true">#</a> Common Terminology</h3><p>Not sure what the abbreviations mean? Here you go:</p><table><thead><tr><th>Abbr.</th><th>Meaning</th><th>Notes</th></tr></thead><tbody><tr><td>AC</td><td>All Correct</td><td>Your code produced expected results with the testcases provided.</td></tr><tr><td>WA</td><td>Wrong Answer</td><td>Some/all of the testcases did not produce the expected result.</td></tr><tr><td>TLE</td><td>Time Limit Exceeded</td><td>Your code has run for too long, and the program was killed.</td></tr><tr><td>MLE</td><td>Memory Limit Exceeded</td><td>Your code took up too much memory, and the program was killed.</td></tr><tr><td>RTE(6)</td><td>Runtime Error (6)</td><td>Your program has overflowed in terms of memory capacity.</td></tr><tr><td>RTE(11)</td><td>Runtime Error (11)</td><td>Your program accessed areas in memory which were out of range.</td></tr></tbody></table><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello, World</h3>',10),m=s("A very simple program allowing you to AC "),h={href:"https://codebreaker.xyz/problem/helloworld",target:"_blank",rel:"noopener noreferrer"},u=s("this CP problem"),g=a(`<div class="language-cpp ext-cpp line-numbers-mode"><pre class="shiki" style="background-color:#002B36;"><code><span class="line"><span style="color:#859900;">#include</span><span style="color:#B58900;"> </span><span style="color:#2AA198;">&lt;iostream&gt;</span></span>
<span class="line"><span style="color:#859900;">using</span><span style="color:#839496;"> </span><span style="color:#93A1A1;font-weight:bold;">namespace</span><span style="color:#839496;"> </span><span style="color:#CB4B16;">std</span><span style="color:#839496;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#93A1A1;font-weight:bold;">int</span><span style="color:#839496;"> </span><span style="color:#268BD2;">main</span><span style="color:#839496;">() {</span></span>
<span class="line"><span style="color:#839496;">  cout </span><span style="color:#859900;">&lt;&lt;</span><span style="color:#839496;"> </span><span style="color:#2AA198;">&quot;Hello World&quot;</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">  </span><span style="color:#859900;">return</span><span style="color:#839496;"> </span><span style="color:#D33682;">0</span><span style="color:#839496;">;</span></span>
<span class="line"><span style="color:#839496;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1);function y(b,f){const o=t("ExternalLinkIcon");return n(),r(p,null,[c,e("p",null,[m,e("a",h,[u,l(o)])]),g],64)}var v=i(d,[["render",y]]);export{v as default};