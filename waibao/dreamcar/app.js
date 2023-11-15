// 应用
// Page()页面
//配置
App({
    globalData:{
      
    },
    //打开的时候，触发onLaunch事件,首先发生
    onLaunch(){
      //在页面启动时发送接口请求
      // console.log('应用启动了');
      //发送一个远程请求！
      wx.request({
        url: 'https://resources.ninghao.net/wxapp-case/db.json',
        success:(response)=>{
          // console.log(response);
          //写assign
          Object.assign(this.globalData,response.data)
          // console.log(this,'-----');前后端代码联调
        }
      })
    }
  
  })