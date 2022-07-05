// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import {UserPlugins} from 'vuepress/config';
// @ts-ignore
import fs from 'fs';
import {resolve} from 'path';
import type {SmPlayerPluginOption} from 'vuepress-plugin-smplayer/types';
// @ts-ignore
import dayjs from 'dayjs'

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  ['sitemap',
    {
      hostname: `https://${fs.readFileSync(
        resolve(__dirname, '../public', 'CNAME')
      )}`,
    },
  ],
  ['smplayer',
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ['*'],
          moreVideoAttr: {
            preload: 'auto',
          },
        },
      },
    } as SmPlayerPluginOption,
  ],
  ['pangu'],
  ['one-click-copy',
    {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
      copyMessage: '复制成功',
      duration: 1000,
      showInMobile: false,
    },
  ],
  ['zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  ['fulltext-search'],
  ['comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: 'a50cb81ebd26e513ef92',
        clientSecret: '58e3d7da18176fde0369529926ff35ccbedf9c43',
        repo: 'Lucky-Ya-Q.github.io', // GitHub 仓库
        owner: 'Lucky-Ya-Q', // GitHub仓库所有者
        admin: ['Lucky-Ya-Q'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body: '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  ['@vuepress/last-updated',
    {
      transformer: timestamp => {
        return dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')
      },
    },
  ],
];
