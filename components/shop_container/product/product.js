// components/shop_container/product/product.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl: {
      type: String,
      value: null
    },
    oldPrice: {
      type: Number,
      value: null
    },
    newPrice: {
      type: Number,
      value: null
    },
    title: {
      type: String,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    showProduct: function () {
      wx.navigateTo({
        url: '/pages/product/product?title=商品详情'
      })
    }
  },
})
