import React, { Component } from 'react'
import Taro from '@tarojs/taro'

// 引入 Swiper, SwiperItem 组件
import { View } from '@tarojs/components'
import { HomeScroll, HomeTable } from '../home/components'
import { CombatList } from '../combat/components'

import './index.scss'

const config = {
  tabList: [{ title: '学习打卡' }],
  listInfo: [
    {
      title: 'javascript算法第三周打卡',
      info: '之前因为工作原因接触了很多有意思的算法知识,为了巩固大家的算法基础和编程能力,笔者将开展为期2个月的算法学习打卡, 每周3-5次算法训练, 并附有算法题的答案, 供大家学习参考. 接下来我们复盘第三周的算法打卡内容.',
      createTime: ' 2020-06-01',
      img: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ibnlaUsCDDUicUgeDc5NTdmggsWqhPNREYcsic06XibRhc8LX1VQtHvgmpuVVch608VLjicyHIQy31VGg/0',
      link: 'clockingIn',
      id: '2247484544'
    },
    {
      title: 'javascript算法学习打卡(第二周)',
      info: '之前因为工作原因接触了很多有意思的算法知识,为了巩固大家的算法基础和编程能力,笔者将开展为期2个月的算法学习打卡, 每周3-5次算法训练, 并附有算法题的答案, 供大家学习参考. 接下来我们复盘第二周的算法打卡内容.',
      createTime: '2020-05-26',
      img: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114icZj4icXicV5RJ8td8OyU6t3I245fM1fyeXMcHTIw6hicos0oTLSsmtz3CT6hcGQ0UPPJ2ymaM8P5OcA/0',
      link: 'clockingIn',
      id: '789798'
    },
    {
      title: 'javascript算法学习打卡(第一周)',
      info: '之前因为工作原因接触了很多有意思的算法知识,为了巩固大家的算法基础和编程能力,笔者将开展为期2个月的算法学习打卡, 每周3-5次算法训练, 并附有算法题的答案, 供大家学习参考. 接下来我们复盘第一周的算法打卡内容.',
      createTime: '2020-05-19',
      img: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149gynmx5N9VtQMva1icalQcNeofuZjibhYEXMQl9vtpMYawwepeib7w3490ibtBp3HicicASypLhVRibTdYg/0',
      link: 'clockingIn',
      id: '342342'
    }
  ]
}
export default class Combat extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  componentDidMount() {
    // Taro.navigateTo({
    //   url: '/pages/webView/index?link=clockingIn'
    // })
  }

  handleClick = (value) => {
    this.setState({
      current: value
    })
  }

  render () {
    const { tabList, listInfo } = config
    return (
      <>
        <View className="combat-container">
          <HomeScroll bannerTitle={'搜索打卡内容'} />
          <HomeTable tabList={tabList}>
            <CombatList listInfo={listInfo} />
          </HomeTable>
        </View>
      </>
    )
  }
}
