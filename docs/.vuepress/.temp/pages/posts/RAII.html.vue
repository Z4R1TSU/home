<template><div><h1 id="raii和智能指针" tabindex="-1"><a class="header-anchor" href="#raii和智能指针"><span>RAII和智能指针</span></a></h1>
<blockquote>
<p>引: c++不像Java或是Python拥有自动的回收处理机制</p>
</blockquote>
<p>这篇来讲讲cpp当中的智能指针，正如引子讲的那样，c或c类语言基本都没一种自动的回收机制，这也是出现什么野指针、空悬指针、重复释放、内存泄漏等等tricky bug的原因。</p>
<p>在c当中确确实实就只能通过很小心翼翼的设计才能避免这个问题，但是在c++当中引入的RAII可以一定程度的解决这个问题。</p>
<p>先推荐一篇<a href="https://learn.microsoft.com/zh-cn/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170" target="_blank" rel="noopener noreferrer">Microsoft的官方文档<ExternalLinkIcon/></a>，讲的非常好</p>
<h2 id="对象生存期" tabindex="-1"><a class="header-anchor" href="#对象生存期"><span>对象生存期</span></a></h2>
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
<p>一个变量、函数、类的生存期从它被调用<strong>构造函数</strong>就开始了，而生存期到期的时候，应该调用<strong>析构函数</strong>来释放它所占用的资源。</p>
<h2 id="raii" tabindex="-1"><a class="header-anchor" href="#raii"><span>RAII</span></a></h2>
<p>资源管理RAII全称Resource Acquisition Is Initialiaztion。其目的就是为了不用new delete来手动对资源进行创建和释放，而自动在对象离开生存期或者说作用域的时候，自动调用析构函数来释放资源。</p>
<p>在使用裸指针时(类似C当中的使用<code v-pre>int *p = &amp;i;</code>)，我们常常需要对其进行显式的<code v-pre>delete</code>来释放其资源。</p>
<p>而智能指针就是C++当中对RAII的实现方案之一，它不需要我们进行显式的资源释放，也就是<code v-pre>delete</code>。也就是说，在对于使用智能指针的对象，在其生存期完的时候，会自动调用其<strong>析构函数</strong>，释放其资源。</p>
<p>下面来介绍智能指针的三巨头</p>
<ol>
<li><code v-pre>unique_ptr</code>：独享资源所有权</li>
<li><code v-pre>shared_ptr</code>：共享资源所有权</li>
<li><code v-pre>weak_ptr</code>：共享资源的观察者，配合<code v-pre>shared_ptr</code>使用</li>
</ol>
<h2 id="智能指针" tabindex="-1"><a class="header-anchor" href="#智能指针"><span>智能指针</span></a></h2>
<p>智能指针被定义在这个库当中<code v-pre>#include &lt;memory&gt;</code>。</p>
<h3 id="unique-ptr" tabindex="-1"><a class="header-anchor" href="#unique-ptr"><span>unique_ptr</span></a></h3>
<blockquote>
<p>标准: c++-11</p>
</blockquote>
<p>在聊<code v-pre>unique_ptr</code>之前，我们先了解一下被它所上位替代的淘汰者<code v-pre>auto_ptr</code>。也就是说C++11标准是前者的“生日”，也是后者的“忌日”。</p>
<ul>
<li>
<p>直接说结论：<code v-pre>unique_ptr</code>相较于<code v-pre>auto_ptr</code></p>
<ol>
<li>禁用左值引用的拷贝构造</li>
<li>禁用赋值重载函数</li>
</ol>
</li>
<li>
<p>这样的改变加强了智能指针的安全性，在对于被拷贝的原指针有一个恰当的处理，不至于出现指针空悬的情况。</p>
</li>
</ul>
<p>来看一组实例</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code>unique_ptr<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> p1<span class="token punctuation">{</span><span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">}</span><span class="token punctuation">;</span>      <span class="token comment">// 正确的</span>
unique_ptr<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> p2 <span class="token operator">=</span> p1<span class="token punctuation">;</span>          <span class="token comment">// 错误，禁用拷贝构造</span>
unique_ptr<span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span> p2<span class="token punctuation">{</span>std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>p1<span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token punctuation">;</span><span class="token comment">// 禁用左值引用拷贝构造，关我右值move迁移何事</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<blockquote>
<p>C++-14当中添加了动态构建<code v-pre>make_unique()</code></p>
</blockquote>
<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token keyword">auto</span> ptr <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token generic-function"><span class="token function">make_unique</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token keyword">int</span><span class="token operator">></span></span></span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
threads_<span class="token punctuation">.</span><span class="token function">emplace_back</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">;</span>             <span class="token comment">// 报错，就理解为unique_ptr在转移的时候，必须要用右值</span>
threads_<span class="token punctuation">.</span><span class="token function">emplace_back</span><span class="token punctuation">(</span>std<span class="token double-colon punctuation">::</span><span class="token function">move</span><span class="token punctuation">(</span>ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 正确</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><br>
<blockquote>
<p>加锁：<code v-pre>std::unique_lock</code></p>
</blockquote>
<ul>
<li><code v-pre>unique_lock</code>也是RAII的一部分。lock 对象本身不是锁，而是智能锁管理对象，它的构造函数和析构函数用来管理与其关联的 mutex 对象的锁定和解锁状态。当 lock 构造时，它自动获取与之关联的 mutex 的锁定权；当 lock 超出作用域并被销毁时，它自动释放这个 mutex。这就确保了即使在有异常抛出的情况下，锁也能被正确释放，避免死锁。</li>
</ul>
<p>以下是构建<code v-pre>unique_lock</code>的过程，我们不再需要显示的<code v-pre>lock</code>和<code v-pre>unlock</code>锁。<code v-pre>std::unique_lock</code> 在析构时自动释放锁。但它还允许你在作用域内显式地释放和重新获取锁。这增加了灵活性，例如用于条件变量等。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;mutex></span></span>
<span class="token comment">// 创建一个mutex互斥量类型的变量mtx</span>
std<span class="token double-colon punctuation">::</span>mutex mtx<span class="token punctuation">;</span>
<span class="token comment">// 对mutex类型的mtx进行加锁，unique_lock类型的lck只是一个管理锁的东西</span>
std<span class="token double-colon punctuation">::</span>unique_lock<span class="token operator">&lt;</span>std<span class="token double-colon punctuation">::</span>mutex<span class="token operator">></span> <span class="token function">lck</span><span class="token punctuation">(</span>mtx<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Q: 为什么不直接用<code v-pre>std::mutex</code>里面内置的<code v-pre>lock</code>和<code v-pre>unlock</code>来进行锁的acquire和release？<br>
A: 有可能死锁，不符合RAII规范。</p>
<h3 id="shared-ptr" tabindex="-1"><a class="header-anchor" href="#shared-ptr"><span>shared_ptr</span></a></h3>
</div></template>


