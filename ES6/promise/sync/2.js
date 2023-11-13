function xq() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥相亲了');
            resolve('相亲成功!')
        }, 2000)
    })
}
function marry() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('龙哥结婚了');
            resolve('承诺承诺!')
        }, 1000)
    })
}
function baby() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('小龙女');
            resolve('第二个!')
        }, 500)
    })
}
function baby2() {
    setTimeout(() => {
        console.log('小龙');
    }, 300)
}
xq()
    .then((res) => {
        console.log(res);
        return marry()
    })
    .then(res2 => {
        console.log(res2);
        return baby()
    })
    .then(res3 => {
        console.log(res3);
        baby2()
    })
