import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/category/cs144-lab/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/cs144-lab/\",\"title\":\"Category CS144 lab\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Category CS144 lab\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"CS144 lab\",\"key\":\"category\"},\"layout\":\"Category\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
