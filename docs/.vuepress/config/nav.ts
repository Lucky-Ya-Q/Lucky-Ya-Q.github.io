// nav 配置, 即上方导航栏

import {NavItem} from 'vuepress/config';

export default <Array<NavItem>>[
  {text: 'Home', link: '/'},
  {
    text: '博客',
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ],
  },
  {
    text: '笔记',
    link: '/note/',
    items: [
      {text: 'RuoYi-Vue', link: '/ruoyi-vue/'},
      {text: '《Vue.js设计与实现》', link: '/vue-3-book/'},
    ],
  },
  {
    text: 'Vue全家桶',
    items: [
      {text: 'Vue', link: 'https://staging-cn.vuejs.org'},
      {text: 'Vue Router', link: 'https://router.vuejs.org/zh/'},
      {text: 'Vuex', link: 'https://vuex.vuejs.org/zh/'},
      {
        text: '开发工具', items: [
          {text: 'Vue CLI', link: 'https://cli.vuejs.org/zh/'},
          {text: 'Devtools', link: 'https://devtools.vuejs.org/'}
        ]
      },
      {
        text: '组件库', items: [
          {text: 'Element Plus', link: 'https://element-plus.gitee.io/zh-CN/'},
          {text: 'Ant Design Vue', link: 'https://next.antdv.com/docs/vue/getting-started-cn/'}
        ]
      }
    ]
  },
  {text: '友情链接', link: '/friends/'},
];
