# 小程序业务架构
-App和Page
App全局 pages共享
app.js globalData
app.wxss 样式
app.json  应用配置
-globalData如何来到Page中
  -const app = getApp()
  应用对象
  -data 初始化占位符
  {
    data:{
      user:{}//空的
    }
  }
  -生命周期
  数据来自于后端接口
  onLoad wxml+wxss 显示了
  这是请求数据的最佳时期
  this.setData({
    user:真正的值
  })
  -页面会热更新 重新绘制{{}}这部分
  -循环输出的概念
    -模板在{{直出}}外，数组列表输出的常态
    -block 只承载指令 wx：for
    不会出现在文档流中
    -item默认
    item.image
  -css 架构思路
   Dry 原则 Don't repeat yourself
   css 业务拆分 一个元素多个类名
   section hero white
    -app.wxss 全局样式
      -公用的样式
      -模块化
    -page.wxss 业务样式
    -页面中比较独立的模块，读库css文件
    -通用组件也可以
    button/card都是组件
    -通用的业务而也可以
    。heros>.content>.header>.sub_header
    维护花的时间更多，甚至不可维护
-开发就是
  -准备好数据
  -写页面