import React, { Component } from 'react'
import { View } from '@tarojs/components'
// 引入 Swiper, SwiperItem 组件
import { HomeScroll, HomeTable, HomeList } from './components'

import './index.scss'

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
      active: 2,
      infoList: [
        [
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 1111,
            type: 0,
            title: '从零设计可视化大屏搭建引擎',
            link: 'visual',
            id: 89809,
          },
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icrP4k9PU4xSbr7S25YMK6tBiamY9YFMDRSzmdc3ohHkibS7UKwiaQkX1U76uAlrZ4zsZ4RV64aotZcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 2800,
            type: 1,
            title: 'Dooring可视化搭建平台数据源设计剖析',
            link: 'visual',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149Q7UTFmLziac3Ce4TmmZsnXTBzxltQeTsIBvH4eQM9r7xfX5L6Po9WQ6mTg52PgJ0LpML5BibMomkg/0',
            star: 12000,
            type: 1,
            title: '这款国外开源框架, 让你轻松构建自己的页面编辑器',
            link: 'visual',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ib6UWQrfL0NibAdR3R3O2jqyUxB85hXhqxmXxvsQSAuL5tJyWKWVTypeeGoy5SMjKGepTialBB7hhFQ/0',
            star: 1650,
            type: 2,
            title: '可视化搭建的一些思考和实践',
            link: 'visual',
            id: 31234
          }
        ],
        [
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 1111,
            type: 0,
            title: '从零设计可视化大屏搭建引擎',
            link: 'visual',
            id: 89809
          },
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icrP4k9PU4xSbr7S25YMK6tBiamY9YFMDRSzmdc3ohHkibS7UKwiaQkX1U76uAlrZ4zsZ4RV64aotZcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 2800,
            type: 1,
            title: 'Dooring可视化搭建平台数据源设计剖析',
            link: 'visual',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149Q7UTFmLziac3Ce4TmmZsnXTBzxltQeTsIBvH4eQM9r7xfX5L6Po9WQ6mTg52PgJ0LpML5BibMomkg/0',
            star: 12000,
            type: 1,
            title: '这款国外开源框架, 让你轻松构建自己的页面编辑器',
            link: 'visual',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ib6UWQrfL0NibAdR3R3O2jqyUxB85hXhqxmXxvsQSAuL5tJyWKWVTypeeGoy5SMjKGepTialBB7hhFQ/0',
            star: 1650,
            type: 2,
            title: '可视化搭建的一些思考和实践',
            link: 'visual',
            id: 31234
          }
        ],
        [
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 1111,
            type: 0,
            title: '从零设计可视化大屏搭建引擎',
            link: 'visual',
            id: 89809
          },
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icrP4k9PU4xSbr7S25YMK6tBiamY9YFMDRSzmdc3ohHkibS7UKwiaQkX1U76uAlrZ4zsZ4RV64aotZcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 2800,
            type: 1,
            title: 'Dooring可视化搭建平台数据源设计剖析',
            link: 'visual',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149Q7UTFmLziac3Ce4TmmZsnXTBzxltQeTsIBvH4eQM9r7xfX5L6Po9WQ6mTg52PgJ0LpML5BibMomkg/0',
            star: 12000,
            type: 1,
            title: '这款国外开源框架, 让你轻松构建自己的页面编辑器',
            link: 'visual',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ib6UWQrfL0NibAdR3R3O2jqyUxB85hXhqxmXxvsQSAuL5tJyWKWVTypeeGoy5SMjKGepTialBB7hhFQ/0',
            star: 1650,
            type: 2,
            title: '可视化搭建的一些思考和实践',
            link: 'visual',
            id: 31234
          }
        ],
        [
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 1111,
            type: 0,
            title: '从零设计可视化大屏搭建引擎',
            link: 'visual',
            id: 89809
          },
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icrP4k9PU4xSbr7S25YMK6tBiamY9YFMDRSzmdc3ohHkibS7UKwiaQkX1U76uAlrZ4zsZ4RV64aotZcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 2800,
            type: 1,
            title: 'Dooring可视化搭建平台数据源设计剖析',
            link: 'visual',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149Q7UTFmLziac3Ce4TmmZsnXTBzxltQeTsIBvH4eQM9r7xfX5L6Po9WQ6mTg52PgJ0LpML5BibMomkg/0',
            star: 12000,
            type: 1,
            title: '这款国外开源框架, 让你轻松构建自己的页面编辑器',
            link: 'visual',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ib6UWQrfL0NibAdR3R3O2jqyUxB85hXhqxmXxvsQSAuL5tJyWKWVTypeeGoy5SMjKGepTialBB7hhFQ/0',
            star: 1650,
            type: 2,
            title: '可视化搭建的一些思考和实践',
            link: 'visual',
            id: 31234
          }
        ],
        [
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 1111,
            type: 0,
            title: '从零设计可视化大屏搭建引擎',
            link: 'visual',
            id: 89809
          },
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icrP4k9PU4xSbr7S25YMK6tBiamY9YFMDRSzmdc3ohHkibS7UKwiaQkX1U76uAlrZ4zsZ4RV64aotZcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 2800,
            type: 1,
            title: 'Dooring可视化搭建平台数据源设计剖析',
            link: 'visual',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149Q7UTFmLziac3Ce4TmmZsnXTBzxltQeTsIBvH4eQM9r7xfX5L6Po9WQ6mTg52PgJ0LpML5BibMomkg/0',
            star: 12000,
            type: 1,
            title: '这款国外开源框架, 让你轻松构建自己的页面编辑器',
            link: 'visual',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ib6UWQrfL0NibAdR3R3O2jqyUxB85hXhqxmXxvsQSAuL5tJyWKWVTypeeGoy5SMjKGepTialBB7hhFQ/0',
            star: 1650,
            type: 2,
            title: '可视化搭建的一些思考和实践',
            link: 'visual',
            id: 31234
          }
        ],
      ]
    }
  }

  handleClick = (value) => {
    this.setState({
      ...this.state,
      active: value
    })
  }

  render () {
    const { active, infoList } = this.state
    return (
      <>
        <View className='home-container'>
          <HomeScroll bannerTitle={'搜索求职/面试/实战'} />
          <HomeTable tabList={tabList} current={active} handleClick={this.handleClick}>
            {/* 单条表格内容 */}
            <HomeList column={2} infoList={infoList[active]} />
          </HomeTable>
        </View>
      </>

    )
  }
}
