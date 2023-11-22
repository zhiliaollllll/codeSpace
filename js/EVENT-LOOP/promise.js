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

A()
    .then(() => {
        return B()
    })
    .then(() => {
        C()
    })
//.then 虽然默认会返回promise对象，但是当.then的回调有人为返回的的promise对象时，.then默认的promise会失效
