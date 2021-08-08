import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { Share } from '@components'
import cooperation from '@assets/images/cooperation.png';
import followMe from '@assets/images/follow-me.png';
import productBulletin from '@assets/images/product-bulletin.png';


import './index.scss'
export default class About extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      aboutList: [
        {
          icon: 'home',
          title: '关于我们',
          picture: followMe,
          id: 111
        },
        {
          icon: 'list',
          title: '产品列表',
          picture: productBulletin,
          width: 230,
          height: 410,
          id: 222,
          link: 'proList'

        },
        {
          icon: 'help',
          title: '反馈建议',
          picture: followMe,
          clickHandler: this.toHelpPage,
          id: 333,
          link: 'help'
        },
        {
          icon: 'settings',
          title: '合作',
          picture: cooperation,
          id: 444

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
    const { aboutList = [] } = this.state
    return (
      <>
        <View className="about-container">
          <View className="about-info-wrapper"></View>
          <View className="common-tools-wrapper">
            <View className="tools-title">常用工具</View>
            <View className="common-tools-list">
              {
                aboutList.map(({ icon, title, id, picture, width= 230, height=230 }) => (
                    <Share key={id} picture={picture} width={width} height={height}>
                      <View className="common-tools-item">
                        <AtIcon value={icon} size='30' color='#101010 100%' className="icon"></AtIcon>
                        <Text>{title}</Text>
                      </View>
                    </Share>
                ))
              }
            </View>

          </View>
        </View>
      </>
    )
  }
}
