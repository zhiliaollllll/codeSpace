# JS 单线程
-进程：CPU运行指令和保存上下文所需要的时间
-线程：进程中的更小单位，描述了一段指令执行所需时间

## 新开一个tab页面 就是新开一个进程
需要多个线程配合才能完成页面的展示
1.渲染线程（GPU）
2.http请求线程
3.js引擎线程

渲染线程（GPU）和 js引擎线程 是互斥的//不安全的渲染
 
## JS为什么是单线程：
 优点：
    -节约内存开销
    -单线程没有锁的概念，节省上下文切换的时间

# 异步
-宏任务 (macrotask):
script
setTimeOut
setInterval
setImmediate
I/O
UI-rendering

-微任务 (microtask)
promise.then()
MutationObserver
Process.nextTick()

# event-loop
1.执行同步代码（这属于宏任务）
2.当执行栈为空，查询是否有异步代码需要执行
3.执行微任务
4.如果有需要，会渲染页面
5.执行宏任务（这也叫下一轮的event-loop的开启）


