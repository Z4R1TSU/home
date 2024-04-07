import { defineClientConfig } from "vuepress/client";
import CodeTabs from "E:/web/vuepress-starter/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/web/vuepress-starter/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/web/vuepress-starter/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import { useHint } from "E:/web/vuepress-starter/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "E:/web/vuepress-starter/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
  },
  setup: () => {
useHint();
  }
});
