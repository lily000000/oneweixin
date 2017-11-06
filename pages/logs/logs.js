//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],

  },
  showitem:function(){
    this.setData({
      open:!this.data.open
    })
  },
  showitemo:function(){
    this.setData({
      openo:!this.data.openo
    })
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
