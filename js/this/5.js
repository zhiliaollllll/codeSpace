function foo(n) {
    var a = 1
    setTimeout(function () {
        console.log('hello');
    }, 3000)
}
foo()
undefined//默认绑定