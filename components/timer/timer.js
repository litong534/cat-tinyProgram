// components/timer/timer.js
const util = require('../../utils/util.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  /**
   * 组件的初始数据
   */
  data: {
    timerArr: [],
    timer: null
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready: function () {
    this.setData({timerArr: util.countDown()});
    if (util.countDown().join('') === '000000') {
      clearInterval(this.data.timer);
    } else if(!this.data.timer){
      const _timer = setInterval(() => {
        this.setData({
          timerArr: util.countDown()
        });
      }, 1000);
      this.setData({timer: _timer});
    }
  }
})
