import React, { Component } from 'react'
// import Taro from '@tarojs/taro'

// 引入 Swiper, SwiperItem 组件
import { View } from '@tarojs/components'
import { AtTabs, AtTabsPane } from 'taro-ui'
// import { getColor, getElementsSite } from '@utils'
// import { typeConfig, tabList } from './config'

import './index.scss'

export default class HomeTable extends Component {
  constructor () {
    super(...arguments)
  }

  componentDidMount () {
  }

  render () {
    const { current, handleClick, children, tabList = [] } = this.props
    // const { current } = this.state
    return (
      <>
        <View className="home-table">
          <AtTabs
            current={current}
            scroll
            tabList={tabList}
            onClick={handleClick}>
            {
              tabList.map(({ item, index }) => (
                <AtTabsPane key={item} current={current} index={current}>
                  {
                    children
                  }
                </AtTabsPane>
              ))
            }
          </AtTabs>
        </View>
      </>
    )
  }
}
