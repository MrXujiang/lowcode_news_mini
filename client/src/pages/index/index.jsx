import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { withShare } from '@utils'

import './index.scss'

import { Home, Combat, ClockingIn, About } from '@components'

const homeTabList = [ <Home />, <Combat />, <ClockingIn />, <About /> ]

@withShare({

})
export default class Index extends Component {

  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }

  handleClick = (value) => {
    this.setState({
      current: value
    })
  }


  componentWillMount () { }

  componentDidMount () {
    this.toLogin()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  toLogin = () => {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.login({
        success: function (res) {
          if (res.code) {
            // console.log(res)
            //发起网络请求
            // Taro.request({
            //   url: 'https://test.com/onLogin',
            //   data: {
            //     code: res.code
            //   }
            // })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    }

  }

  // $setShareTitle = () => {
  //   return '趣谈前端，让学习前端更有趣！'
  // }
  // $setShareImageUrl = () => {
  //   return config.workImgUrl
  // }
  // $setSharePath = () => {
  //   return this.props.tid
  // }

  render () {
    const { current } = this.state;
    return (
      <View className='index'>
        <View className='tab-panel'>
          { homeTabList[current]}
        </View>
        <AtTabBar
          fixed
          tabList={[
            {title: '首页', iconType: 'home'},
            {title: '实战', iconType: 'analytics'},
            {title: '打卡', iconType: 'streaming'},
            {title: '关于', iconType: 'user'}
          ]}
          onClick={this.handleClick}
          current={current}
        />
      </View>
    )
  }
}
