import React, { Component } from 'react'
// 引入 Swiper, SwiperItem 组件
import { View } from '@tarojs/components'
import { HomeScroll, HomeTable } from '../home/components'
import { CombatList } from '../combat/components'

import './index.scss'

const config = {
  tabList: [{ title: '学习打卡' }],
  listInfo: [
    {
      title: '全国教育工作会议召开，传递这些重要信息！',
      info: '1月7日至8日，2021年全国教育工作会议在京召开。会议强调，要...',
      createTime: '2021-03-08',
      img: 'https://pic.imgdb.cn/item/60fbe96a5132923bf83b77c6.png',
      id: '234234'
    },
    {
      title: '分享奉贤教育经验，共同推进上海基础教育',
      info: '由上海市教育委员会、中央电化教育馆指导，上海市教育学会、上...',
      createTime: '2020-12-28',
      img: 'https://pic.imgdb.cn/item/60fbe96a5132923bf83b77d5.png',
      id: '789798'
    },
    {
      title: '2021考生迎来好消息，教育部发布两个通知',
      info: '提到高考，相信大家就知道它的重要性不言而喻了吧！对于大部分...',
      createTime: '2020-12-28',
      img: 'https://pic.imgdb.cn/item/60fbe96a5132923bf83b77e8.png',
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
    this.handleClick = (value) => {
      this.setState({
        current: value
      })
    }
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
