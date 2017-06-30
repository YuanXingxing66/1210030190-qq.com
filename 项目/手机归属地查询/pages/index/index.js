 //index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    phoneNumber:null,
    phoneInfo:null,
    historyList:[],
    disable:true
  },
  //事件处理函数
bindPhoneInput(event){
  this.setData({
    phoneNumber:event.detail.value
  })
  this.clearQueryRst();
  this.setDisabled();
},
setDisabled(){
  this.setData({
    disabled: (this.data.phoneNumber &&this.data.phoneNumber.tostring().length==11)?false:true
  })
},
queryPhoneInfo() {
  app.getPhoneInfo(this.data.phoneNumber, data => this.setData({
    phoneInfo: data
  }));
  this.addQueryHistory(this.data.phoneNumber); // 添加搜索记录
},

addQueryHistory(phoneNumber){
  var historyList = wx.getStorageSync('history') || [];
  if(historyList.indexOf(phoneNumber) === -1){
    historyList.unshift(phoneNumber);
    wx.setStorageSync('historyList', historyList);
      }
    this.setData({
      historyList:historyList,
    })
},
  onLoad: function () {
      this.setData({
        historyLidt:wx.getStorageSync('historyList')||[]
      })
    },
selectHistory(event) {
  this.setData({
    phoneNumber:event.currentTarget.dataset.number,
    disabled:false,
  });
  this.clearQueryRst();
},
clearQueryRst(){
  this.setData({
    phoneInfo:null
  })
},
})