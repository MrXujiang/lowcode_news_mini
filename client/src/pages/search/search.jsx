import React, { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { Search, HotWordList } from '@components/search'
import { HomeList } from '@components/home/components/index.js'
import './search.scss'

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

    this.onChange = (value) => {
      this.setState({
        ...this.state,
        searchValue: value
      })
    }

    this.onActionClick = () => {
      this.setState({
        ...this.state,
        isSearch: true
      })
      console.log('开始搜索了')
    }

    this.onClear = () => {
      this.setState({
        ...this.state,
        searchValue: '',
        isSearch: false
      })
    }
  }

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { isSearch, searchValue, hotWordList, searchList } = this.state
    return (
      <View className='search'>
        <Search searchValue={searchValue} onChange={this.onChange} onActionClick={this.onActionClick} onClear={this.onClear} />
        {
          isSearch ? searchList.length ? <HomeList /> : '没有找到您的词条，换个关键词试试？' : <HotWordList hotWordList={hotWordList} />
        }

      </View>
    )
  }
}
