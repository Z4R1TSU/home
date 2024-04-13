<template><div><h1 id="std-atomic-原子操作" tabindex="-1"><a class="header-anchor" href="#std-atomic-原子操作"><span>std::atomic 原子操作</span></a></h1>
<p>在我最近搞的线程池项目当中，有几个疑问。</p>
<p>Q：线程池的意义何在？<br>
A：因为线程的创建与销毁，或者线程的切换开销很大。所以我们可以创建一个“随时待命”的“兵团”来避免这种开销，也就有了线程池这个项目。</p>
<br>
<p>Q：既然线程需要通信，或者说避免对资源的竞争，那么有没有一种方式可以开销小一点的方法呢？比锁小一点的那种。<br>
A：有的。它就是atomic，原子操作。</p>
<p>传送门:</p>
<ol>
<li><a href="https://en.cppreference.com/w/cpp/atomic/atomic" target="_blank" rel="noopener noreferrer"><strong>atomic</strong> in <em>cpp reference</em><ExternalLinkIcon/></a></li>
<li><a href="https://learn.microsoft.com/zh-cn/cpp/standard-library/atomic?view=msvc-170" target="_blank" rel="noopener noreferrer"><strong>atomic</strong> in <em>Microsoft Tutorial</em><ExternalLinkIcon/></a></li>
</ol>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2>
<p>一个原子操作有两个关键属性，帮助你使用多个线程正确操控对象，而无需使用 <code v-pre>mutex</code> 锁。</p>
<ul>
<li>
<p>最直观的，“原子”指的是最小的、不可分割的。在多个线程访问同一个资源的时候，确保同一时间内只有一个线程在访问这一资源<br>
(就很像锁不是吗，但是原子操作更加接近底层，因而效率更高)</p>
</li>
<li>
<p>由于原子操作是不可见的，因此，仅在第一个原子操作前后，来自不同线程同一对象上的第二个原子操作可以获取该对象的状态。</p>
</li>
<li>
<p>基于其 <code v-pre>memory_order</code> 参数，原子操作可以针对同一个线程中其他原子操作的影响可见性建立排序要求。 因此，它会抑制违反排序要求的编译器优化。</p>
</li>
</ul>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<p>我在项目当中，用到的atomic基本都是对一些变量或者数据结构的原子性封装。</p>
<ul>
<li>在多线程环境中，对std::atomic对象的访问不会造成竞争冒险。利用std::atomic可实现数据结构的无锁设计。</li>
</ul>
<p>比如</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>int     ->  std::atomic_int
bool    ->  std::atomic_bool
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>给一个使用的情景，大家可以推出atomic可以在什么时候使用</p>
<p>比如说，我这个线程池当中，池中内置了几个严阵以待的线程，等待着传入的任务。很自然的，我们想到使用queue队列来存储这个任务的集合，而任务的数量自然也是我们需要维护的一个变量。</p>
<p>但是，每一个线程都很有在同一时间对这个<code v-pre>taskSize_</code>进行修改操作。就很像那个<strong>cache coherence</strong>，也就是缓存一致性不是吗。</p>
<p>我们就可以利用对这个<code v-pre>taskSize_</code>加锁防止资源竞争。但是，锁又不够那么的轻量，所以进行原子封装，来确保同一时间只有一个线程在对它进行操作。</p>
<div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre v-pre class="language-cpp"><code><span class="token comment">// 记录任务的数量</span>
std<span class="token double-colon punctuation">::</span>atomic_uint taskSize_ <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="std-mutex" tabindex="-1"><a class="header-anchor" href="#std-mutex"><span>std::mutex</span></a></h2>
<p>再扯一下mutex互斥量，这个也很自然就能联想到，二者作用比较接近对吧。</p>
<blockquote>
<p>一句话解决：mutex是加大范围但效率变低的atomic。</p>
</blockquote>
<p>mutex可以保护的东西是一个变量，也可以是一段代码。(范围很广)</p>
</div></template>


