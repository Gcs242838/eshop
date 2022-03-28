// pages/profile/profile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogined: false,     // 是否已经登录
    
    // 用户信息存储
    wechatUserInfo: {
      nickName: '微信网名',
      avatarUrl: 'https://d1icd6shlvmxi6.cloudfront.net/gsc/COJ66A/88/e2/a0/88e2a07f3f4043db916b4452fb741f7b/images/%E6%88%91%E7%9A%84/u8.svg?token=8a20d5c38c1033a08b8328953e02a331f8dd4f5b1582969b92be5f85111ebb2a&pageId=6693450b-c783-4ac7-9234-4a6babf07563',
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload出发')
    // wx.login({
    //   success: (res) => {
    //     if (res.code) {
    //       console.log('成功获取到了code,内容:' + JSON.stringify(res))
    //     }
    //   }
    // })
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

  },
  
  // 点击登录按钮的逻辑
  login(){
    console.log("login()执行")
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        // 获取成功了
        console.log(res)
        
        this.setData({"wechatUserInfo":res.userInfo})  // 设置用户信息
        this.setData({"isLogined": true})              // 设置已经登录状态
        
        console.log(this.data.wechatUserInfo)
      },
      fail: (res) => {
        console.log(res)
      },
    })
  }
})