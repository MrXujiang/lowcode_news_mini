import React, { Component } from 'react'
import { View, Text, Image, Button, Canvas } from '@tarojs/components'
import Taro from '@tarojs/taro'
// 引入 Swiper, SwiperItem 组件

import './index.scss'

import './index.scss'
import {config} from '@utils';
// import qrcode from '../../images/bbbbb.jpg';

export default class Share extends Component {
    config = {
      navigationBarTitleText: '商品详情'
    }

    /**
     * 初始化信息
     */
    constructor() {
      super(...arguments)
      this.state = {
        //用户信息
        userInfo: {},
        // 是否展示canvas
        isShowCanvas: false,
      }
    }

    /**
     * 获取用户信息
     */
    getUserInfo = (e) => {
      if(!e.detail.userInfo) {
        Taro.showToast({
          title: '获取用户信息失败，请授权',
          icon: 'none'
        })
        return
      }
      this.setState({
        isShowCanvas: true,
        userInfo: e.detail.userInfo
      }, () => {
        this.drawImage()
      })
    }

    /**
     * 绘制图片的方法
     */
    drawImage = async () => {
      //创建canvas对象
      let ctx = Taro.createCanvasContext('cardCanvas');
      //填充背景色
      let grd = ctx.createLinearGradient(0,0,1,500);
      grd.addColorStop(0, '#1452d0');
      grd.addColorStop(0.5, '#FFF');
      ctx.setFillStyle(grd);
      ctx.fillRect(0,0,400,500);

      //绘制圆形用户头像
      let { userInfo } = this.state;
      // console.warn("userInfo", userInfo)
      // let res = await Taro.downloadFile({
      //   url: userInfo.avatarUrl
      // });
      // let imageUrl = await Taro.downloadFile({
      //   url: 'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg'
      // });
      // const url= 'https://tva1.sinaimg.cn/large/00831rSTgy1gczok56tkzj30m80m8qe4.jpg';
      ctx.save();
      ctx.beginPath();
      // ctx.arc(160,88,66,0,Math.PI * 2);
      // ctx.closePath();
      // ctx.clip();
      // ctx.stroke();
      // ctx.translate(160,88);
      ctx.drawImage(config.workImgUrl, -20, -20, 400, 280);
      ctx.restore();

      // 绘制文字
      ctx.save()
      ctx.setFontSize(16)
      ctx.setFillStyle('#FFF')
      // ctx.fillText(userInfo.nickName, 100, 200)
      ctx.setFontSize(12)
      ctx.setFillStyle('black')
      ctx.fillText('好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟', 20, 280)
      ctx.setFontSize(12)
      ctx.setFillStyle('#b30000')
      ctx.fillText('￥25.00 - ￥88.00', 50, 300);
      ctx.setFontSize(12)
      ctx.setFillStyle('black')
      ctx.fillText('长按识别二维码', 130, 380)
      ctx.restore()
      // 绘制二维码
      // let qrcode = await Taro.downloadFile({
      //  url: 'https://tva1.sinaimg.cn/large/00831rSTgy1gczoldqrojj30hi0hi770.jpg'
      // })
      // ctx.drawImage(qrcode, 30, 340, 80, 80)
      // 将以上绘画操作进行渲染
      ctx.draw()

    }

    /**
     * 保存图图片到本地
     */
    saveCard = async () => {
      //将canvas图片内容到出指定的大小的图片
      let res = await Taro.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: 400,
        height: 500,
        destWidth: 360,
        destHeight: 450,
        canvasId: 'cardCanvas',
        fileType: 'png'
      })
      let saveRes = await Taro.saveImageToPhotosAlbum({
        filePath: res.tempFilePath
      })
      if (saveRes.errMsg === 'saveImageToPhotosAlbum:ok') {
        Taro.showModal({
          title: '图片保存成功',
          content: '图片成功保存到相册',
          showCancel: false,
          confirmText: '确认'
        })
      } else {
        Taro.showModal({
          title: '图片保存失败',
          content: '请重新尝试',
          showCancel: false,
          confirmText: '确认'
        })
      }
    }

    render () {
      let { isShowCanvas } = this.state;
      return (
        <View className='share-container'>
          <Button onGetUserInfo={this.getUserInfo} openType="share" type="primary" size="mini" className="btn-share">分享图片</Button>

          {
            isShowCanvas &&
            <View className="canvas-wrap">
              <Canvas
                id="card-canvas"
                className="card-canvas"
                style="width: 320px; height: 450px"
                canvasId="cardCanvas">
              </Canvas>
              <Button onClick={this.saveCard} className="btn-save" type="primary" size="mini">保存到相册</Button>
            </View>
          }
        </View>
      )
    }

  }
