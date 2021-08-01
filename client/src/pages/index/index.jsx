import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import { connect } from 'react-redux'
import { withShare } from '@utils'
import { config } from '@utils'

import './index.scss'

import { Home, Combat, Interview, About } from '@components'

const homeTabList = [ <Home />, <Combat />, <Interview />, <About /> ]

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
            {title: '面试', iconType: 'streaming'},
            {title: '关于', iconType: 'user'}
          ]}
          onClick={this.handleClick}
          current={current}
        />
      </View>
    )
  }
}
