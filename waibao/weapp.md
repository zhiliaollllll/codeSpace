# 小程序外包

-当下最流行的线上线下结合程序
    外卖App起家，移动时代的红利  手机  ，定位GPS Location Base Service LBS
    momo LBS
    下上百兆
-小程序 中小商家，扫码拿小程序  线下的实体店，立马线上化，软件化    O2O
    offline to online 轻量化，不用安装
# 汽车4S店小程序开发
-商业级别的中小型外包程序，需要什么样的开发能力
-开发约定，架构思路 简单
    -pages 概念
        -由页面构成
            -wtml html html也是xml的一种 写结构 微信xml 没有div，只有view
            对象字面量 JSON 数据交换标准
            xml是早于JSON的数据交换标准
            <reviewer>
                <name>淡淡</name>
                <age>20</age>
            </reviewer>  //html
            {
                name:'淡淡',
                age:20
            }  //json
            -wxss css
            -js 交互|数据管理 Ajax 网络请求  向后端发送请求
            -json 配置文件
        -app.json
            app开头的都是全局的，是所有的页面共享的
-数据驱动界面思想 MVVM
    -可以在js里配置一个data区域 info
        {{数据绑定 占位符 info}}
        wtml 模版
        data 模版数据
        页面=模版+数据
        数据改变，模版会重新编译，显示新页面

-优质项目开发思路
    -wxml有着html不具备的组件，image，swiper可以快速实现幻灯片
        -看文档
    -css开发，将样式按照原子功能，封装，有利于未来项目的复用
        -当你发现在重复写样式的时候，
            white hero section
            一行或几行css 形成一个功能模块
            .sub-header{副标题
                font-size:;
                line-height:;
            }
        -慢慢积累经验
   