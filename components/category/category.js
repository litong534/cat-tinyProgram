// components/category/category.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrl: {
      type: String,
      value: ''
    },
    title: {
      type: String,
      value: ''
    },
    pageUrl: {
      type: String,
      value:''
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
    toArticle:function() {
      wx.navigateTo({
        url: `${this.properties.pageUrl}?title=${this.properties.title}`
      })
    }
  }
})
