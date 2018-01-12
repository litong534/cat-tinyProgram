// components/cartcard/cartcard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: {
      type: Object,
      value: {}
    },
    itemChecked: {
      type: Boolean,
      value: false
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
    checked: function () {
      this.properties.itemChecked = !this.properties.itemChecked;
      this.triggerEvent('itemChecked', { id: this.properties.item.id,item: this.properties.item }, { bubbles: true });
    }
  }
})
