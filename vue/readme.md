-vue 脚手架
    -npm init vite
    1.初始化vue项目，下载了项目模版 starter
    2.vite 快
    -cd rate  项目目录
        src是开发目录
    -npm i 依赖安装
        vue 3.0+
        vite
    -npm run dev   vite
        scripts
    -npm run build
        dist 目录
    -把页面按组件划分
        每个组件都是vue文件
        -html结构
        -script js
        -style css
    -组件化思想
        component
        开发单位是html标签 低级 没有复用性
        vue 提供了组件的概念 可以复用
        组件是一堆html、css 、js的集合，完成了牛哥展示和功能
        开发任务的拆分

    DOM树 => 组件树
        这个组件做过，可以不用写？
        .vue组件思想 分工 复用 优化
    -devtool
    -数据 MVVM思想
        -ref 响应式