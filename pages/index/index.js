//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    imgUrls: [
      'https://rozwel.club/uploads/tiny/slider/1.jpg',
      'https://rozwel.club/uploads/tiny/slider/6.jpg',
      'https://rozwel.club/uploads/tiny/slider/4.jpg',
      'https://rozwel.club/uploads/tiny/slider/7.jpg',
      'https://rozwel.club/uploads/tiny/slider/5.jpg',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    isReachBottom: false,
    categories: [
      {
        url: 'https://rozwel.club/uploads/tiny/category/1.png',
        title: '猫咪饲养',
        pageUrl: '/pages/allarticle/allarticle'
      },
      {
        url: 'https://rozwel.club/uploads/tiny/category/2.png',
        title: '猫咪训练',
        pageUrl: '/pages/allarticle/allarticle'
      },
      {
        url: 'https://rozwel.club/uploads/tiny/category/3.png',
        title: '猫咪医疗',
        pageUrl: '/pages/allarticle/allarticle'
      }
    ]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
  },
  onReachBottom: function () {
    if (this.data.isReachBottom) {
      return;
    }
    setTimeout(() => {
      this.setData({ isReachBottom: true });
    }, 500);
  }
})
