//app.js
App({
  Url: 'https://www.uobrand.com ',
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: function (res) {
        if (res.code) {
          var code = res.code;
          wx.getUserInfo({
            success: function (res2) {
              //请求自己的服务器
              //Login(code, res2);
              //console.log('登录token写入失败！' + code);
              wx.request({
                url: 'https://www.uobrand.com/mobile2/user.php?act=login',
                data: {
                  code: code,
                  userInfo: res2
                },
                method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                header: {
                  'content-type': 'application/json'
                }, // 设置请求的 header
                success: function (res) {
                  // success
                  //wx.hideToast();
                  console.log('服务器返回' + res.data.token);
                  //setToken(res.data.obj.token);

                  try {
                    wx.setStorageSync('token', res.data.token);
                    wx.setStorageSync('user_id', res.data.user_id);
                    //console.log('登录token写入失败kkl！' + res.data.obj.token);
                    //that.globalData.token = res.data.obj.token;
                  } catch (e) {
                    //console.log('登录token写入失败！' + e);
                  }

                  //cacheToken(res.data.obj.token);
                },
                fail: function () {
                  // fail
                  // wx.hideToast();
                },
                complete: function () {
                  // complete
                }
              })
        }
      })
  } else {
    console.log('获取用户登录态失败！' + res.errMsg)
  }
}


      // success: res => {
      //   if (res.code) {
      //     console.log('获取用户登录凭证：' + res.code);
      //   } else {
      //     console.log('获取用户登录态失败：');
      //   }
      // }
    })
// 获取用户信息
wx.getSetting({
  success: res => {
    if (res.authSetting['scope.userInfo']) {
      // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
      wx.getUserInfo({
        success: res => {
          // 可以将 res 发送给后台解码出 unionId
          this.globalData.userInfo = res.userInfo

          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          if (this.userInfoReadyCallback) {
            this.userInfoReadyCallback(res)
          }
        }
      })
    }
  }
})
  },
globalData: {
  userInfo: null
}
})


// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     message:'haha',
//     copyright:'杭州宗盛智能科技有限公司  版权所有',
//     phone:'1',
//     password:'1',
//     arry:[1,2,3,4,5],
//     view: 'APP',
//     staffA: { firstName: 'Hulk', lastName: 'Hu' },
//     staffB: { firstName: 'Shang', lastName: 'You' },
//     staffC: { firstName: 'Gideon', lastName: 'Lin' },
//     count: 1
//   },
//   phoneInput:function(e){
//     this.setData({
//       phone:e.detail.value
//     })
//   },
//   passwordInput:function(e){
//     this.setData({
//       passworld:e.detail.value
//     })
//   },
//   login:function(){
//     if(this.data.phone.length == 0||this.data.password.length ==0){
//       wx.showToast({
//         title: '用户名和密码不能为空',
//         icon:"loading",
//         duration:1000
//       })
//     }else{
//       wx.showToast({
//         title: '登录成功',
//         icon: 'sucess',
//         duration: 1000
//       }),
//       wx.navigateTo({
//         url: '../index/index',
//       })
//     }
//   },
//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
    
//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {
    
//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {
    
//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {
    
//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {
    
//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
    
//   }
// })