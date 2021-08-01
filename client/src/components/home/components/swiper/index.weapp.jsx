import React, { Component } from 'react'
import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件
import { View, Text, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.scss'
const search = require('@assets/images/svg/search.svg')

export default class HomeScroll extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0,
      imgUrls: [
        'https://i.loli.net/2021/07/13/RUGtAgMQldcTneD.jpg',
        'https://i.loli.net/2021/07/13/cCoWndJA3TZw6l5.jpg',
        'https://i.loli.net/2021/07/13/PyZvh6wMxYrFzo5.jpg'
      ]
    }
    this.handleClick = (e) => {
      this.setState({
        current: e.target.current
      })
    }
    this.toSearchPage = () => {
      Taro.navigateTo({
        url: '/pages/search/index'
      })
    }
  }

  render () {
    const { bannerTitle } = this.props
    const { imgUrls, current } = this.state
    return (
      <>
        <View className="swiper-box">
          <Swiper
            className='home-swiper'
            current={current}
            onChange={this.handleClick}
            autoplay>
            {
              imgUrls.map(imgUrl => (
                <SwiperItem key={imgUrl}>
                  <Image lazyLoad src={imgUrl} className="slide-image" />
                </SwiperItem>
              ))
            }
          </Swiper>
          <View className="dots">
            {
              imgUrls.map((imgUrl, index) => (
                <View key={imgUrl} className={index === current ? 'dot active' : 'dot'}></View>
              ))
            }
          </View>
          <View onClick={this.toSearchPage} className="search-wrap">
            <Text>{bannerTitle}</Text>
            <Image lazyLoad src={search} />
          </View>
        </View>
      </>

    )
  }
}
