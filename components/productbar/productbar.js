// components/productbar/productbar.js
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    product: {
      type: Object,
      value: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cartLen: null
  },

  /**
   * 组件的方法列表
   */
  methods: {
    intoCart: function () {
      const product = this.properties.product;
      app.globalData.total += 1;
      this.setData({ cartLen: app.globalData.total });
      if (app.globalData.cartHash.includes(product.id)) {
        app.globalData.cart.map(item => {
          if (item.id === 10086) {
            item.quantity += 1;
          }
        });
      } else {
        app.globalData.cartHash.push(product.id);
        app.globalData.cart.push(product);
      }

      wx.showToast({
        title: '成功加入购物车',
        icon: '',
        mask: true
      })
    },
    toCart: function () {
      wx.navigateTo({
        url: '/pages/cart/cart'
      })
    }
  },
  attached: function () {
    this.setData({ cartLen: app.globalData.total });
  }
})
