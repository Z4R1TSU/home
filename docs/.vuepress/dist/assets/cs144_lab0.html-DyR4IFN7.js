import{_ as a,r as t,o as e,c as p,a as n,b as c,d as o,e as i}from"./app-CT84FaYp.js";const l="/assets/cs144_lab0_webget-DnFnOF6F.png",u="/assets/cs144_lab0_bs-DbfI03fI.png",r={},d=n("h1",{id:"cs144-lab-0",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cs144-lab-0"},[n("span",null,"CS144 lab 0")])],-1),k={href:"https://www.bilibili.com/video/BV1pM4m197ma/?spm_id_from=333.999.0.0&vd_source=f53099189814dd887f4ab25638e07406",target:"_blank",rel:"noopener noreferrer"},m=i(`<h3 id="webget" tabindex="-1"><a class="header-anchor" href="#webget"><span>webget</span></a></h3><ul><li>我的解法</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token keyword">void</span> <span class="token function">get_URL</span><span class="token punctuation">(</span> <span class="token keyword">const</span> string<span class="token operator">&amp;</span> host<span class="token punctuation">,</span> <span class="token keyword">const</span> string<span class="token operator">&amp;</span> path <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  TCPSocket sock<span class="token punctuation">;</span>
  sock<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token function">Address</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span> <span class="token string">&quot;http&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  sock<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span><span class="token string">&quot;GET &quot;</span> <span class="token operator">+</span> path <span class="token operator">+</span> <span class="token string">&quot; HTTP/1.1\\r\\nHost: &quot;</span> <span class="token operator">+</span> host <span class="token operator">+</span> <span class="token string">&quot;\\r\\nConnection: close\\r\\n\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>sock<span class="token punctuation">.</span><span class="token function">eof</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    string recvd<span class="token punctuation">;</span>
    sock<span class="token punctuation">.</span><span class="token function">read</span><span class="token punctuation">(</span>recvd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    cout <span class="token operator">&lt;&lt;</span> recvd<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  sock<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  sock<span class="token punctuation">.</span><span class="token function">shutdown</span><span class="token punctuation">(</span>SHUT_RDWR<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>(或者说可能这个长得好看点) <img src="`+l+`" alt="webget"></p><ul><li>运行结果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>╰─❯ <span class="token builtin class-name">cd</span> minnow/build/

…3  root@LAPTOP-2CKOL1GC  <span class="token number">15</span>:38:26 
╰─❯ <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> check_webget
<span class="token punctuation">[</span> <span class="token number">35</span>%<span class="token punctuation">]</span> Built target util_debug
<span class="token punctuation">[</span> <span class="token number">64</span>%<span class="token punctuation">]</span> Built target minnow_debug
<span class="token punctuation">[</span> <span class="token number">71</span>%<span class="token punctuation">]</span> Built target minnow_testing_debug
<span class="token punctuation">[</span> <span class="token number">78</span>%<span class="token punctuation">]</span> Built target stream_copy
<span class="token punctuation">[</span> <span class="token number">92</span>%<span class="token punctuation">]</span> Built target webget
<span class="token punctuation">[</span><span class="token number">100</span>%<span class="token punctuation">]</span> Built target tcp_native
Test project /root/minnow/build
    Start <span class="token number">1</span>: compile with bug-checkers
<span class="token number">1</span>/2 Test <span class="token comment">#1: compile with bug-checkers ........   Passed    3.69 sec</span>
    Start <span class="token number">2</span>: t_webget
<span class="token number">2</span>/2 Test <span class="token comment">#2: t_webget .........................   Passed    2.32 sec</span>

<span class="token number">100</span>% tests passed, <span class="token number">0</span> tests failed out of <span class="token number">2</span>

Total Test <span class="token function">time</span> <span class="token punctuation">(</span>real<span class="token punctuation">)</span> <span class="token operator">=</span>   <span class="token number">6.01</span> sec
Built target check_webget
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="byte-stream" tabindex="-1"><a class="header-anchor" href="#byte-stream"><span>byte stream</span></a></h3><ul><li>我的解法</li></ul><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// byte_stream.hh</span>

<span class="token keyword">protected</span><span class="token operator">:</span>
  <span class="token comment">// Please add any additional state to the ByteStream here, and not to the Writer and Reader interfaces.</span>
  <span class="token keyword">uint64_t</span> capacity_<span class="token punctuation">;</span>
  <span class="token keyword">bool</span> error_ <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  std<span class="token double-colon punctuation">::</span>string buffer <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">bool</span> is_close_ <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">uint64_t</span> pushcnt_ <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">uint64_t</span> popcnt_ <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><pre class="language-cpp"><code><span class="token comment">// byte_stream.cc</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;byte_stream.hh&quot;</span></span>

<span class="token keyword">using</span> <span class="token keyword">namespace</span> std<span class="token punctuation">;</span>

<span class="token class-name">ByteStream</span><span class="token double-colon punctuation">::</span><span class="token function">ByteStream</span><span class="token punctuation">(</span> <span class="token keyword">uint64_t</span> capacity <span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token function">capacity_</span><span class="token punctuation">(</span> capacity <span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">bool</span> <span class="token class-name">Writer</span><span class="token double-colon punctuation">::</span><span class="token function">is_closed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">return</span> is_close_<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">Writer</span><span class="token double-colon punctuation">::</span><span class="token function">push</span><span class="token punctuation">(</span> string data <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>is_close_<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">uint64_t</span> push_size <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">min</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">length</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">available_capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// append buffer with data&#39;s form part</span>
  buffer<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> push_size<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  pushcnt_ <span class="token operator">+=</span> push_size<span class="token punctuation">;</span>

  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">Writer</span><span class="token double-colon punctuation">::</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  is_close_ <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">uint64_t</span> <span class="token class-name">Writer</span><span class="token double-colon punctuation">::</span><span class="token function">available_capacity</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>capacity_ <span class="token operator">-</span> buffer<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">uint64_t</span> <span class="token class-name">Writer</span><span class="token double-colon punctuation">::</span><span class="token function">bytes_pushed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">return</span> pushcnt_<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">bool</span> <span class="token class-name">Reader</span><span class="token double-colon punctuation">::</span><span class="token function">is_finished</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">return</span> <span class="token punctuation">(</span>is_close_ <span class="token operator">&amp;&amp;</span> pushcnt_ <span class="token operator">==</span> popcnt_<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">uint64_t</span> <span class="token class-name">Reader</span><span class="token double-colon punctuation">::</span><span class="token function">bytes_popped</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">return</span> popcnt_<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

string_view <span class="token class-name">Reader</span><span class="token double-colon punctuation">::</span><span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>buffer<span class="token punctuation">.</span><span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> std<span class="token double-colon punctuation">::</span><span class="token function">string_view</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token class-name">Reader</span><span class="token double-colon punctuation">::</span><span class="token function">pop</span><span class="token punctuation">(</span> <span class="token keyword">uint64_t</span> len <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">uint64_t</span> pop_size <span class="token operator">=</span> std<span class="token double-colon punctuation">::</span><span class="token function">min</span><span class="token punctuation">(</span>len<span class="token punctuation">,</span> buffer<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// modify buffer to its last part (start at index pop_size)</span>
  buffer <span class="token operator">=</span> buffer<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>pop_size<span class="token punctuation">)</span><span class="token punctuation">;</span>

  popcnt_ <span class="token operator">+=</span> pop_size<span class="token punctuation">;</span>

  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">uint64_t</span> <span class="token class-name">Reader</span><span class="token double-colon punctuation">::</span><span class="token function">bytes_buffered</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">const</span>
<span class="token punctuation">{</span>
  <span class="token comment">// Your code here.</span>
  <span class="token keyword">return</span> buffer<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+u+`" alt="byte stream"></p><ul><li>运行结果</li></ul><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>╰─❯ <span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> check0
<span class="token punctuation">[</span> <span class="token number">35</span>%<span class="token punctuation">]</span> Built target util_debug
<span class="token punctuation">[</span> <span class="token number">64</span>%<span class="token punctuation">]</span> Built target minnow_debug
<span class="token punctuation">[</span> <span class="token number">71</span>%<span class="token punctuation">]</span> Built target minnow_testing_debug
<span class="token punctuation">[</span> <span class="token number">78</span>%<span class="token punctuation">]</span> Built target stream_copy
<span class="token punctuation">[</span> <span class="token number">92</span>%<span class="token punctuation">]</span> Built target webget
<span class="token punctuation">[</span><span class="token number">100</span>%<span class="token punctuation">]</span> Built target tcp_native
Test project /root/minnow/build
      Start  <span class="token number">1</span>: compile with bug-checkers
 <span class="token number">1</span>/10 Test  <span class="token comment">#1: compile with bug-checkers ........   Passed    0.23 sec</span>
      Start  <span class="token number">2</span>: t_webget
 <span class="token number">2</span>/10 Test  <span class="token comment">#2: t_webget .........................   Passed    1.09 sec</span>
      Start  <span class="token number">3</span>: byte_stream_basics
 <span class="token number">3</span>/10 Test  <span class="token comment">#3: byte_stream_basics ...............   Passed    0.01 sec</span>
      Start  <span class="token number">4</span>: byte_stream_capacity
 <span class="token number">4</span>/10 Test  <span class="token comment">#4: byte_stream_capacity .............   Passed    0.01 sec</span>
      Start  <span class="token number">5</span>: byte_stream_one_write
 <span class="token number">5</span>/10 Test  <span class="token comment">#5: byte_stream_one_write ............   Passed    0.01 sec</span>
      Start  <span class="token number">6</span>: byte_stream_two_writes
 <span class="token number">6</span>/10 Test  <span class="token comment">#6: byte_stream_two_writes ...........   Passed    0.01 sec</span>
      Start  <span class="token number">7</span>: byte_stream_many_writes
 <span class="token number">7</span>/10 Test  <span class="token comment">#7: byte_stream_many_writes ..........   Passed    0.04 sec</span>
      Start  <span class="token number">8</span>: byte_stream_stress_test
 <span class="token number">8</span>/10 Test  <span class="token comment">#8: byte_stream_stress_test ..........   Passed    0.02 sec</span>
      Start <span class="token number">37</span>: compile with optimization
 <span class="token number">9</span>/10 Test <span class="token comment">#37: compile with optimization ........   Passed    0.09 sec</span>
      Start <span class="token number">38</span>: byte_stream_speed_test
             ByteStream throughput: <span class="token number">1.35</span> Gbit/s
<span class="token number">10</span>/10 Test <span class="token comment">#38: byte_stream_speed_test ...........   Passed    0.13 sec</span>

<span class="token number">100</span>% tests passed, <span class="token number">0</span> tests failed out of <span class="token number">10</span>

Total Test <span class="token function">time</span> <span class="token punctuation">(</span>real<span class="token punctuation">)</span> <span class="token operator">=</span>   <span class="token number">1.64</span> sec
Built target check0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function v(b,_){const s=t("ExternalLinkIcon");return e(),p("div",null,[d,n("p",null,[n("a",k,[c("视频讲解"),o(s)])]),m])}const w=a(r,[["render",v],["__file","cs144_lab0.html.vue"]]),f=JSON.parse('{"path":"/posts/cs144_lab0.html","title":"CS144  lab 0","lang":"en-US","frontmatter":{"category":["CS144 lab"],"tag":["Network"]},"headers":[{"level":3,"title":"webget","slug":"webget","link":"#webget","children":[]},{"level":3,"title":"byte stream","slug":"byte-stream","link":"#byte-stream","children":[]}],"git":{"updatedTime":1712492094000,"contributors":[{"name":"Zari_Tsu","email":"zaritsu030907@gmail.com","commits":1}]},"filePathRelative":"posts/cs144_lab0.md","excerpt":"\\n<p><a href=\\"https://www.bilibili.com/video/BV1pM4m197ma/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">视频讲解</a></p>\\n<h3>webget</h3>\\n<ul>\\n<li>我的解法</li>\\n</ul>\\n<div class=\\"language-cpp\\" data-ext=\\"cpp\\" data-title=\\"cpp\\"><pre class=\\"language-cpp\\"><code><span class=\\"token keyword\\">void</span> <span class=\\"token function\\">get_URL</span><span class=\\"token punctuation\\">(</span> <span class=\\"token keyword\\">const</span> string<span class=\\"token operator\\">&amp;</span> host<span class=\\"token punctuation\\">,</span> <span class=\\"token keyword\\">const</span> string<span class=\\"token operator\\">&amp;</span> path <span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">{</span>\\n  TCPSocket sock<span class=\\"token punctuation\\">;</span>\\n  sock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">connect</span><span class=\\"token punctuation\\">(</span><span class=\\"token function\\">Address</span><span class=\\"token punctuation\\">(</span>host<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"http\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  sock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">write</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"GET \\"</span> <span class=\\"token operator\\">+</span> path <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\" HTTP/1.1\\\\r\\\\nHost: \\"</span> <span class=\\"token operator\\">+</span> host <span class=\\"token operator\\">+</span> <span class=\\"token string\\">\\"\\\\r\\\\nConnection: close\\\\r\\\\n\\\\r\\\\n\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">while</span> <span class=\\"token punctuation\\">(</span><span class=\\"token operator\\">!</span>sock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">eof</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span> <span class=\\"token punctuation\\">{</span>\\n    string recvd<span class=\\"token punctuation\\">;</span>\\n    sock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">read</span><span class=\\"token punctuation\\">(</span>recvd<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n    cout <span class=\\"token operator\\">&lt;&lt;</span> recvd<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  sock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">close</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n  sock<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">shutdown</span><span class=\\"token punctuation\\">(</span>SHUT_RDWR<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n\\n  <span class=\\"token keyword\\">return</span><span class=\\"token punctuation\\">;</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre></div>"}');export{w as comp,f as data};
