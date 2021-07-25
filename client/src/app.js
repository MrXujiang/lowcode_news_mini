import React, { Component } from 'react'
import dva from './utils/dva'
import { Provider } from 'react-redux'
import models from './models'
import Taro from '@tarojs/taro'

import 'taro-ui/dist/style/index.scss'
import '@styles/index.scss' // global css
import './app.scss'

const dvaApp = dva.createApp({
  initialState: {},
  models
})
const store = dvaApp.getStore()
class App extends Component {
  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return <Provider store={store}>{this.props.children}</Provider>
  }
}

export default App
