// es6 class 类
// 类是抽象的概念 实例化对象

class SingleDog {
    show() {
        console.log('我是一个单例对象');
    }
}

const s1 = new SingleDog()
const s2 = new SingleDog()
s1 === s2//true  不同的作用域，值也不会一样

