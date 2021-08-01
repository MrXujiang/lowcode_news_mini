import React, { Component } from 'react'
import { View, Text, Image, Input, Button } from '@tarojs/components'
import { withShare } from '@utils'

import './index.scss'
export default class Comment extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      commentValue: ''
    }
  }

  onActionClick = () => {
    console.log('开始搜索')
  }

  componentWillMount() {}

  componentDidMount() {
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  // 评论输入的时候
  onChangeHandler = (value) => {
    this.setState({
      commentValue: value
    })
  }

  // 评论点确认的时候
  onConfirmHandler = () => {
    console.log('我点了个确认')
  }

  render() {
    const { commentValue } = this.state
    const { commentDetail = {}, onShareAppMessage } = this.props
    const { commentList = [], star, forward } = commentDetail
    return (
      <View className='comment-container'>
        <View className='comment-list-container'>
          <View className='at-article__h1 title'>评论</View>
          <View className='comment-list'>
            {
              commentList.map(({postimg, postName, content, like}) => (
                <View className="comment-item">
                  <Image lazyLoad className='comment-lt' src={postimg} mode="widthFix"></Image>
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
            <Input placeholder='添加评论' value={commentValue} onChange={this.onChangeHandler} onConfirm={this.onConfirmHandler} />

          </View>
          <View className='star'>{star}</View>
          <Button openType='share' size='mini' className='forward'>{forward}</Button>
        </View>
      </View>
    )
  }
}
