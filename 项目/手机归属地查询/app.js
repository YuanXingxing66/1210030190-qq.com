//app.js
App({
  getPhoneInfo(phoneNum,callback){
    wx.request({
      url: 'https://www.iteblog.com/api/mobile.php?mobile=' + phoneNum,
      header:{
        'content-type':'application/json'
      },
      sucess:function(res){
        callback(res.data);
      }
    })
  }

})
