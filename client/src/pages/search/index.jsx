import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { SearchBar, HotWordList } from '@components/search'
import { HomeList } from '@components/home/components/index.js'

import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      searchValue: '',
      hotWordList: [
        {
          title: '成人大专',
          value: 'HOT'
        },
        {
          title: '瑜伽'
        },
        {
          title: '健身'
        },
        {
          title: '会计'
        },
        {
          title: '专升本'
        },
        {
          title: '营养师'
        },
        {
          title: '摄影'
        },
        {
          title: '面点师'
        },
        {
          title: '咖啡师'
        },
        {
          title: '学历提升'
        }
      ],
      isSearch: false,
      searchList: []
    }
  }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onChange = (value) => {
    this.setState({
      ...this.state,
      searchValue: value
    })
  }

  onActionClick = () => {
    this.setState({
      ...this.state,
      isSearch: true
    })
    // console.log('开始搜索了')
  }

  onClear = () => {
    this.setState({
      ...this.state,
      searchValue: '',
      isSearch: false
    })
  }

  render () {
    const { isSearch, searchValue, hotWordList, searchList } = this.state
    return (
      <View className='search'>
        <SearchBar searchValue={searchValue} onChange={this.onChange} onActionClick={this.onActionClick} onClear={this.onClear} />
        {
          isSearch ? searchList.length ? <HomeList infoList={searchList} /> : '没有找到您的词条，换个关键词试试？' : <HotWordList hotWordList={hotWordList} />
        }

      </View>
    )
  }
}
