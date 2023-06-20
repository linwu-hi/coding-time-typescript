import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  '/': [
    '/CHANGELOG',
    '/CONTRIBUTING',
    {
      text:'基础',
      // collapsible:true,
      prefix:'base/',
      link:'base/',
      children:[
        '概述',
        '类型',
        '函数',
        '接口和类',
        '枚举和泛型',
        '命名空间和模块'
      ]
    },
    {
      text:'进阶',
      // collapsible:true,
      prefix:'advance/',
      link:'advance/',
      children:[
        '类型系统',
        '高级类型',
        '类型推断',
        '类型守卫',
        '泛型和类型体操',
        '结构化类型',
        '协变和逆变',
        '扩展类型定义',
        '解读TSConfig'
      ]
    }
  ],
});
