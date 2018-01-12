// components/article/article.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    url: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: '',
    },
    content: {
      type: String,
      value: ''
    },
    data_id: {
      type: Number,
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
    showDetail: function(i) {
      var _id = this.properties.data_id;
      wx.navigateTo({
        url: `/pages/detail/detail?id=${_id}`
      })
    }
  }
})
