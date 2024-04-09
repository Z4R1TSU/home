export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/posts/6s081_overview.html", { loader: () => import(/* webpackChunkName: "6s081_overview.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/6s081_overview.html.js"), meta: {"_blog":{"title":"MIT 6.S081 操作系统 课程导读和源码浅析","author":"","date":null,"category":["6.S081"],"tag":["Operating System"],"excerpt":"\n<blockquote>\n<p>这部分均以视频形式来讲解，发布在BiliBili当中，就不出文字博客了</p>\n</blockquote>\n<blockquote>\n<p>叠个甲：我做视频和博客的初衷是为了类似想开源代码一样开源我的知识。如果我有什么不对的地方，望大家多多包涵，如果能帮我指正或扩充，我将感激不尽。</p>\n</blockquote>\n<p>我将其分为两大块: 课程导读、源码浅析。</p>\n<h3>课程导读</h3>\n<p>对应的lecture共有15讲，我人为将其分为10讲</p>\n<ol>\n<li>\n<p><strong>overview</strong> 总述概览 前置知识:<br>\n这部分内容对应官方发布的lecture1-3，涉及一些计算机科学的基础知识，是为了激发大家的兴趣而设计，故速览即可。这是我首次尝试制作视频，讲得有些紧张，请见谅。<br>\n这个是第一版做的<a href=\"https://www.bilibili.com/video/BV1ku4m1P77U/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">overview</a>，也是我第一次做视频，讲的比较紧张。这个是我的<a href=\"https://www.bilibili.com/video/BV1N2421T7nM/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">重制版</a>。</p>\n</li>\n<li>\n<p><strong>page table</strong> 内存虚拟化与页表的原理及实现:<br>\n对应lecture4。我们知道操作系统的作用在于对硬件进行抽象，而<strong>page table</strong>正是这种抽象的一部分，它是内存虚拟化中最重要且最强大的机制之一。\n<a href=\"https://www.bilibili.com/video/BV1N2421T7nM/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec4 page table页表和内存虚拟化</a></p>\n</li>\n<li>\n<p><strong>GDB</strong>和<strong>RISC-V</strong>的基本知识和小技巧:<br>\n对应lecture5。详解如何使用GDB去调试XV6，包括常用的调试命令到如何对用户态的XV6文件进行调试；以及RISC-V的基本概念和32个通用寄存器，加上call convention即调用约定的介绍。\n<a href=\"https://www.bilibili.com/video/BV1Pm411D7Pt/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec5 GDB调试和RISC-V寄存器的调用协定</a></p>\n</li>\n<li>\n<p><strong>trap</strong>和system call:<br>\n对应lecture6。涵盖lecture6。trap机制涉及对进程的操作，而进程是对CPU功能的一种抽象。system call即系统调用，可类比为操作系统提供给用户的API，让我们得以在内核级别进行操作。system call的过程，即用户态到内核态的切换，就是通过trap机制来完成的。\n<a href=\"https://www.bilibili.com/video/BV1rv421y7ta/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec6 trap陷阱机制 走进system call的前世今生</a></p>\n</li>\n<li>\n<p><strong>page fault</strong>和三种机制:<br>\n对应lecture7。在查询页表时遇到的失败被称为page fault。但这种失败同时也为我们带来了新的转机，由此衍生出三大机制：<strong>Lazy Allocation</strong>*, <strong>Zero Fill on Demand</strong>, <strong>Copy On Write Fork</strong>。尽管在XV6中这些机制未得到实现（只会简单报告page fault），但在现代Linux系统中，它们都得以完整实施。\n<a href=\"https://www.bilibili.com/video/BV16u4m1P7c3/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec7: page fault和应运而生的三种机制 懒惰分配，按需填零，写时拷贝</a></p>\n</li>\n<li>\n<p><strong>interrupt</strong> 中断与外部设备的I/O的互动:<br>\n对应lecture9。探讨了中断机制的内涵，中断不同于同步的<strong>trap</strong>——源自计算机内部，<strong>interrupt</strong>是由外部设备发起的异步行为，用来响应硬件事件，促进CPU与外设的有效沟通。<br>\n<a href=\"https://www.bilibili.com/video/BV1pW421N7Eh/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec9: interrupt中断与外部设备的IO 换一个视角看trap</a></p>\n</li>\n<li>\n<p><strong>lock</strong> 锁机制:<br>\n对应lecture10。锁机制是并发编程的基石，旨在管理多个进程对同一资源的并发访问。本讲介绍了包括<strong>Dead Lock</strong>（一种进程间因资源竞争产生的相互等待状态），<strong>Spin Lock</strong>，<strong>Mutex Lock</strong>，和<strong>Blocking Lock</strong>在内的多个关键概念。<br>\n<a href=\"https://www.bilibili.com/video/BV1pH4y1J7rB/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec10: lock 死锁 自旋锁 互斥锁 阻塞锁</a></p>\n</li>\n<li>\n<p>进程的切换与调度:<br>\n对应lecture11-12。进程切换与调度是操作系统中不可或缺的一环，它关乎资源分配的效率及公平性。主要围绕着<code>sched() scheduling()</code>这几个函数来展开讲述。但是这部分是我学的不扎实的地方，有很多知识点需要我们去通过实际的做多线程、协程类的项目才能弄懂的，我现在对这方面很欠缺，所以视频完完全全就图一乐。<br>\n<a href=\"https://www.bilibili.com/video/BV1Em411S7Tm/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec11-12: 调度和进程切换</a></p>\n</li>\n<li>\n<p><strong>file system</strong> 文件系统相关内容:<br>\n对应lecture13-15。围绕文件系统的整体构架进行大概的解读，尤其强调日志机制在系统崩溃恢复中的核心作用。<br>\n<a href=\"https://www.bilibili.com/video/BV1yy421q7JS/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">lec13-15: file system和crash recovery</a></p>\n</li>\n<li>\n<p><strong>summary</strong> 课程总结和复盘:<br>\n是我自己个人对于MIT的操作系统，也就是6.S081这门课程学到了什么，做了一个小小的总结。也是我对大学到目前为止的一个的回顾，再小小地对之后的打算进行一下畅想与展望。<br>\n<a href=\"https://www.bilibili.com/video/BV1hJ4m1e7fx/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">summay 复盘 回顾与展望</a></p>\n</li>\n</ol>"},"title":"MIT 6.S081 操作系统 课程导读和源码浅析"} }],
  ["/posts/const.html", { loader: () => import(/* webpackChunkName: "const.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/const.html.js"), meta: {"_blog":{"title":"const","author":"","date":null,"category":["Cpp STL"],"tag":["Cpp"],"excerpt":"\n<p>讲讲C++当中<strong>const</strong>这个修饰符啊</p>\n<h3>解释</h3>\n<p>const全称constant，就是常量的意思。一般来说，用于修饰一些不变的量。</p>\n<h3>对象</h3>\n<p>先来聊聊比较重要的一个，const到底怎么看，它修饰的对象是谁？</p>\n<blockquote>\n<p>有一个one-fit-all的万能公式:<br>\n<strong>先看左边，再看右边</strong></p>\n</blockquote>\n<p>也就是说，const默认修饰它左边的东西，如果它的左边没有任何东西就修饰它右边的东西。</p>\n<p>举几个例子:</p>"},"title":"const"} }],
  ["/posts/cs144_lab0.html", { loader: () => import(/* webpackChunkName: "cs144_lab0.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/cs144_lab0.html.js"), meta: {"_blog":{"title":"Stanford CS144  lab 0","author":"","date":null,"category":["CS144 lab"],"tag":["Network"],"excerpt":"\n<p><a href=\"https://www.bilibili.com/video/BV1pM4m197ma/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\" target=\"_blank\" rel=\"noopener noreferrer\">视频讲解</a></p>\n<h3>webget</h3>\n<ul>\n<li>我的解法</li>\n</ul>\n<div class=\"language-cpp\" data-ext=\"cpp\" data-title=\"cpp\"><pre class=\"language-cpp\"><code><span class=\"token keyword\">void</span> <span class=\"token function\">get_URL</span><span class=\"token punctuation\">(</span> <span class=\"token keyword\">const</span> string<span class=\"token operator\">&amp;</span> host<span class=\"token punctuation\">,</span> <span class=\"token keyword\">const</span> string<span class=\"token operator\">&amp;</span> path <span class=\"token punctuation\">)</span>\n<span class=\"token punctuation\">{</span>\n  TCPSocket sock<span class=\"token punctuation\">;</span>\n  sock<span class=\"token punctuation\">.</span><span class=\"token function\">connect</span><span class=\"token punctuation\">(</span><span class=\"token function\">Address</span><span class=\"token punctuation\">(</span>host<span class=\"token punctuation\">,</span> <span class=\"token string\">\"http\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  sock<span class=\"token punctuation\">.</span><span class=\"token function\">write</span><span class=\"token punctuation\">(</span><span class=\"token string\">\"GET \"</span> <span class=\"token operator\">+</span> path <span class=\"token operator\">+</span> <span class=\"token string\">\" HTTP/1.1\\r\\nHost: \"</span> <span class=\"token operator\">+</span> host <span class=\"token operator\">+</span> <span class=\"token string\">\"\\r\\nConnection: close\\r\\n\\r\\n\"</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">while</span> <span class=\"token punctuation\">(</span><span class=\"token operator\">!</span>sock<span class=\"token punctuation\">.</span><span class=\"token function\">eof</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">)</span> <span class=\"token punctuation\">{</span>\n    string recvd<span class=\"token punctuation\">;</span>\n    sock<span class=\"token punctuation\">.</span><span class=\"token function\">read</span><span class=\"token punctuation\">(</span>recvd<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n    cout <span class=\"token operator\">&lt;&lt;</span> recvd<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n\n  sock<span class=\"token punctuation\">.</span><span class=\"token function\">close</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n  sock<span class=\"token punctuation\">.</span><span class=\"token function\">shutdown</span><span class=\"token punctuation\">(</span>SHUT_RDWR<span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n  <span class=\"token keyword\">return</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre></div>"},"title":"Stanford CS144  lab 0"} }],
  ["/posts/cs144_lab2.html", { loader: () => import(/* webpackChunkName: "cs144_lab2.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/cs144_lab2.html.js"), meta: {"_blog":{"title":"Stanford CS144 lab 2","author":"","date":null,"category":["CS144 lab"],"tag":["Network"],"excerpt":"\n<p>这个lab分为两个部分——wrap和unwrap，TCP receiver的实现<br>\n回顾lab0和lab1，它们其实都是一个造积木的过程，而到了lab2当中，当然wrap和unwrap也还是在造积木。但到了TCPreceiver则开始搭积木了，它将之前我们所创建的几个小Class，通过调用其中的几个API给组合在了一起</p>\n<h3>wrap和unwrap的实现</h3>\n<ul>\n<li>解释</li>\n</ul>\n<p>先来讲讲这两个函数的实现，而在这之前先让我们了解一下这三个概念</p>\n<p>我先来自己解释一波:</p>\n<ol>\n<li>seqno(Sequence Numbers): 类型为Wrap32，实际里面的组成其实就是32位的一个数(如下)，能从32位的任何数(ISN)开始<div class=\"language-cpp\" data-ext=\"cpp\" data-title=\"cpp\"><pre class=\"language-cpp\"><code><span class=\"token keyword\">struct</span> <span class=\"token class-name\">Wrap32</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token keyword\">uint32_t</span> raw_number <span class=\"token punctuation\">{</span><span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>\n</code></pre></div></li>\n<li>abs seqno(Absolute Sequence Numbers): 类型是uint64_t，这个就是一个64位的数，始于0</li>\n<li>stream index(Stream indices): 类型是uint64_t，其实就是我们之前reassembler里面的那个index</li>\n</ol>"},"title":"Stanford CS144 lab 2"} }],
  ["/posts/cs144_lab3.html", { loader: () => import(/* webpackChunkName: "cs144_lab3.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/cs144_lab3.html.js"), meta: {"_blog":{"title":"Stanford CS144 lab 3","author":"","date":null,"category":["CS144 lab"],"tag":["Network"],"excerpt":"\n<p>这个lab的主题是实现TCP sender</p>\n<blockquote>\n<p><strong>前置要求</strong>: 推荐不但要做完之前几个lab，还需要了解一定的TCP传输的知识，比如<strong>滑动窗口</strong>、<strong>重传策略</strong>啥的</p>\n</blockquote>\n"},"title":"Stanford CS144 lab 3"} }],
  ["/posts/RAII.html", { loader: () => import(/* webpackChunkName: "RAII.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/RAII.html.js"), meta: {"_blog":{"title":"对象生存期与资源管理","author":"","date":null,"category":["Cpp STL"],"tag":["Cpp"],"excerpt":"\n<blockquote>\n<p>引: c++不像Java或是Python拥有自动的回收处理机制</p>\n</blockquote>\n<p>这篇来讲讲cpp当中的智能指针，正如引子讲的那样，c或c类语言基本都没一种自动的回收机制，这也是出现什么野指针、空悬指针、内存泄漏等等tricky bug的原因。</p>\n<p>在c当中确确实实就只能通过很小心翼翼的设计才能避免这个问题，但是在c++当中引入的RAII可以一定程度的解决这个问题。</p>\n<p>先推荐一篇<a href=\"https://learn.microsoft.com/zh-cn/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170\" target=\"_blank\" rel=\"noopener noreferrer\">Microsoft的官方文档</a>，讲的非常好</p>"},"title":"对象生存期与资源管理"} }],
  ["/posts/std_move.html", { loader: () => import(/* webpackChunkName: "std_move.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/std_move.html.js"), meta: {"_blog":{"title":"std::move","author":"","date":null,"category":["Cpp STL"],"tag":["Cpp"],"excerpt":"\n<h3>左值和右值</h3>\n<ol>\n<li>左值: 赋值表达式结束后仍然存在的持久对象</li>\n<li>右值: 赋值表达式用完即丢的临时对象</li>\n</ol>\n<div class=\"language-cpp\" data-ext=\"cpp\" data-title=\"cpp\"><pre class=\"language-cpp\"><code>    <span class=\"token keyword\">int</span> n<span class=\"token punctuation\">;</span>\n    n <span class=\"token operator\">=</span> <span class=\"token number\">1</span><span class=\"token punctuation\">;</span> <span class=\"token comment\">// 这里n是左值，1是右值，n在赋值完还会继续存在，但是1就会消失</span>\n    <span class=\"token number\">1</span> <span class=\"token operator\">=</span> n<span class=\"token punctuation\">;</span> <span class=\"token comment\">// 这里就是一个错误的语法，值从右传递到左，1在分配后就会被移除</span>\n</code></pre></div>"},"title":"std::move"} }],
  ["/posts/virtual.html", { loader: () => import(/* webpackChunkName: "virtual.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/virtual.html.js"), meta: {"_blog":{"title":"虚函数","author":"","date":null,"category":["Cpp STL"],"tag":["Cpp"],"excerpt":"\n<ul>\n<li>\n<p>虚函数</p>\n</li>\n<li>\n<p>构造函数(constructor)</p>\n</li>\n<li>\n<p>析构函数(deconstructor)</p>\n</li>\n</ul>\n"},"title":"虚函数"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/6.s081/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/category/6.s081/index.html.js"), meta: {"title":"Category 6.S081"} }],
  ["/category/cpp-stl/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/category/cpp-stl/index.html.js"), meta: {"title":"Category Cpp STL"} }],
  ["/category/cs144-lab/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/category/cs144-lab/index.html.js"), meta: {"title":"Category CS144 lab"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/operating-system/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/tag/operating-system/index.html.js"), meta: {"title":"Tag Operating System"} }],
  ["/tag/cpp/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/tag/cpp/index.html.js"), meta: {"title":"Tag Cpp"} }],
  ["/tag/network/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/tag/network/index.html.js"), meta: {"title":"Tag Network"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/web/vuepress-starter/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
]);
