import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/posts/virtual.html.vue"
const data = JSON.parse("{\"path\":\"/posts/virtual.html\",\"title\":\"虚函数\",\"lang\":\"en-US\",\"frontmatter\":{\"category\":[\"C++ STL\"],\"tag\":[\"C++\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/virtual.md\",\"excerpt\":\"\\n<ul>\\n<li>\\n<p>虚函数</p>\\n</li>\\n<li>\\n<p>构造函数(constructor)</p>\\n</li>\\n<li>\\n<p>析构函数(deconstructor)</p>\\n</li>\\n</ul>\\n\"}")
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
