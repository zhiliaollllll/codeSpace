//回调
function a(cb) {
    setTimeout(() => {
        console.log('木木');
        cb()
    }, 1000)
}

function b() {
    setTimeout(() => {
        console.log('清华大学');
    }, 0)
}
a(b)
