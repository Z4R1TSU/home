import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/RAII.html.vue"
const data = JSON.parse("{\"path\":\"/posts/RAII.html\",\"title\":\"对象生存期与资源管理\",\"lang\":\"en-US\",\"frontmatter\":{\"category\":[\"C++ STL\"],\"tag\":[\"C++\"]},\"headers\":[{\"level\":3,\"title\":\"对象生存期\",\"slug\":\"对象生存期\",\"link\":\"#对象生存期\",\"children\":[]}],\"git\":{\"updatedTime\":1712492094000,\"contributors\":[{\"name\":\"Zari_Tsu\",\"email\":\"zaritsu030907@gmail.com\",\"commits\":1}]},\"filePathRelative\":\"posts/RAII.md\",\"excerpt\":\"\\n<blockquote>\\n<p>引: c++不像Java或是Python拥有自动的回收处理机制</p>\\n</blockquote>\\n<p>这篇来讲讲cpp当中的智能指针，正如引子讲的那样，c或c类语言基本都没一种自动的回收机制，这也是出现什么野指针、空悬指针、内存泄漏等等tricky bug的原因。</p>\\n<p>在c当中确确实实就只能通过很小心翼翼的设计才能避免这个问题，但是在c++当中引入的RAII可以一定程度的解决这个问题。</p>\\n<p>先推荐一篇<a href=\\\"https://learn.microsoft.com/zh-cn/cpp/cpp/object-lifetime-and-resource-management-modern-cpp?view=msvc-170\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\">Microsoft的官方文档</a>，讲的非常好</p>\"}")
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
