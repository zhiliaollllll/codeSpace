// var a = 1

// function foo() {
//     console.log(this.a);
// }

// foo()

function foo() {
    var b = 1;
    bar()
}
function bar() {
    console.log(this.b);
}
foo()
