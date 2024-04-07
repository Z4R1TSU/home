import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/cs144_lab2.html.vue"
const data = JSON.parse("{\"path\":\"/posts/cs144_lab2.html\",\"title\":\"CS144 lab 2\",\"lang\":\"en-US\",\"frontmatter\":{\"category\":[\"CS144 lab\"],\"tag\":[\"Network\"]},\"headers\":[{\"level\":3,\"title\":\"wrap和unwrap的实现\",\"slug\":\"wrap和unwrap的实现\",\"link\":\"#wrap和unwrap的实现\",\"children\":[]},{\"level\":3,\"title\":\"TCP receiver\",\"slug\":\"tcp-receiver\",\"link\":\"#tcp-receiver\",\"children\":[]}],\"git\":{\"updatedTime\":1712492094000,\"contributors\":[{\"name\":\"Zari_Tsu\",\"email\":\"zaritsu030907@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/cs144_lab2.md\",\"excerpt\":\"\\n<p>这个lab分为两个部分——wrap和unwrap，TCP receiver的实现<br>\\n回顾lab0和lab1，它们其实都是一个造积木的过程，而到了lab2当中，当然wrap和unwrap也还是在造积木。但到了TCPreceiver则开始搭积木了，它将之前我们所创建的几个小Class，通过调用其中的几个API给组合在了一起</p>\\n<h3>wrap和unwrap的实现</h3>\\n<ul>\\n<li>解释</li>\\n</ul>\\n<p>先来讲讲这两个函数的实现，而在这之前先让我们了解一下这三个概念</p>\\n<p>我先来自己解释一波:</p>\\n<ol>\\n<li>seqno(Sequence Numbers): 类型为Wrap32，实际里面的组成其实就是32位的一个数(如下)，能从32位的任何数(ISN)开始<div class=\\\"language-cpp\\\" data-ext=\\\"cpp\\\" data-title=\\\"cpp\\\"><pre class=\\\"language-cpp\\\"><code><span class=\\\"token keyword\\\">struct</span> <span class=\\\"token class-name\\\">Wrap32</span> <span class=\\\"token punctuation\\\">{</span>\\n    <span class=\\\"token keyword\\\">uint32_t</span> raw_number <span class=\\\"token punctuation\\\">{</span><span class=\\\"token punctuation\\\">}</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div></li>\\n<li>abs seqno(Absolute Sequence Numbers): 类型是uint64_t，这个就是一个64位的数，始于0</li>\\n<li>stream index(Stream indices): 类型是uint64_t，其实就是我们之前reassembler里面的那个index</li>\\n</ol>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
