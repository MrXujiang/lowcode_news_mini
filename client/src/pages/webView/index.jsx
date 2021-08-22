import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { WebView } from '@tarojs/components'

import './index.scss'

export default class LinkWebView extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      url: {
        proList: 'http://h5.dooring.cn',
        help: 'http://h5.dooring.cn/h5?tid=A71EE8BB&n=徐小夕',
        // 学习打卡
        clockingIn: ['https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247484544&idx=2&sn=f50d5fdb0c0fc2764dd730f124498036&scene=19#wechat_redirect', 'https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247484520&idx=1&sn=75e4ac4a1cc668af124bde16bdacf16d&scene=19#wechat_redirect', 'https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247484495&idx=1&sn=9362a21c10bf4c37124e1404bf5bb9d4&scene=19#wechat_redirect'],
        // 轮播
        clinic: ['https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247486118&idx=2&sn=0a29e3e89cc10dabf5aea8fe05df4079&scene=19#wechat_redirect', 'https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247486910&idx=2&sn=7ce865dd8a8f6769439f0e8eebb72212&scene=19#wechat_redirect'],
        // 实战
        combat: ['https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=100000022&idx=2&sn=2bdfd5ac322a2fd05f620096c7cbcb9e&scene=19#wechat_redirect', 'https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247484346&idx=1&sn=b286d1d4795cb1757902c92162a3ae15&scene=19#wechat_redirect', 'https://mp.weixin.qq.com/s?__biz=MzU2Mzk1NzkwOA==&mid=2247485389&idx=1&sn=29872c6dc7ccd0e46289d46af4cc84e9&scene=19#wechat_redirect']
      }
    }
  }

  componentDidMount () {
    // this.setState({
    //   url: Taro.getCurrentInstance().router.params.to || 'about'
    // })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { url } = this.state
    const link = Taro.getCurrentInstance().router.params.link || 'help'
    const index = Taro.getCurrentInstance().router.params.index
    return (
      <WebView src={index === undefined ? url[link] : url[link][index] } />
    )
  }
}
