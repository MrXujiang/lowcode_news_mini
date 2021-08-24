import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { Share } from '@components'
import cooperation from '@assets/images/cooperation.png'
import followMe from '@assets/images/follow-me.png'

import './index.scss'

const ToolsItem = ({ icon, title, link }) => (
  <View className="common-tools-item" onClick={() => { link && Taro.navigateTo({ url: link }) }}>
    <AtIcon value={icon} size='30' color='#101010 100%' className="icon"></AtIcon>
    <Text>{title}</Text>
  </View>
)
export default class About extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      aboutList: [
        {
          icon: 'home',
          title: '关于我们',
          id: 111,
          link: '/pages/aboutMeDetail/index'
        },
        {
          icon: 'list',
          title: '产品列表',
          // picture: productBulletin,
          // width: 250,
          // height: 445,
          id: 222,
          link: '/pages/productList/index'

        },
        {
          icon: 'help',
          title: '反馈建议',
          picture: followMe,
          clickHandler: this.toHelpPage,
          id: 333
          // link: 'help'
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
                aboutList.map(({ icon, title, id, picture, width = 230, height = 230, link }) => (
                  !link ? <Share key={id} picture={picture} width={width} height={height}>
                    <ToolsItem icon={icon} title={title}></ToolsItem>
                  </Share> : <ToolsItem link={link} icon={icon} title={title}></ToolsItem>
                ))
              }
            </View>

          </View>
        </View>
      </>
    )
  }
}
