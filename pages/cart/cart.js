// pages/cart/cart.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: null,
    selectedItem: [],
    selectedItemHash: [],
    itemChecked: false,
    selectAll: false,
    totalPrice: 0,
    isEmpty: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(app.globalData.cart.length !== 0) {
      this.setData({isEmpty: false});
      this.setData({ cart: app.globalData.cart });
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.setData({ cart: app.globalData.cart });
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  itemChecked: function (e) {
    const id = e.detail.id;
    const item = e.detail.item;
    if (this.data.selectedItemHash.includes(id)) {
      this.setData({ selectAll: false });
      this._removeHashItem(id, this.data.selectedItemHash);
      this._removeItem(id, this.data.selectedItem);  
    } else {
      this.data.selectedItem.push(item);
      this.data.selectedItemHash.push(id);
      if (this.data.selectedItem.length === this.data.cart.length) {
        this.setData({ selectAll: true });
      }
    }
    this.setData({ totalPrice: this._calculatePrice() });
  },
  selectAll: function () {
    this.setData({ selectAll: !this.data.selectAll });
    if(this.data.selectAll) {
      //选中全部
      this.setData({ selectedItem: this._getSelectedProduct()});
      this.setData({selectedItemHash: this._getAllProductId()});
    }else {
      //全都不选中
      this.setData({selectedItem: []});
      this.setData({selectedItemHash: []});
    }
    this.setData({ totalPrice: this._calculatePrice()});
  },
  _removeHashItem(id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === id) {
        arr.splice(i, 1);
      }
    }
  },
  _removeItem(id, arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        arr.splice(i, 1);
      }
    }
  },
  _getAllProductId() {
    let arr = [];
    for (let product of this.data.cart) {
      arr.push(product.id);
    }
    return arr;
  },
  _getSelectedProduct() {
    let arr = [];
    for (let product of this.data.cart) {
      arr.push(product);
    }
    return arr;
  },
  _calculatePrice() {
    let price = 0;
    for(let item of this.data.selectedItem) {
      let singlePrice = item.newPrice * item.quantity;
      price += singlePrice;
    }
    return price;
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
  goToCart: function () {
    wx.switchTab({
      url: '/pages/shop/shop'
    })
  }
})