// pages/index/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		goods_list: [1, 2, 3, 4, ],
    showModal_1:true,
	},
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal_1: false,
    });
  },
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function(options) {

	},
  checkboxChange: function (e) {
    var checked = e.detail.value
    var changed = {}

    this.setData(changed)
  },
	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh: function() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function() {

	}
})
