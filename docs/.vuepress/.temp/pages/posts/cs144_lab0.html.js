import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/cs144_lab0.html.vue"
const data = JSON.parse("{\"path\":\"/posts/cs144_lab0.html\",\"title\":\"CS144  lab 0\",\"lang\":\"en-US\",\"frontmatter\":{\"category\":[\"CS144 lab\"],\"tag\":[\"Network\"]},\"headers\":[{\"level\":3,\"title\":\"webget\",\"slug\":\"webget\",\"link\":\"#webget\",\"children\":[]},{\"level\":3,\"title\":\"byte stream\",\"slug\":\"byte-stream\",\"link\":\"#byte-stream\",\"children\":[]}],\"git\":{\"updatedTime\":1712492094000,\"contributors\":[{\"name\":\"Zari_Tsu\",\"email\":\"zaritsu030907@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/cs144_lab0.md\",\"excerpt\":\"\\n<p><a href=\\\"https://www.bilibili.com/video/BV1pM4m197ma/?spm_id_from=333.999.0.0&amp;vd_source=f53099189814dd887f4ab25638e07406\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">视频讲解</a></p>\\n<h3>webget</h3>\\n<ul>\\n<li>我的解法</li>\\n</ul>\\n<div class=\\\"language-cpp\\\" data-ext=\\\"cpp\\\" data-title=\\\"cpp\\\"><pre class=\\\"language-cpp\\\"><code><span class=\\\"token keyword\\\">void</span> <span class=\\\"token function\\\">get_URL</span><span class=\\\"token punctuation\\\">(</span> <span class=\\\"token keyword\\\">const</span> string<span class=\\\"token operator\\\">&amp;</span> host<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token keyword\\\">const</span> string<span class=\\\"token operator\\\">&amp;</span> path <span class=\\\"token punctuation\\\">)</span>\\n<span class=\\\"token punctuation\\\">{</span>\\n  TCPSocket sock<span class=\\\"token punctuation\\\">;</span>\\n  sock<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">connect</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token function\\\">Address</span><span class=\\\"token punctuation\\\">(</span>host<span class=\\\"token punctuation\\\">,</span> <span class=\\\"token string\\\">\\\"http\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  sock<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">write</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token string\\\">\\\"GET \\\"</span> <span class=\\\"token operator\\\">+</span> path <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\" HTTP/1.1\\\\r\\\\nHost: \\\"</span> <span class=\\\"token operator\\\">+</span> host <span class=\\\"token operator\\\">+</span> <span class=\\\"token string\\\">\\\"\\\\r\\\\nConnection: close\\\\r\\\\n\\\\r\\\\n\\\"</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">while</span> <span class=\\\"token punctuation\\\">(</span><span class=\\\"token operator\\\">!</span>sock<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">eof</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">)</span> <span class=\\\"token punctuation\\\">{</span>\\n    string recvd<span class=\\\"token punctuation\\\">;</span>\\n    sock<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">read</span><span class=\\\"token punctuation\\\">(</span>recvd<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n    cout <span class=\\\"token operator\\\">&lt;&lt;</span> recvd<span class=\\\"token punctuation\\\">;</span>\\n  <span class=\\\"token punctuation\\\">}</span>\\n\\n  sock<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">close</span><span class=\\\"token punctuation\\\">(</span><span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n  sock<span class=\\\"token punctuation\\\">.</span><span class=\\\"token function\\\">shutdown</span><span class=\\\"token punctuation\\\">(</span>SHUT_RDWR<span class=\\\"token punctuation\\\">)</span><span class=\\\"token punctuation\\\">;</span>\\n\\n  <span class=\\\"token keyword\\\">return</span><span class=\\\"token punctuation\\\">;</span>\\n<span class=\\\"token punctuation\\\">}</span>\\n</code></pre></div>\"}")
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
