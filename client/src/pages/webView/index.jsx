import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, WebView } from '@tarojs/components'

import './index.scss'

export default class LinkWebView extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      url: {
        proList: 'http://h5.dooring.cn',
        help: 'http://h5.dooring.cn/h5?tid=A71EE8BB&n=徐小夕'
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
    return (
      <WebView src={url[link]} />
    )
  }
}
