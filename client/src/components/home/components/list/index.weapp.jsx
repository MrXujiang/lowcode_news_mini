import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { formatNumber } from '@utils'

// 引入 Swiper, SwiperItem 组件
import { View, Text, Image } from '@tarojs/components'
import { typeConfig } from '../table/config'

import './index.scss'

export default class HomeList extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 2,
      list: [[]]
    }
  }

  componentDidMount () {
    this.setColumnList()
  }

  // 列表数据列展示条数
  setColumnList = () => {
    const { column, infoList } = this.props
    const list = infoList.reduce((count, current) => {
      count[count.length - 1].length < column ? count[count.length - 1].push(current) : count.push([current])
      return count
    }, [[]])
    this.setState({
      ...this.state,
      list
    })
  }

  render () {
    const { list = [] } = this.state
    return (
      <>
        <View className="home-list">
          {/* 单条表格内容 */}
          {list.map((item, index) => (
            <View key={index} className='at-row at-row__justify--between info-list'>
              {/* 表格布局内容 */}
              {
                item.map(({ imgUrl, star, type, title, id }) => (
                  <View key={id} className='at-col at-col-6 at-col--wrap info-item'
                  onClick={() => {
                    Taro.navigateTo({
                      url: '/pages/combatDetail/index?id=' + id
                    })
                  }}>
                    <View className="img-wrap">
                      <Image lazyLoad className="img-info" src={imgUrl} mode="widthFix" lazyLoad />
                      <Text className="star-flag">{formatNumber(star)}</Text>
                      {typeConfig[type] && <Text className="type-flag">{typeConfig[type]}</Text>}
                    </View>
                    <View className="title">{title}</View>
                  </View>
                ))
              }
            </View>
          ))}
        </View>
      </>

    )
  }
}
