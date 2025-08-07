// nav 配置, 即上方导航栏

import {NavItem} from 'vuepress/config'

export default <Array<NavItem>>[
  {text: 'Home', link: '/'},
  {
    text: '博客',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'}
    ]
  },
  {
    text: '笔记',
    link: '/note/',
    items: [
      {text: 'RuoYi-Vue', link: '/ruoyi-vue/'},
      {text: 'RuoYi-App', link: '/ruoyi-app/'},
      {text: 'ContiNew', link: '/continew/'}
    ]
  },
  {
    text: 'Vue全家桶',
    items: [
      {text: 'Vue', link: 'https://cn.vuejs.org'},
      {text: 'Vue Router', link: 'https://router.vuejs.org/zh/'},
      {text: 'Pinia', link: 'https://pinia.vuejs.org/zh/'},
      {
        text: '开发工具', items: [
          {text: 'Vite', link: 'https://cn.vite.dev/'}
        ]
      },
      {
        text: '组件库', items: [
          {text: 'Element Plus', link: 'https://element-plus.org/zh-CN/'},
          {text: 'Vant', link: 'https://vant-ui.github.io/vant/#/zh-CN'},
          {text: 'Ant Design Vue', link: 'https://www.antdv.com/components/overview-cn'}
        ]
      }
    ]
  },
  {text: '友情链接', link: '/friends/'},
  {text: '关于我', link: '/about/'}
]
