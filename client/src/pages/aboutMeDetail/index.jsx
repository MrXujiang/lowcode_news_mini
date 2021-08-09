import React, { Component } from 'react'
import { View, Text, Button, Image } from '@tarojs/components'
import { Share } from '@components'
import logo from '@assets/images/logo.png'
import H5Dooring from '@assets/images/H5-Dooring.png'
import V6Dooring from '@assets/images/V6.Dooring.png'


import './index.scss'

const ProductIltem = (props) => {
  const { title, content, picture, shareOption } = props.option
  return (
    <>
      <View className="product-item">
        <Image src={picture} className='logo-picture'></Image>
        <View className="title">{title}</View>
        <View className="content">{content}</View>
        <Share picture={shareOption.picture} width={shareOption.width} height={shareOption.height}>
          <View className="learn-more">了解详情</View>
        </ Share>
      </View>

    </>

  )
}

export default class Index extends Component {
  state = {
    proList: [
      {
        picture: logo,
        title: 'H5-Dooring编辑器',
        content: '让H5制作更简单, 轻松帮你制作H5',
        shareOption: {
          picture: H5Dooring,
          width: 250,
          height: 445
        },
        id: 234234423,
      },
      {
        title: 'V6.Dooring编辑器',
        content: '让可视化大屏制作更简单, 轻松帮你制作可视化报表',
        shareOption: {
          picture: V6Dooring,
          width: 250,
          height: 445
        },
        id: 55654645,
      }
    ]
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    const { proList } = this.state
    return (
      <View className='product-list-container'>
        {
          proList.map(item => (
              <ProductIltem key={item.id} option={item} />
          ))
        }
      </View>
    )
  }
}
