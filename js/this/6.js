function foo() {

}
var a = 1
var bar = function () {
    console.log(this.a);
}
// this是bar的，只是指向全局
var baz = () => {
    console.log(this.a)
}
baz()
// this是window的，只是指向全局
