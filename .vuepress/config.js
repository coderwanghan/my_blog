const sidebar = require('./siderbar.js');
module.exports = {
  "title": "我的博客",
  "description": "我的学习笔记",
  "dest": "docs",
  "base": '/my_blog/',
  // "base": "/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "plugins": ["@vuepress-reco/vuepress-plugin-comments", "vuepress-plugin-meting"],
  "theme": "reco",
  "themeConfig": {
    "mode": 'light',
    "subSidebar": 'auto',
    // "valineConfig": {
    //   "appId": 'h6i7vXvVEK37fFFwb1DtMJ6W-gzGzoHsz',
    //   "appKey": 'cYI3hypnGAI00CPuzhNfeY8Q',
    // },  
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间线",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      // {
      //   "text": "Docs",
      //   "icon": "reco-message",
      //   "items": [
      //     {
      //       "text": "vuepress-reco",
      //       "link": "/docs/theme-reco/"
      //     }
      //   ]
      // },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/lizi1225",
            "icon": "reco-github"
          }
        ]
      }
    ],
    sidebar,
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "目录索引"
      },
      "tag": {
        "location": 3,
        "text": "标签索引"
      }
    },
    "friendLink": [
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "lizi",
    "authorAvatar": "/avatar.jpg",
    // "record": "xxxx",
    "startYear": "2021"
  },
  "markdown": {
    "lineNumbers": true
  }
}