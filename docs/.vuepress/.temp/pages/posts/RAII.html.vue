<template><div><h1 id="对象生存期与资源管理" tabindex="-1"><a class="header-anchor" href="#对象生存期与资源管理"><span>对象生存期与资源管理</span></a></h1>
<blockquote>
<p>引: c++不像Java或是Python拥有自动的回收处理机制</p>
</blockquote>
<p>这篇来讲讲cpp当中的智能指针，正如引子讲的那样，c或c类语言基本都没一种自动的回收机制，这也是出现什么野指针、空悬指针、内存泄漏等等tricky bug的原因。</p>
<p>在c当中确确实实就只能通过很小心翼翼的设计才能避免这个问题，但是在c++当中引入的RAII可以一定程度的解决这个问题。</p>
<p>先推荐一篇<a href="https://learn.microsoft.com/zh-cn/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170" target="_blank" rel="noopener noreferrer">Microsoft的官方文档<ExternalLinkIcon/></a>，讲的非常好</p>
<h3 id="对象生存期" tabindex="-1"><a class="header-anchor" href="#对象生存期"><span>对象生存期</span></a></h3>
<p>那么什么是一个对象的生存期呢？举两个例子你就懂了</p>
<ol>
<li>在这个例子当中，i在for loop结束之后仍然存在<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">int</span> i<span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>在这个例子当中，i在for循环结束后便不复存在<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">9</span><span class="token punctuation">;</span> i <span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// do something</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ol>
</div></template>


