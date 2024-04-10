import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/6s081_overview.html.vue"
const data = JSON.parse("{\"path\":\"/posts/6s081_overview.html\",\"title\":\"MIT 6.S081 操作系统 课程导读和源码浅析\",\"lang\":\"en-US\",\"frontmatter\":{\"category\":[\"6.S081\"],\"tag\":[\"Operating System\"]},\"headers\":[{\"level\":3,\"title\":\"课程导读\",\"slug\":\"课程导读\",\"link\":\"#课程导读\",\"children\":[]},{\"level\":3,\"title\":\"源码浅析\",\"slug\":\"源码浅析\",\"link\":\"#源码浅析\",\"children\":[]},{\"level\":3,\"title\":\"我的代码实现\",\"slug\":\"我的代码实现\",\"link\":\"#我的代码实现\",\"children\":[]}],\"git\":{\"updatedTime\":1712656291000,\"contributors\":[{\"name\":\"Zari_Tsu\",\"email\":\"zaritsu030907@gmail.com\",\"commits\":2}]},\"filePathRelative\":\"posts/6s081_overview.md\",\"excerpt\":\"\\n<blockquote>\\n<p>这部分均以视频形式来讲解，发布在BiliBili当中，就不出文字博客了</p>\\n</blockquote>\\n<blockquote>\\n<p>叠个甲：我做视频和博客的初衷是为了类似想开源代码一样开源我的知识。如果我有什么不对的地方，望大家多多包涵，如果能帮我指正或扩充，我将感激不尽。</p>\\n</blockquote>\\n<p>我将其分为两大块: 课程导读、源码浅析。</p>\\n<h3>课程导读</h3>\\n<p>对应的lecture共有15讲，我人为将其分为10讲</p>\\n<ol>\\n<li>\\n<p><strong>overview</strong> 总述概览 前置知识:<br>\\n这部分内容对应官方发布的lecture1-3，涉及一些计算机科学的基础知识，是为了激发大家的兴趣而设计，故速览即可。这是我首次尝试制作视频，讲得有些紧张，请见谅。<br>\\n这个是第一版做的<a href=\\\"https://www.bilibili.com/video/BV1ku4m1P77U/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">overview</a>，也是我第一次做视频，讲的比较紧张。这个是我的<a href=\\\"https://www.bilibili.com/video/BV1N2421T7nM/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">重制版</a>。</p>\\n</li>\\n<li>\\n<p><strong>page table</strong> 内存虚拟化与页表的原理及实现:<br>\\n对应lecture4。我们知道操作系统的作用在于对硬件进行抽象，而<strong>page table</strong>正是这种抽象的一部分，它是内存虚拟化中最重要且最强大的机制之一。\\n<a href=\\\"https://www.bilibili.com/video/BV1N2421T7nM/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec4 page table页表和内存虚拟化</a></p>\\n</li>\\n<li>\\n<p><strong>GDB</strong>和<strong>RISC-V</strong>的基本知识和小技巧:<br>\\n对应lecture5。详解如何使用GDB去调试XV6，包括常用的调试命令到如何对用户态的XV6文件进行调试；以及RISC-V的基本概念和32个通用寄存器，加上call convention即调用约定的介绍。\\n<a href=\\\"https://www.bilibili.com/video/BV1Pm411D7Pt/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec5 GDB调试和RISC-V寄存器的调用协定</a></p>\\n</li>\\n<li>\\n<p><strong>trap</strong>和system call:<br>\\n对应lecture6。涵盖lecture6。trap机制涉及对进程的操作，而进程是对CPU功能的一种抽象。system call即系统调用，可类比为操作系统提供给用户的API，让我们得以在内核级别进行操作。system call的过程，即用户态到内核态的切换，就是通过trap机制来完成的。\\n<a href=\\\"https://www.bilibili.com/video/BV1rv421y7ta/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec6 trap陷阱机制 走进system call的前世今生</a></p>\\n</li>\\n<li>\\n<p><strong>page fault</strong>和三种机制:<br>\\n对应lecture7。在查询页表时遇到的失败被称为page fault。但这种失败同时也为我们带来了新的转机，由此衍生出三大机制：<strong>Lazy Allocation</strong>*, <strong>Zero Fill on Demand</strong>, <strong>Copy On Write Fork</strong>。尽管在XV6中这些机制未得到实现（只会简单报告page fault），但在现代Linux系统中，它们都得以完整实施。\\n<a href=\\\"https://www.bilibili.com/video/BV16u4m1P7c3/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec7: page fault和应运而生的三种机制 懒惰分配，按需填零，写时拷贝</a></p>\\n</li>\\n<li>\\n<p><strong>interrupt</strong> 中断与外部设备的I/O的互动:<br>\\n对应lecture9。探讨了中断机制的内涵，中断不同于同步的<strong>trap</strong>——源自计算机内部，<strong>interrupt</strong>是由外部设备发起的异步行为，用来响应硬件事件，促进CPU与外设的有效沟通。<br>\\n<a href=\\\"https://www.bilibili.com/video/BV1pW421N7Eh/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec9: interrupt中断与外部设备的IO 换一个视角看trap</a></p>\\n</li>\\n<li>\\n<p><strong>lock</strong> 锁机制:<br>\\n对应lecture10。锁机制是并发编程的基石，旨在管理多个进程对同一资源的并发访问。本讲介绍了包括<strong>Dead Lock</strong>（一种进程间因资源竞争产生的相互等待状态），<strong>Spin Lock</strong>，<strong>Mutex Lock</strong>，和<strong>Blocking Lock</strong>在内的多个关键概念。<br>\\n<a href=\\\"https://www.bilibili.com/video/BV1pH4y1J7rB/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec10: lock 死锁 自旋锁 互斥锁 阻塞锁</a></p>\\n</li>\\n<li>\\n<p>进程的切换与调度:<br>\\n对应lecture11-12。进程切换与调度是操作系统中不可或缺的一环，它关乎资源分配的效率及公平性。主要围绕着<code>sched() scheduling()</code>这几个函数来展开讲述。但是这部分是我学的不扎实的地方，有很多知识点需要我们去通过实际的做多线程、协程类的项目才能弄懂的，我现在对这方面很欠缺，所以视频完完全全就图一乐。<br>\\n<a href=\\\"https://www.bilibili.com/video/BV1Em411S7Tm/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec11-12: 调度和进程切换</a></p>\\n</li>\\n<li>\\n<p><strong>file system</strong> 文件系统相关内容:<br>\\n对应lecture13-15。围绕文件系统的整体构架进行大概的解读，尤其强调日志机制在系统崩溃恢复中的核心作用。<br>\\n<a href=\\\"https://www.bilibili.com/video/BV1yy421q7JS/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">lec13-15: file system和crash recovery</a></p>\\n</li>\\n<li>\\n<p><strong>summary</strong> 课程总结和复盘:<br>\\n是我自己个人对于MIT的操作系统，也就是6.S081这门课程学到了什么，做了一个小小的总结。也是我对大学到目前为止的一个的回顾，再小小地对之后的打算进行一下畅想与展望。<br>\\n<a href=\\\"https://www.bilibili.com/video/BV1hJ4m1e7fx/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">summay 复盘 回顾与展望</a></p>\\n</li>\\n</ol>\"}")
export { comp, data }
