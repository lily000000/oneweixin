//index.js
//获取应用实例
var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var columnChart = null;
var chartData = {
  main: {
    title: '总成交量',
    data: [80, 50, 45, 400,100],
    categories: ['大厦1号', '大厦2号', '大厦3号', '大厦4号', '大厦5号']
  },
  sub: [{
    title: '大厦1号',
    data: [70, 40, 65, 100, 34, 18],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
      title: '大厦2号',
    data: [55, 30, 45, 36, 56, 13],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
      title: '大厦3号',
    data: [76, 45, 32, 74, 54, 35],
    categories: ['1', '2', '3', '4', '5', '6']
  }, {
      title: '大厦4号',
    data: [76, 54, 23, 12, 45, 65],
    categories: ['1', '2', '3', '4', '5', '6']
  }]
};
Page({
  data: {
    todymoney:'22.00',
    monthmoney:'22.00',
    moremessage:'查看更多记录>>',
    chartTitle: '总成交量',
    isMainChartDisplay: true
  },
  morejump: function () {
    wx.navigateTo({
      url: '../more/more',
      success: function (res) {

      },
      fail: function (res) {

      },
      complete: function (res) {

      },
    })
  },
  onReady: function (e) {
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    columnChart = new wxCharts({
      canvasId: 'columnCanvas',
      type: 'column',
      animation: true,
      categories: chartData.main.categories,
      series: [{
        name: '成交量',
        data: chartData.main.data, 
        format: function (val, name) {
          return val.toFixed(2) + '元';
        }
      }
      ],
      yAxis: {
        format: function (val) {
          return val + '元';
        },
        title: '最近7天',
        min:0
      },
      xAxis: {
        disableGrid: false,
        type: 'calibration'
      },
      extra: {
        column: {
          width:20
        }
      },
      width: windowWidth,
      height: 175,
    });
  } 
})

// const app = getApp()
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
    
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
// Page({
//   data: {
//     motto: 'Hello World',
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo')
//   },
//   //事件处理函数
//   bindViewTap: function() {
//     wx.navigateTo({
//       url: '../logs/logs'
//     })
//   },
//   onLoad: function () {
//     if (app.globalData.userInfo) {
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true
//         })
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//   },
//   getUserInfo: function(e) {
//     console.log(e)
//     app.globalData.userInfo = e.detail.userInfo
//     this.setData({
//       userInfo: e.detail.userInfo,
//       hasUserInfo: true
//     })
//   }
// })
