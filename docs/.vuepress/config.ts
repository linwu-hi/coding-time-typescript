import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

const base = process.env["BASE"] ? '/typescript/':'/coding-time-typescript/'

export default defineUserConfig({
  base,

  dest: "./dist",
  head:[
    ['link', { rel: 'icon', href: '/assets/image/icon.png' }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "编程时光",
    },
  },

  theme,

  shouldPrefetch: false,
});
