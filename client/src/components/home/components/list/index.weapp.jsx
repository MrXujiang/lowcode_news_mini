import React, { useState, useEffect } from 'react'
import Taro from '@tarojs/taro'
import { formatNumber } from '@utils'

// 引入 Swiper, SwiperItem 组件
import { View, Text, Image } from '@tarojs/components'
import { typeConfig } from '../table/config'

import './index.scss'

export default function HomeList (props) {
  const { column = 2, infoList = [] } = props
  // const [current, setCurrent] = useState(2)
  const [list, setList] = useState([[]])

  useEffect(() => {
    setColumnList()
  }, [infoList])

  // 列表数据列展示条数
  function setColumnList () {
    const list = infoList.reduce((count, current) => {
      count[count.length - 1].length < column ? count[count.length - 1].push(current) : count.push([current])
      return count
    }, [[]])
    setList(list)
  }

  return (
    <>
      <View className="home-list">
        {/* 单条表格内容 */}
        {list[0].length ? list.map((item, index) => (
          <View key={index} className='at-row at-row__justify--between info-list'>
            {/* 表格布局内容 */}
            {
              item.map(({ imgUrl, star, type, title, link, id }, _index) => (
                <View key={id} className='at-col at-col-6 at-col--wrap info-item'
                  onClick={() => {
                    Taro.navigateTo({
                      url: !link ? '/pages/combatDetail/index?id=' + id : '/pages/webView/index?link=' + link + '&index=' + (index * 2 + _index)
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
        )) : <View className='empty'>小编正在梳理中，敬请期待……</View>}
      </View>
    </>
  )
}
