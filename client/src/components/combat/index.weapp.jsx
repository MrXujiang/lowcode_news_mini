import React, { Component } from 'react'
// 引入 Swiper, SwiperItem 组件
import { View } from '@tarojs/components'
import { HomeScroll, HomeTable } from '../home/components'
import { CombatList } from './components'

import './index.scss'

const config = {
  tabList: [{ title: '趣谈实战' }],
  listInfo: [
    {
      title: '用 webpack 4.0 撸单页/多页脚手架 (jquery, react, vue, typescript)',
      info: '首先来简单介绍一下webpack：现代 JavaScript 应用程序的静态模块打包工具。当 webpack 处理应用程序时，它会在内部构建一个会映射项目所需的每个模块 的依赖图(dependency graph)，并生成一个或多个 bundle。webpack4.0出现之后，我们可以不用再引入一个配置文件来打包项目，并且它仍然有着很高的可配置性，可以很好满足我们的需求。 在开始正文之前，首先先来看看我们要实现的成果',
      createTime: '2019-07-08',
      img: 'https://mmbiz.qpic.cn/mmbiz/dFTfMt0114icsicR5tPOUXtzg0WdibAjBsIrRHYtkOvUymwWOKChJ8Ds0hcRdkq5FLJjGSGdwSbGaNBYtYOBozyicQ/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      link: 'combat',
      id: '234234'
    },
    {
      title: '从零到一教你基于vue开发一个组件库',
      info: 'Vue是一套用于构建用户界面的渐进式框架,目前有越来越多的开发者在学习和使用.在笔者写完 从0到1教你搭建前端团队的组件系统 之后很多朋友希望了解一下如何搭建基于vue的组件系统,所以作为这篇文章的补充,本文来总结一下如何搭建基于vue的组件库.',
      createTime: '2020-03-10',
      img: 'https://mmbiz.qpic.cn/mmbiz/dFTfMt011494uib2ZewI6kWaiaGqicVibujcnVHzGk59O9yzVVUPxOax1iaIwKUEpxhoHH6ibZ9AJiaODqb9GBFxibnFXw/640?wx_fmt=other&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      link: 'combat',
      id: '789798'
    },
    {
      title: '手把手教你实现拼图互动小游戏(纯VUE版本)',
      info: '深秋的某一天,在上班的地铁上面刷着手机,看到徐小夕的公众号推送的一篇文章,介绍的是一个移动端的拼图小游戏.于是自己尝试着识别二维码完了下,感觉还挺有意思的.周末抽空研究了一下,看了下这个小游戏有哪些功能.问了下原作者,他用的是原生JS写的一版.自己本身在学习使用VUE开发项目,于是便萌发了用VUE尝试改版一下.正好可以学习学习一下.于是看了下游戏的大体效果,决定尝试用VUE改写一版玩一下,说干就干.也欢迎有兴趣,有想法的小伙伴可以一起讨论.',
      createTime: '2020-03-10',
      img: 'https://mmbiz.qpic.cn/mmbiz_png/dFTfMt0114icjxsmMw5SH4IWDedypMHWXCGrpk44AH0ktU3ZYcWfIwDpC1wXRaBz9rCtDibBxq5bHAWcwVvDUKmg/640?wx_fmt=png&tp=webp&wxfrom=5&wx_lazy=1&wx_co=1',
      link: 'combat',
      id: '789798'
    }
  ]
}
export default class Combat extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
    this.handleClick = (value) => {
      this.setState({
        current: value
      })
    }
  }

  render () {
    const { tabList, listInfo } = config
    return (
      <>
        <View className="combat-container">
          <HomeScroll bannerTitle={'搜索实战课程'} />
          <HomeTable tabList={tabList}>
            <CombatList listInfo={listInfo} />
          </HomeTable>
        </View>
      </>
    )
  }
}
