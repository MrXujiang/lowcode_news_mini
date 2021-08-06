export default {
  pages: [
    'pages/index/index',
    'pages/search/index',
    'pages/combatDetail/index',
    'pages/help/index',
    'pages/login/index',
    'pages/webView/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  cloud: true
  // subPackages: [
  //   {
  //     root: 'pages/index/', // 所需分包的目录
  //     pages: [
  //       'index' // 所需分包的具体文件
  //     ]
  //   },
  //   {
  //     root: 'pages/login/',
  //     pages: [
  //       'index'
  //     ]
  //   },
  //   {
  //     root: 'pages/combatDetail/',
  //     pages: [
  //       'index'
  //     ]
  //   },
  //   {
  //     root: 'pages/help/',
  //     pages: [
  //       'index'
  //     ]
  //   },
  //   {
  //     root: 'pages/search/',
  //     pages: [
  //       'index'
  //     ]
  //   }
  // ]
}
