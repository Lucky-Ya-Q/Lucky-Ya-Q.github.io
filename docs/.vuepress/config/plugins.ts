// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import {UserPlugins} from 'vuepress/config'
// @ts-ignore
import fs from 'fs'
import {resolve} from 'path'
import type {SmPlayerPluginOption} from 'vuepress-plugin-smplayer/types'
// @ts-ignore
import dayjs from 'dayjs'

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  ['pangu'],
  ['fulltext-search'],
  ['sitemap',
    {hostname: `https://${fs.readFileSync(resolve(__dirname, '../public', 'CNAME'))}`}
  ],
  ['@vuepress/last-updated',
    {transformer: timestamp => dayjs(timestamp).format('YYYY-MM-DD HH:mm:ss')}
  ],
  ['smplayer',
    {
      artplayer: {
        src: {
          playbackRate: true,
          whitelist: ['*'],
          moreVideoAttr: {
            preload: 'auto'
          }
        }
      }
    } as SmPlayerPluginOption
  ],
  ['nuggets-style-copy',
    {
      copyText: '复制代码',
      tip: {
        content: '复制成功！'
      }
    }
  ],
  ['meting',
    {
      meting: {
        auto: 'https://y.qq.com/n/ryqq/playlist/5194411437.html'
      },
      aplayer: {
        lrcType: 3
      },
      mobile: {
        cover: false
      }
    }
  ],
  ['zooming',
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)'
      }
    }
  ]
]
