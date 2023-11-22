function A() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步A完成');
            resolve()
        }, 1000)
    })
}
function B() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步B完成');
            resolve()
        }, 500)
    })
}
function C() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('异步C完成');
        }, 100)
    })
}
// A()
// B()
// C()

async function foo() { //async 写这里等同于return new Promise((resolve, reject) => {}
    await A() //await 会阻塞后续代码，将后续代码推入微任务队列
    // console.log(1)
    await B()
    await C()
}
foo()