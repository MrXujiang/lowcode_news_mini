import React, { Component } from 'react'
import { AtTabsPane } from 'taro-ui'
// 引入 Swiper, SwiperItem 组件
import { HomeScroll, HomeTable, HomeList } from './components'

const tabList = [
  { title: '最新文章' },
  { title: '可视化' },
  { title: '推荐实战' },
  { title: '跳个槽' },
  { title: '面经' }
]

export default class Home extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 2,
      infoList: [
        {
          imgUrl: 'https://i.loli.net/2021/07/14/CDfcwZ3OlBtzdbR.png',
          star: 1111,
          type: 0,
          title: '中式面点师考证课程【好利来教育培训】',
          id: 89809
        },
        {
          imgUrl: 'https://i.loli.net/2021/07/14/b9LcTzNM3FIklmj.png',
          star: 2800,
          type: 1,
          title: '烘焙培训【安德鲁森培训】',
          id: 45645
        },
        {
          imgUrl: 'https://i.loli.net/2021/07/14/dnuFT9wlo43YNqh.png',
          star: 12000,
          type: 1,
          title: '剑桥全球战略研学项目',
          id: 23423
        },
        {
          imgUrl: 'https://i.loli.net/2021/07/14/qDhrLNoGbK27pJR.png',
          star: 1650,
          type: 2,
          title: '澳洲留学指南【科廷大学】',
          id: 31234
        },
        {
          imgUrl: 'https://i.loli.net/2021/07/14/wA4rXoWLShBn5TV.png',
          star: 54000,
          type: 3,
          title: '四川大学【计算机科学与技术】',
          id: 64464
        },
        {
          imgUrl: 'https://i.loli.net/2021/07/14/dEWruiK8SnlX9IR.png',
          star: 32000,
          type: 4,
          title: '中外影视作品与当代社会研究',
          id: 89809
        }
      ]
    }
  }

  handleClick = (value) => {
    this.setState({
      ...this.state,
      current: value
    })
  }

  render () {
    const { current, infoList } = this.state
    return (
      <>
        <HomeScroll bannerTitle={'搜索求职/面试/实战'} />
        <HomeTable tabList={tabList} current={current} handleClick={this.handleClick}>
          {/* 单条表格内容 */}
          <HomeList column={2} infoList={infoList} />
        </HomeTable>
      </>

    )
  }
}
