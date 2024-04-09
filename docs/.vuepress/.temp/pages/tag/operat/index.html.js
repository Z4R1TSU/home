import comp from "E:/web/vuepress-starter/docs/.vuepress/.temp/pages/tag/operat/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/operat/\",\"title\":\"Tag Operat\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Tag Operat\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Operat\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
