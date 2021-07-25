import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
// 引入 Swiper, SwiperItem 组件

import './list.scss'
export default class Home extends Component {
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  render () {
    const { listInfo } = this.props
    return (
      <>
        {
          listInfo.map(({ title, info, createTime, img }) => (
            <View className="list-item">
              <View className="top-title">{title}</View>
              <View className="bottom-info">
                <View className="info-lf">
                  <View className="info">{info}</View>
                  <View className="time">{createTime}</View>
                </View>
                <Image src={img} className="img-rt" mode="widthFix" ></Image>
              </View>
            </View>
          ))
        }
      </>
    )
  }
}
