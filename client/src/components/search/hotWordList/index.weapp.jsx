import React, { Component } from 'react'
import { View, Image, Text, Button } from '@tarojs/components'
import { AtButton, AtBadge } from 'taro-ui'

const searchPageHot = require('@assets/images/svg/searchPageHot.svg')
import './index.scss'

export default class hotWordList extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      searchValue: ''
    }
  }

  onChange = (value) => {
    this.setState({
      value: value
    })
  }

  onActionClick = () => {
    console.log('开始搜索')
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  getLogin = () => {

  }

  render() {
    const { hotWordList } = this.props;
    return (
      <View className='hot-word'>
        <View className="title">
          <Image lazyLoad className="title-inner-img" src={searchPageHot} />
          <Text>搜索热词</Text>
        </View>
        <View className="hot-word-list">
          {
            hotWordList.map(({title, value}) => (
              <AtBadge value={value} key={title}  className="hot-badge">
                <AtButton size='small' circle>{title}</AtButton>
              </AtBadge>
            ))
          }

        </View>
      </View>
    )
  }
}
