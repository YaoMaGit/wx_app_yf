// pages/menber/oftengoods/oftengoods.js
var app = getApp();
var imageBaseUrl = app.globalData.imageBaseUrl;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageBaseUrl,
    goods_list: [1, 2, 3],
    goods_list2: [1, 2],
    tab: 1,
  },
  tabclk1: function () {
    this.setData({
      tab:1,
      goods_list: [1, 2, 3],
    })
  },
  tabclk2: function () {
    this.setData({
      tab: 2,
      goods_list: [1, 2],
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})