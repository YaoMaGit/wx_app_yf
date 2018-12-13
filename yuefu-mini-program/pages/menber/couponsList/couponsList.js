// pages/menber/couponsList/couponsList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    tabs: ['抵用券', '赠品劵', '兑换优惠劵'],
    list: [
      {
        name: '全场通用',
        typeText: '专用券',
        type: 0,
      },
      {
        name: '备孕必吃专属优惠劵',
        typeText: '通用券',
        type: 1,
      },
      {
        name: '全场通用',
        typeText: '专用券',
        type: 0,
      },
      {
        name: '备孕必吃专属优惠劵',
        typeText: '通用券',
        type: 2,
      },
    ],
    giftList: [
      { url: 'http://47.106.206.50/yuefu/assets/image/pageImages/food-4.png', status: 0 },
      { url: 'http://47.106.206.50/yuefu/assets/image/pageImages/food-4.png', status: 1 },
    ],
  },
  // 切换tabs
  swichTab: function (e) {
    console.log(e)
    let currentTab = e.currentTarget.dataset.index;

    if (e.currentTarget.dataset.index == 2){
      wx.navigateTo({
        url: '../qcode/qcode'
      })
    }else{
      this.setData({
        currentTab,
      })
    }
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