import React, { Component } from 'react'
import { View, Text, Image, Button, Canvas } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './index.scss'
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
    getUserInfo = async (e) => {
      if(!e.detail.userInfo) {
        Taro.showToast({
          title: '获取用户信息失败，请授权',
          icon: 'none'
        })
        return
      }
      const res = await Taro.getSystemInfoSync()
      const { screenHeight, screenWidth } = res
      this.setState({
        isShowCanvas: true,
        userInfo: e.detail.userInfo,
        screenWidth,
        screenHeight
      }, () => {
        this.drawImage()
      })
    }

    /**
     * 绘制图片的方法
     */
    drawImage = async () => {
      const { screenHeight, screenWidth } = this.state
      const { picture, width, height } = this.props
      const _w = width + 20
      const _h = height + 20
      //创建canvas对象
      let ctx = Taro.createCanvasContext('cardCanvas');
      //填充背景色
      let grd = ctx.createLinearGradient(0,0,1,500);
      grd.addColorStop(0, '#FFF'); // #1452d0
      grd.addColorStop(0.5, '#FFF');
      ctx.setFillStyle(grd);
      ctx.fillRect((screenWidth-width)/2,(screenHeight-height)/2-100,width,height);

      //绘制圆形用户头像
      // let { userInfo } = this.state;
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
      ctx.drawImage(picture, 0,0, width, height);
      ctx.restore();

      // 绘制文字
      // ctx.save()
      // ctx.setFontSize(16)
      // ctx.setFillStyle('#FFF')
      // ctx.fillText(userInfo.nickName, 100, 200)
      // ctx.setFontSize(12)
      // ctx.setFillStyle('black')
      // ctx.fillText('好喝⾼颜值MEOW莫斯卡托⽓泡葡萄酒甜型⾹槟', 20, 280)
      // ctx.setFontSize(12)
      // ctx.setFillStyle('#b30000')
      // ctx.fillText('￥25.00 - ￥88.00', 50, 300);
      // ctx.setFontSize(12)
      // ctx.setFillStyle('black')
      // ctx.fillText('长按识别二维码', 130, 380)
      // ctx.restore()
      // 绘制二维码
      // let qrcode = await Taro.downloadFile({
      //  url: 'https://tva1.sinaimg.cn/large/00831rSTgy1gczoldqrojj30hi0hi770.jpg'
      // })
      // ctx.drawImage(cooperation, 30, 340, 80, 80)
      // 将以上绘画操作进行渲染
      ctx.draw()

    }

    /**
     * 保存图图片到本地
     */
    saveCard = async () => {
      const that = this
      const { picture, width, height } = this.props
      //将canvas图片内容到出指定的大小的图片
      let res = await Taro.canvasToTempFilePath({
        x: 0,
        y: 0,
        width: width,
        height: height,
        destWidth: width,
        destHeight: height,
        canvasId: 'cardCanvas',
        fileType: 'png'
      })
      let saveRes = await Taro.saveImageToPhotosAlbum({
        filePath: res.tempFilePath,
        success: data => {
          that.setState({
            ...that.state,
            isShowCanvas: false
          })
          Taro.showModal({
            title: '提示',
            content: '您的二维码已保存到相册，赶快识别二维码添加小夕进行咨询吧',
            showCancel: false,
            success: res => {
              if (res.confirm) {
              } else if (res.cancel) {
                // console.log('用户点击取消')
              }
            }
          })
        },
        fail: function (err) {
          if (err.errMsg === "saveImageToPhotosAlbum:fail:auth denied" || err.errMsg === "saveImageToPhotosAlbum:fail auth deny" || err.errMsg === "saveImageToPhotosAlbum:fail authorize no response") {
            // 这边微信做过调整，必须要在按钮中触发，因此需要在弹框回调中进行调用
            Taro.showModal({
              title: '提示',
              content: '需要您授权保存相册',
              showCancel: false,
              success: modalSuccess => {
                Taro.openSetting({
                  success(settingdata) {
                    // console.log("settingdata", settingdata)
                    if (settingdata.authSetting['scope.writePhotosAlbum']) {
                      Taro.showModal({
                        title: '提示',
                        content: '获取权限成功,再次点击图片即可保存',
                        showCancel: false,
                      })
                    } else {
                      Taro.showModal({
                        title: '提示',
                        content: '获取权限失败，将无法保存到相册哦~',
                        showCancel: false,
                      })
                    }
                  },
                  fail(failData) {
                    // console.log("failData", failData)
                  },
                  complete(finishData) {
                    // console.log("finishData", finishData)
                  }
                })
              }
            })
          }
        }
      })
      // if (saveRes.errMsg === 'saveImageToPhotosAlbum:ok') {
      //   Taro.showModal({
      //     title: '图片保存成功',
      //     content: '图片成功保存到相册',
      //     showCancel: false,
      //     confirmText: '确认',

      //   })
      // } else {
      //   Taro.showModal({
      //     title: '图片保存失败',
      //     content: '请重新尝试',
      //     showCancel: false,
      //     confirmText: '确认'
      //   })
      // }
    }

    render () {
      const { isShowCanvas } = this.state
      const { width, height } = this.props
      return (
        <View className='share-container' onClick={() => { this.setState({...this.state,
          isShowCanvas: false,})}}>
          <Button onGetUserInfo={this.getUserInfo} openType="getUserInfo" type="primary" size="mini" className="btn-share">{ this.props.children }</Button>

          {
            isShowCanvas &&
            <View className="canvas-wrap">
              <Canvas
                onTouchEnd={this.saveCard}
                id="card-canvas"
                className="card-canvas"
                style={{width: width+'px', height: height+'px'}}
                canvasId="cardCanvas">
              </Canvas>
              <View onTouchEnd={this.saveCard} className="btn-save">点击保存图片</View>
            </View>
          }
        </View>
      )
    }

  }
