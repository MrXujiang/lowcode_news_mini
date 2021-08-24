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
        // 最新文章
        [
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114iciau5Hv8ic2eGtZjj8PUjPv6jg3RxwNG802No933ia63JwOlZM3icY5wojVGHTEP7RYjXcxGibIPNjR3g/0',
            star: 1111,
            type: 0,
            title: '前端路上的开源总结(2021年最新更新...)',
            link: 'news',
            id: 89809,
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149NE70sZks9mkGju2Rd5DWEaCbnRhPYAbgwOtica27mKciaUXbDTAdJj4If1dQ3yQYYicouFFibSgsDibg/0',
            star: 2800,
            type: 0,
            title: '前端路上的开源总结(2021年最新更新...)',
            link: 'news',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01148JJXkH9ia8WfeviazOKiaU664W1kyyKdPOIkuNGickwmVDpAW7aibwQsrO2qQ7sCkLO67BUiajUrANlM0A/0',
            star: 12000,
            type: 1,
            title: '可视化搭建平台的参考网格线设计',
            link: 'news',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ibuh7BdkD8iba6t7Zdcd8kMKX1DkVUvxz6M94h3EGGuTCnyhDiakANWLu8ZXxGN3fhvWEpqVetxVOicg/0',
            star: 1650,
            type: 0,
            title: '前端高效开发必备的 js 库梳理',
            link: 'news',
            id: 31234
          }
        ],
        // 可视化
        [
          {
            imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
            star: 1111,
            type: 1,
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
            type: 1,
            title: '可视化搭建的一些思考和实践',
            link: 'visual',
            id: 31234
          }
        ],
        // 推荐实战
        [
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt011494uib2ZewI6kWaiaGqicVibujcHIosxype1KnvDOfJudjrAibNxJKC7UrJnVa4TynibWIk95jTAJ9qbAKA/0',
            star: 1111,
            type: 2,
            title: '从零到一教你基于vue开发一个组件库',
            link: 'homeCombat',
            id: 89809
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149VCkibhcIPiaxctvDr3S2wZiceIQljoV1ibYMQPH6w2xwF1dEEBZfics0eD7EPprdIjkEXejpibKKkP4NQ/0',
            star: 2800,
            type: 2,
            title: '基于vue实现一个有点意思的拼图小游戏',
            link: 'homeCombat',
            id: 45645
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt011484MOHaJF7ibD7r2ibzicmYk57p97kH9BBc0fd3vjn0MjGeDaoUaeYcg3XpMUGp9rumFhEDVX5J6InLg/0',
            star: 12000,
            type: 2,
            title: '快速在你的vue/react项目中实现ssr(服务端渲染)',
            link: 'homeCombat',
            id: 23423
          },
          {
            imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ibxm2uFCibqqRgtPTOX09Z7871wtazGWIKbTyyzMOaMvXpuaxmibsGxyIf0EjHHdCVafYne2MDP7NYA/0',
            star: 1650,
            type: 2,
            title: '复盘node项目中遇到的13+常见问题和解决方案',
            link: 'homeCombat',
            id: 31234
          }
        ],
        // 跳个槽
        [
          // {
          //   imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114ibH2qicRRKQPictTeRQdibpRQr1FMu1kkp2cc966v0wVv0ayyPMqxMdTCpXXVciaic9Bn8FZDOYJjwnlzw/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
          //   star: 1111,
          //   type: 0,
          //   title: '从零设计可视化大屏搭建引擎',
          //   link: 'visual',
          //   id: 89809
          // },
          // {
          //   imgUrl: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icrP4k9PU4xSbr7S25YMK6tBiamY9YFMDRSzmdc3ohHkibS7UKwiaQkX1U76uAlrZ4zsZ4RV64aotZcg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
          //   star: 2800,
          //   type: 1,
          //   title: 'Dooring可视化搭建平台数据源设计剖析',
          //   link: 'visual',
          //   id: 45645
          // },
          // {
          //   imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt01149Q7UTFmLziac3Ce4TmmZsnXTBzxltQeTsIBvH4eQM9r7xfX5L6Po9WQ6mTg52PgJ0LpML5BibMomkg/0',
          //   star: 12000,
          //   type: 1,
          //   title: '这款国外开源框架, 让你轻松构建自己的页面编辑器',
          //   link: 'visual',
          //   id: 23423
          // },
          // {
          //   imgUrl: 'http://mmbiz.qpic.cn/mmbiz_jpg/dFTfMt0114ib6UWQrfL0NibAdR3R3O2jqyUxB85hXhqxmXxvsQSAuL5tJyWKWVTypeeGoy5SMjKGepTialBB7hhFQ/0',
          //   star: 1650,
          //   type: 2,
          //   title: '可视化搭建的一些思考和实践',
          //   link: 'visual',
          //   id: 31234
          // }
        ],
        // 面经
        [
          {
            imgUrl: 'https://i.loli.net/2021/08/23/zR6PELvoi8HKmrx.png',
            star: 1111,
            type: 4,
            title: '初中级前端面试题目汇总和答案解析',
            link: 'interview',
            id: 89809
          },
          {
            imgUrl: 'https://i.loli.net/2021/08/23/2IbAQPO9XV5eJ8o.png',
            star: 2800,
            type: 4,
            title: '字节跳动最爱考的前端面试题：JavaScript基础',
            link: 'interview',
            id: 45645
          },
          {
            imgUrl: 'https://i.loli.net/2021/08/23/XyLlgDRIBejfcOx.png',
            star: 12000,
            type: 4,
            title: '字节跳动前端面试题：CSS基础',
            link: 'interview',
            id: 23423
          },
          {
            imgUrl: 'https://i.loli.net/2021/08/23/XPcQ2KUVzOSD7By.png',
            star: 1650,
            type: 4,
            title: '用css3实现惊艳面试官的背景即背景动画（高级附源码）',
            link: 'interview',
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
