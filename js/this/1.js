
function identify() {
    return this.name.toUpperCase
}
function speek() {
    var greeting = "Hello,I'm" + identify.call(this)
    console.log(greetings);
}
var me = {
    name: 'Tom'
}
var you = {
    name: 'Jenny'
}
speek.call(me)
identify(you)