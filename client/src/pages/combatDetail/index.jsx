import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ArticleDetial, Comment } from '@components'
import { withShare } from '@utils'

import './index.scss'

@withShare({
})
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      articleDetail: {
        deatilList: [],
        commentDetail: {
          commentList: [],
          star: 0,
          forward: 0
        }
      }
    }
  }

  // UNSAFE_componentWillMount () { }

  componentDidMount () {
    // console.log(this.props)
    this.setState({
      id: Taro.getCurrentInstance().router.params.id || null,
      articleDetail: {
        title: '全国教育工作会议召开，传递这些重要信息！',
        authorHeadImg: 'https://jdc.jd.com/img/200',
        authorName: '王启年',
        createIime: '2020-05-21',
        deatilList: [
          '乘势而上 狠抓落实 加快建设高质量教育体系',
          '2021年全国教育工作会议召开',
          '1月7日至8日，2021年全国教育工作会议在京召开。会议强调，要以习近平新时代中国特色社会主义思想为指导，贯彻落实党的十九大和十九届二中、三中、四中、五中全会精神，贯彻落实习近平总书记关于教育的重要论述和全国教育大会精神，按照“五位一体”总体布局和“四个全面”战略布局，增强“四个意识”、坚定“四个自信”、做到“两个维护”，坚持稳中求进工作总基调，立足新发展阶段，贯彻新发展',
          { img: 'https://jdc.jd.com/img/400x400' },
          '贯彻新发展理念，构建新发展格局，以推动高质量发展为主'
        ]
      },
      commentDetail: {
        commentList: [
          {
            postimg: 'https://pic.imgdb.cn/item/60fd80525132923bf8efe2dd.png',
            postName: '柯布',
            content: '用户创建的内容文本六行，用户创建的内容文本六行，用户创建的内容文本六行，用户创建的内容文本六行，用户创建的内容文本六行…',
            like: 206
          },
          {
            postimg: 'https://pic.imgdb.cn/item/60fd80525132923bf8efe2dd.png',
            postName: '吴彦祖',
            content: '回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容回复内容',
            like: 206
          }
        ],
        star: '20k',
        forward: 534
      }
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  $setShareTitle = () => {
    return this.state.articleDetail.title
  }
  $setShareImageUrl = () => {
    return this.state.articleDetail.authorHeadImg
  }
  $setSharePath = () => {
    return this.props.tid
  }

  render () {
    const { articleDetail, commentDetail } = this.state
    return (
      <View className='combat-detail-container'>
        <ArticleDetial articleDetail={articleDetail} />
        <Comment commentDetail={commentDetail} />
      </View>
    )
  }
}
