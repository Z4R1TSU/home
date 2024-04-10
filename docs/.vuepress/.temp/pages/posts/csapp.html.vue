<template><div><h1 id="computer-science-a-programmer-s-perspective" tabindex="-1"><a class="header-anchor" href="#computer-science-a-programmer-s-perspective"><span>Computer Science: A Programmer's Perspective</span></a></h1>
<blockquote>
<p>这个是很久之前的关于csapp中计算机当中数的表示的笔记，图一乐即可</p>
</blockquote>
<h2 id="_1-a-tour-of-computer-systems" tabindex="-1"><a class="header-anchor" href="#_1-a-tour-of-computer-systems"><span>1. A Tour of Computer Systems</span></a></h2>
<p><em><strong>Abstractions in Computer Systems</strong></em>
<img src="@source/.vuepress/public/images/csapp/img_1.png" alt="Some abstract conception in CS"></p>
<h3 id="hardware-organization-of-a-system" tabindex="-1"><a class="header-anchor" href="#hardware-organization-of-a-system"><span>Hardware Organization of a System</span></a></h3>
<ol>
<li>two continuous call may not adjacent</li>
<li><em><strong>word</strong></em>: per word, 32bit-machine -&gt; 4Byte, 64bit-machine -&gt; 8Byte</li>
<li><em><strong>Program Counter</strong></em></li>
<li><em><strong>Register File(寄存器)</strong></em></li>
<li><em><strong>Algorithm/Logical Unit</strong></em></li>
<li><em><strong>Main Memory(主存)</strong></em></li>
<li><em><strong>Bus(总线)</strong></em></li>
<li><em><strong>I/O devices</strong></em>
<img src="@source/.vuepress/public/images/csapp/img.png" alt="hardware overview">
input by keyboard
<img src="@source/.vuepress/public/images/csapp/img_2.png" alt="input">
execution
<img src="@source/.vuepress/public/images/csapp/img_3.png" alt="execution">
output through graphic
<img src="@source/.vuepress/public/images/csapp/img_4.png" alt="output">{:height=&quot;50%&quot; width=&quot;50%&quot;}</li>
<li><strong>large -&gt; slow and cheap,<br>small -&gt; fast and cost <br>
上级层级是下级层级的高速缓存</strong>
<img src="@source/.vuepress/public/images/csapp/img_5.png" alt="memory overview">{:height=&quot;50%&quot; width=&quot;50%&quot;}</li>
</ol>
<hr>
<h3 id="how-to-dramatically-improve-computer-performance" tabindex="-1"><a class="header-anchor" href="#how-to-dramatically-improve-computer-performance"><span>How to dramatically improve computer performance</span></a></h3>
<p><em><strong>Amdahl's law</strong></em> <code v-pre>s = 1 / ((1 - a) + a / k)</code> <br>
which indicate we need to work a lot if we want to improve computer's performance.</p>
<ol>
<li>
<p><em><strong>Multi-core Processor(多核)</strong></em>
: every CPU core has its L1 cache and L2 cache, all the cores share L3 cache.</p>
</li>
<li>
<p><em><strong>Hyperthreading(超线程)</strong></em>
: Instruction-Level Parallelism(流水线作业)
Single Instruction Multiple Data</p>
</li>
</ol>
<hr>
<h2 id="_2-representing-and-manipulating-information" tabindex="-1"><a class="header-anchor" href="#_2-representing-and-manipulating-information"><span>2. Representing and Manipulating Information</span></a></h2>
<h3 id="information-storage" tabindex="-1"><a class="header-anchor" href="#information-storage"><span>Information Storage</span></a></h3>
<ol>
<li><em><strong>Hexadecimal</strong></em>: start with <code v-pre>0x</code></li>
<li><em><strong>Decimal</strong></em></li>
<li><em><strong>Binary</strong></em></li>
<li><em><strong>the storage of different types</strong></em>
<img src="@source/.vuepress/public/images/csapp/img_7.png" alt="the storage of different types"></li>
<li><em><strong>Addressing and Byte Ordering</strong></em>: mostly machines use <code v-pre>Litlle Endian</code>
<img src="@source/.vuepress/public/images/csapp/img_8.png" alt="endian"></li>
</ol>
<h3 id="integer-representations" tabindex="-1"><a class="header-anchor" href="#integer-representations"><span>Integer Representations</span></a></h3>
<h4 id="representation-of-negatives" tabindex="-1"><a class="header-anchor" href="#representation-of-negatives"><span>Representation of negatives<br></span></a></h4>
<ol>
<li>
<p>Reverse Encoding(反码)
: <strong>1' s complement</strong>: flip every single bit<br>
: 负数是正数二进制按位取反的结果<br>
shortcoming: error in representation of 0</p>
</li>
<li>
<p>Complement Encoding(补码)
: <strong>2' s complement</strong>: flip every single bit and plus 1
: 最高位权重取负,其余与非负数表示相同。(最高位为1并不仅仅是取负号)<br>
如<code v-pre>1011 = -1*2^3 + 0*2^2 + 1*2^1 + 1*2^0</code></p>
</li>
<li>
<p>Bias complement(偏码)
: 比较大小时类似unsigned,同位时直接比较大小,实际值为表达式值加上bias值 <code v-pre>bias = -(2 ^ (n-1) - 1)</code></p>
</li>
</ol>
<h3 id="integer-arithmetic" tabindex="-1"><a class="header-anchor" href="#integer-arithmetic"><span>Integer Arithmetic</span></a></h3>
<p><em><strong>if Overflow</strong></em></p>
<ol>
<li>unsigned number: if <code v-pre>x + y &gt; 2^w</code>, <code v-pre>x + y = x + y - 2^w</code></li>
<li>number:<br>
<ol>
<li><strong>positive</strong>   if <code v-pre>x + y &gt; 2^w</code>, <code v-pre>x + y = x + y - 2^(w+1)</code><br></li>
<li><strong>negative</strong>   if <code v-pre>x + y &lt; 2^w</code>, <code v-pre>x + y = x + y + 2^(w+1)</code><br></li>
</ol>
</li>
</ol>
<h3 id="floating-point" tabindex="-1"><a class="header-anchor" href="#floating-point"><span>Floating Point</span></a></h3>
<blockquote>
<ul>
<li>For normalized floats: <br>
Value = (−1)^Sign ∗ 2^(Exp+Bias) ∗ 1.significand(2) <br></li>
<li>For denormalized(exponent all 0 and significand not all 0) floats: <br>
Value = (−1)^Sign ∗ 2^(Exp+Bias+1) ∗ 0.significand(2) <br></li>
<li>Why exp need to be always 0? Cuz denorm is used to represent the numbers around 0. <br></li>
</ul>
</blockquote>
<ol>
<li>
<p>float (32bit = 4Byte)<br></p>
<ol>
<li>sign 符号位 1bit (31): (-1)^n. 0 -&gt; p, 1 -&gt; n.</li>
<li>exponent 指数位 8bit (30 - 23):</li>
</ol>
<blockquote>
<p>unsigned[0, 255] - bias(<code v-pre>(2 ^ (n-1) - 1)</code> = 127) <br>
<em><strong>scope: [-126, 127]</strong></em> (why not [-127, 128], 0000_0000, 1111_1111 represent infinite or NaN) <br>
e.g. 1000_0001: (2^8 + 2^0) - 127</p>
</blockquote>
<ol start="3">
<li>significand 小数位 23bit (22 - 0):
<blockquote>
<p>for normal float: 1 is implicit, so there is 24 bit actually <br>
store as big endian: e.g. <code v-pre>0100_0000...0000 = 2 ^ (-2)</code></p>
</blockquote>
</li>
</ol>
</li>
<li>
<p>double (64bit = 8Byte) <br></p>
<ol>
<li>sign 1bit (63)</li>
<li>exponent 11bit (62 - 52)</li>
<li>significand 53bit (52 - 0)</li>
</ol>
</li>
<li>
<p>representation  <br>
<img src="@source/.vuepress/public/images/csapp/img_10.png" alt="img_10.png"></p>
<ol>
<li>+0: sign = 0, e = s = 0000_0000</li>
<li>-0: sign = 1, e = s = 0000_0000</li>
<li>+infinity: sign = 0, e = 1111_1111, s = 0000_0000</li>
<li>-infinity: sign = 1, e = 1111_1111, s = 0000_0000</li>
<li>NaN(Not a Number): sign = 0/1, e = 1111_1111, s != 0</li>
</ol>
</li>
<li>
<p>transform</p>
</li>
</ol>
<blockquote>
<p>e.g.  (10.75)10 to float</p>
<ol>
<li>represent as binary: <code v-pre>1010.11</code></li>
<li>Write binary numbers as 1.xxxx forms of scientific records: <code v-pre>1.01011*10^3</code></li>
<li>exponent + bias: <code v-pre>3+127 = 130</code> so the exponent bit is <code v-pre>1000_0010</code></li>
<li>significand: <code v-pre>0101_1000_0000_0000_0000_000</code></li>
<li>signal bit: <code v-pre>0</code>, for 10.75 is positive</li>
<li>get result: <code v-pre>10.75 = 0|1000_0010|0101_1000_0000_0000_0000_000</code></li>
</ol>
</blockquote>
</div></template>


