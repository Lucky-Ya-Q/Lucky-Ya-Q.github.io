// 示例全部使用 .ts 配置, 详见说明 https://v1.vuepress.vuejs.org/zh/guide/typescript-as-config.html

import {defineConfig4CustomTheme} from 'vuepress/config'
import {VdoingThemeConfig} from 'vuepress-theme-vdoing/types'
import themeConfig from './config/themeVdoingConfig'
import plugins from './config/plugins'
import head from './config/head'

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: '山野下', //站点标题, 建议修改
  description: '好好爱自己 就有人会爱你', //描述, 建议修改
  dest: 'dist', //输出目录, 默认是 dist,无需修改
  // base: '/vdoing-template/', //部署站点的基础路径, 默认是 /, 不懂不要开启
  shouldPrefetch: () => false, //是否开启预加载, 建议不开启, 无需修改
  head: head, //全局头部信息配置, 如需修改请修改 config/head.ts
  theme: 'vdoing', //主题, 无需修改
  themeConfig, //主题配置, 如需修改请修改 config/themeVdoingConfig.ts
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4', 'h5', 'h6'] // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },
  plugins, //插件配置, 如需修改请修改 config/plugins.ts
  extraWatchFiles: [
    '.vuepress/config.ts',
    '.vuepress/config/htmlModules.ts'
  ] // 监听文件变化并重新构建
})
