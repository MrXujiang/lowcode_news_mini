import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import { AtAvatar } from 'taro-ui'

import './index.scss'
export default class ArticleDetial extends Component {
  constructor () {
    super(...arguments)
    this.state = {
    }
  }

  render () {
    const { articleDetail = {} } = this.props
    const { deatilList = [], title, authorName, createIime, authorHeadImg } = articleDetail
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
                deatilList.map((item, index) => {
                  switch (typeof item) {
                    case 'string':
                      return <View key={index} className='at-article__p'>{item}</View>
                    case 'object':
                      return <Image
                        key={index}
                        className='at-article__img'
                        src={item.img}
                        lazyLoad
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
