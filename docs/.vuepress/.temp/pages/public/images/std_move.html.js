import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/public/images/std_move.html.vue"
const data = JSON.parse("{\"path\":\"/public/images/std_move.html\",\"title\":\"std::move\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"左值和右值\",\"slug\":\"左值和右值\",\"link\":\"#左值和右值\",\"children\":[]},{\"level\":3,\"title\":\"move的原理\",\"slug\":\"move的原理\",\"link\":\"#move的原理\",\"children\":[]},{\"level\":3,\"title\":\"move的优点\",\"slug\":\"move的优点\",\"link\":\"#move的优点\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"public/images/std_move.md\",\"excerpt\":\"\\n<h3>左值和右值</h3>\\n<ol>\\n<li>左值: 赋值表达式结束后仍然存在的持久对象</li>\\n<li>右值: 赋值表达式用完即丢的临时对象</li>\\n</ol>\\n<div class=\\\"language-cpp\\\" data-ext=\\\"cpp\\\" data-title=\\\"cpp\\\"><pre class=\\\"language-cpp\\\"><code>    <span class=\\\"token keyword\\\">int</span> n<span class=\\\"token punctuation\\\">;</span>\\n    n <span class=\\\"token operator\\\">=</span> <span class=\\\"token number\\\">1</span><span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 这里n是左值，1是右值，n在赋值完还会继续存在，但是1就会消失</span>\\n    <span class=\\\"token number\\\">1</span> <span class=\\\"token operator\\\">=</span> n<span class=\\\"token punctuation\\\">;</span> <span class=\\\"token comment\\\">// 这里就是一个错误的语法，值从右传递到左，1在分配后就会被移除</span>\\n</code></pre></div>\"}")
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
