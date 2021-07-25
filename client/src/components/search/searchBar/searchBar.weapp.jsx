import React, { Component } from 'react'
import { View, Text, Button } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

import './searchBar.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      searchValue: ''
    }
  }

  onChange = (value) => {
    this.setState({
      searchValue: value
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
    const {searchValue, onChange, onActionClick, onClear } = this.props
    return (
      <View className='serach-bar'>
        <AtSearchBar
          placeholder='搜索课程/教师/文章'
          value={searchValue}
          onChange={onChange}
          onActionClick={onActionClick}
          onClear={onClear}
        />
      </View>
    )
  }
}
