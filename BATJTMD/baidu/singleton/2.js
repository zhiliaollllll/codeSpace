// es6 class 企业及开发，大型项目 学java
// 类是抽象的概念 实例化对象

class SingleDog {
    // 属于对象
    show() {
        console.log('我是一个单例对象');
    }
    // 不要直接new
    // 属于类
    static getInstance() {
        // console.log('静态方法')
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
}
// 类的方法
const s1 = SingleDog.getInstance
const s2 = SingleDog.getInstance
console.log(s1 === s2)
// new 过程 不同内存 同一个房间
// s1/s2 里的值是地址
// 同一个地址 先生成一个地址 然后再new的时候 去判断一下，如果已经有了就不用再new
// if else
// 单例模式
// const s1 = new SingleDog()
// const s2 = new SingleDog()