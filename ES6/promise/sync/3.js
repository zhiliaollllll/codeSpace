function a() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('a');
            resolve('aaa')
        }, 1000)
    })

}
function b() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('b');
            reject('bbb')
        }, 1500)
    })
}
function c() {
    console.log('c');
}

// Promise.all([a(), b()]).then(c)

//all必须接收到的所有的promise状态都为resolve，then才会调用

// a().then(() => {
//     console.log(res);
//     c()
// })
// Promise.race([a(), b()]).then(c)
//只要一个能执行，c就能执行

Promise.race([b(), a()])
    .then(c)
    .catch((err) => {
        console.log(err);//只要有错就到catch
    })