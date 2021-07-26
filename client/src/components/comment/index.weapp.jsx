import React, { Component } from 'react'
import { View, Text, Button, Image, Input } from '@tarojs/components'
import { AtSearchBar } from 'taro-ui'

import './index.scss'

export default class Comment extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      commentDetail: {
        commentList: []
      }
    }
  }

  onChange = (value) => {
    this.setState({

    })
  }

  onActionClick = () => {
    console.log('开始搜索')
  }

  componentWillMount() {}

  componentDidMount() {
    const commentDetail = {
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
    this.setState({
      commentDetail: commentDetail
    })
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}


  render() {
    const { commentDetail } = this.state
    const { commentList, star, forward } = commentDetail
    return (
      <View className='comment-container'>
        <View className='comment-list-container'>
          <View className='at-article__h1 title'>评论</View>
          <View className='comment-list'>
            {
              commentList.map(({postimg, postName, content, like}) => (
                <View className="comment-item">
                  <Image className='comment-lt' src={postimg} mode="widthFix"></Image>
                  <View className='comment-rt'>
                    <View className='post-name'>{postName}</View>
                    <View className='post-content'>{content}</View>
                    <View className='comment-about-info'>
                      <Text>2021-12-21</Text>
                      <View className='like'>
                        {like}
                      </View>
                    </View>
                  </View>
                </View>
              ))
            }

          </View>
          <View className="foot-more">没有更多了</View>
          <View className="back-btn">
            返回
          </View>
        </View>

        <View className='add-comment-container'>
          <View className='input-wrapper'>
            <Input placeholder='添加评论' />

          </View>
          <View className='star'>{star}</View>
          <View className='forward'>{forward}</View>
        </View>
      </View>
    )
  }
}
