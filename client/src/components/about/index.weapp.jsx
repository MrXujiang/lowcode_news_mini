import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件

import './index.scss'
export default class About extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      aboutList: [
        {
          icon: 'home',
          title: '关于我们'

        },
        {
          icon: 'list',
          title: '产品列表'

        },
        {
          icon: 'help',
          title: '反馈建议',
          clickHandler: this.toHelpPage
        },
        {
          icon: 'settings',
          title: '合作'

        }
      ]
    }
  }

  toHelpPage = () => {
    Taro.navigateTo({
      url: '/pages/help/index'
    })
  }

  render () {
    const { aboutList } = this.state
    return (
      <>
        <View className="about-container">
          <View className="about-info-wrapper"></View>
          <View className="common-tools-wrapper">
            <View className="tools-title">常用工具</View>
            <View className="common-tools-list">
              {
                aboutList.map(({ icon, title, clickHandler }) => (
                  <>
                    <View onClick={clickHandler} className="common-tools-item">
                      <AtIcon value={icon} size='30' color='#101010 100%' className="icon"></AtIcon>
                      <Text>{title}</Text>
                    </View>
                  </>

                ))
              }
            </View>

          </View>
        </View>
      </>
    )
  }
}
