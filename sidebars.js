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
    {
      label: '黄色视频',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        '休闲专区/黄色视频/yellow-intro',
        '休闲专区/黄色视频/yellow-video'
      ],
    }
  ]
 
  }





module.exports = sidebars
