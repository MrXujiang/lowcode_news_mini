import React, { Component } from 'react'
import { AtNoticebar } from 'taro-ui'
import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件

import './index.scss'
export default class Interview extends Component {
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  render () {
    return (
      <>
        <AtNoticebar icon='volume-plus' marquee>暂未开通，敬请期待！</AtNoticebar>
      </>
    )
  }
}
