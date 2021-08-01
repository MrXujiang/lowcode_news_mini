import Taro from '@tarojs/taro';
import { connect } from 'react-redux'
import { config } from '@utils';

function withShare(opts = {}) {

  // 设置默认
  const defalutPath = 'pages/index/index?';
  const defalutTitle = '趣谈前端，让学习前端更有趣！';
  const defaultImageUrl = config.workImgUrl;

  return function shareComponent(Component) {
    // redux里面的用户数据
    @connect(({users})=>({
      users
    }))
    class WithShare extends Component {
      async componentWillMount() {
        if (process.env.TARO_ENV === 'weapp') {
          await Taro.showShareMenu({
            withShareTicket: true,
            menus: ['shareAppMessage', 'shareTimeline'],
            success(res) {
              // console.log(res)
            },
            fail(e) {
              // console.log(e)
            }
          });
        }

        if (super.componentWillMount) {
          super.componentWillMount();
        }
      }

      // 点击分享的那一刻会进行调用
      onShareAppMessage = () => {
        const { userInfo } = this.props.users;

        let { title, imageUrl, path = null } = opts;

        // 从继承的组件获取配置
        if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }

        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        // 从继承的组件获取配置
        if (
          this.$setShareImageUrl &&
          typeof this.$setShareImageUrl === 'function'
        ) {
          imageUrl = this.$setShareImageUrl();
        }

        if (!path) {
          path = defalutPath;
        }

        // 每条分享都补充用户的分享id
        // 如果path不带参数，分享出去后解析的params里面会带一个{''： ''}
        const sharePath = `${path}&shareFromUser=${userInfo.shareId}`;

        console.log({
          title: title || defalutTitle,
          path: sharePath,
          imageUrl: imageUrl || defaultImageUrl
        })
        return {
          title: title || defalutTitle,
          path: sharePath,
          imageUrl: imageUrl || defaultImageUrl
        };
      }

      // 分享朋友圈
      onShareTimeline = (res) => {
        let { title, imageUrl, path = null } = opts;

         // 从继承的组件获取配置
         if (this.$setSharePath && typeof this.$setSharePath === 'function') {
          path = this.$setSharePath();
        }

        // 从继承的组件获取配置
        if (this.$setShareTitle && typeof this.$setShareTitle === 'function') {
          title = this.$setShareTitle();
        }

        // 从继承的组件获取配置
        if (
          this.$setShareImageUrl &&
          typeof this.$setShareImageUrl === 'function'
        ) {
          imageUrl = this.$setShareImageUrl();
        }

        if (!path) {
          path = defalutPath;
        }
        return {
          // 这是我创作的第3幅作品，获得了5星评价，快来给我点赞吧
          title: title || defalutTitle,
          // query: `is_fromShare=true&id=${detail.id}`,
          query: {is_fromShare: true, id: this.state.id || this.props.users.userInfo.shareId},
          imageUrl: imageUrl || defaultImageUrl
        };
      }

      render() {
        return super.render();
      }
    }

    return WithShare;
  };
}

export default withShare;
