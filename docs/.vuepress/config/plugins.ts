// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html
const loveMe = require('../plugins/love-me')
import {UserPlugins} from 'vuepress/config'
// @ts-ignore
import fs from 'fs'
import {resolve} from 'path'
// @ts-ignore
import moment from 'moment-timezone'

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  [loveMe,
    {
      color: '#11a8cd',
      excludeClassName: 'theme-vdoing-content'
    }
  ],
  // ['pangu'], // 自动在文章中英文与汉字之间添加空格
  ['fulltext-search'],
  ['sitemap',
    {hostname: `https://${fs.readFileSync(resolve(__dirname, '../public', 'CNAME'))}`}
  ],
  ['@vuepress/last-updated',
    {
      transformer: timestamp => {
        let date = moment(timestamp).tz('Asia/Shanghai');
        return date.format('YYYY-MM-DD HH:mm:ss')
      }
    }
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
