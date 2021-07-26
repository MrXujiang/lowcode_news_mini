import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'
import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件

import './index.scss'
export default class ArticleDetial extends Component {
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  render () {
    const { deatilList, title, authorName, createIime, authorHeadImg } = this.props.articleDetail
    return (
      <>
        <View className='at-article article-container'>
          <View className='at-article__h1'>
            {title}
          </View>
          <View className='at-article__info article-info'>
            <AtAvatar circle image={authorHeadImg}></AtAvatar>
            <View>
              <Text>{authorName}</Text>
              <Text>{createIime}</Text>
            </View>
          </View>
          <View className='at-article__content'>
            <View className='at-article__section'>
              {
                deatilList.map(item => {
                  switch (typeof item) {
                    case 'string':
                      return <View className='at-article__p'>{item}</View>
                    case 'object':
                      return <Image
                        className='at-article__img'
                        src={item.img}
                        mode='widthFix' />
                  }
                })
              }
            </View>
          </View>
        </View>
      </>
    )
  }
}
