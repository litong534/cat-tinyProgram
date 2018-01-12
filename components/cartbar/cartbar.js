// components/cartbar/cartbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    totalPrice: {
      type: Number,
      value: 0
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
    charge: function() {
      wx.showToast({
        title: '结算成功！',
        mask: true
      })
    }
  }
})
