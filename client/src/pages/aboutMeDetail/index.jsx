import React, { Component } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { Share } from '@components'

import { withShare } from '@utils'
import teamBanner from '@assets/images/teamBanner.png'
import authorLogo from '@assets/images/author-logo.png'
import up from '@assets/images/up.png'
import followMe from '@assets/images/follow-me.png'

import './index.scss'

const config = [
  {
    img: authorLogo,
    title: '产品/技术/运营',
    name: '徐小夕'
  },
  {
    img: authorLogo,
    title: '产品',
    name: '徐小夕'
  },
  {
    img: authorLogo,
    title: '技术',
    name: '徐小夕'
  },
  {
    img: authorLogo,
    title: '技术',
    name: '徐小夕'
  },
  {
    img: authorLogo,
    title: '设计/交互',
    name: '徐小夕'
  },
  {
    img: authorLogo,
    title: '运营',
    name: '徐小夕'
  },
  {
    img: authorLogo,
    title: '产品/技术/运营',
    name: '徐小夕'
  },
]

@withShare({})
export default class Index extends Component {
  state = {

  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { proList } = this.state
    return (
      <View className="team-container">
        <View className="team-wrap">
          <View className="team-banner">
            <Image className="banner-img" src={teamBanner}></Image>
            <Image className="up" src={up}></Image>
            <Button openType='share' className="share-btn">分享</Button>
          </View>
          <View className="author-info">
            <View className="top">
              <Image src={authorLogo}></Image>
              <Text>徐小夕</Text>
            </View>
            <View className="msg">
            知乎专栏作家, 掘金优秀作者，定期分享前端工程化，可视化，企业实战项目知识，深度复盘企业中经常遇到的500+技术问题解决方案。
            </View>
          </View>
          {/* <View className="team-member">
            <View className="title">团队成员</View>
            <View className="member-list">
              {
                config.map(({img, name, title}) => (
                  <View className="member-item">
                    <Image src={img}></Image>
                    <View>
                      <Text>{title}</Text>
                      <Text>{name}</Text>
                    </View>
                  </View>
                ))
              }
            </View>
          </View> */}
        </View>

          <View className="apply-join">
            <Share picture={followMe} width={230} height={230}>申请加入</Share>
          </View>


      </View>
    )
  }
}
