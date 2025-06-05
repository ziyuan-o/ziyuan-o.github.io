/*
 * @Author: XJN
 * @Date: 2023-07-02 09:37:16
 * @LastEditors: xiaojunnanya
 * @LastEditTime: 2024-01-19 17:17:12
 * @FilePath: \blog\sidebars.js
 * @Description: 
 * @前端实习生：资源挖掘博客: 
 */
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  赚钱资源:[],
  休闲专区:[
    "休闲专区/vip-video",
    "休闲专区/M3U8-video",
    {
      label: '黄色视频',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '休闲专区/黄色视频/yellow-intro',
        '休闲专区/黄色视频/yellow-video',
        '休闲专区/黄色视频/yellow-daohang'
      ],
    }
  ],
  软件仓库:[
    {
      label: 'VPN软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '软件仓库/VPN软件/vpn',
        '软件仓库/VPN软件/艾林克',
        '软件仓库/VPN软件/安易'
        
      ],
    },
    {
      label: 'win软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '软件仓库/win软件/windows',
        '软件仓库/win软件/win-office',
        '软件仓库/win软件/win-game',
        '软件仓库/win软件/win-system',
      ],
    },
    {
      label: '安卓软件',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '软件仓库/安卓软件/Android',
        '软件仓库/安卓软件/and-app',
        '软件仓库/安卓软件/and-tv',
      ],
    }
    
  ]
 
  }





module.exports = sidebars
