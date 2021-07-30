import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件

import './index.scss'
export default class CombatList extends Component {
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
          listInfo.map(({ title, info, createTime, img, id }) => (
            <View
              key={id}
              className="list-item" onClick={() => {
                Taro.navigateTo({
                  url: '/pages/combatDetail/index?id=' + id
                })
              }}>
              <View className="top-title">{title}</View>
              <View className="bottom-info">
                <View className="info-lf">
                  <View className="info">{info}</View>
                  <View className="time">{createTime}</View>
                </View>
                <Image src={img} lazyLoad className="img-rt" mode="widthFix" ></Image>
              </View>
            </View>
          ))
        }
      </>
    )
  }
}
