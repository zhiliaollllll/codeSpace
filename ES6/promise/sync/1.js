//回调
function a() {
    setTimeout(() => {
        console.log('阿真');
    }, 1000)
}

function b() {
    setTimeout(() => {
        console.log('10亩地');
    }, 0)
}
a()
b()
