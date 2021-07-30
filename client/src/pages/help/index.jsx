import React, { Component } from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTextarea, AtImagePicker, AtToast } from 'taro-ui'
import './index.scss'

export default class Help extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      feedback: '',
      files: [],
      isOpened: false
    }
  }

  componentWillMount () { }

  componentDidMount () {
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleChange = (value) => {
    this.setState({
      ...this.state,
      feedback: value,
    })
  }

  onChange = (files) => {
    this.setState({
      ...this.state,
      files
    })
  }

  uploadImage = () => {
    Taro.chooseImage({
      success (res) {
        const tempFilePaths = res.tempFilePaths
        Taro.uploadFile({
          url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          formData: {
            'user': 'test'
          },
          success (res){
            const data = res.data
            //do something
          }
        })
      }
    })
  }

  onSubmit = () => {
    this.setState({
      ...this.state,
      isOpened: true,
    })
    setTimeout(()=>{
      Taro.navigateBack()
    },2000)

  }

  render () {
    const { feedback, files, isOpened } = this.state
    return (
      <>
        <View className='help-container'>
          <AtTextarea
            value={feedback}
            onChange={this.handleChange}
            height="350"
            placeholder='描述问题的详细情况，有助于我们快速帮您解决（必填）'
          />
          <AtImagePicker
            multiple
            files={files}
            onChange={this.onChange}
          />
          <View className='foot-btn' onClick={this.onSubmit}>
            提交
          </View>
          <AtToast isOpened={isOpened} text="感谢您提出的宝贵意见！" icon="heart"></AtToast>
        </View>
      </>
    )
  }
}
