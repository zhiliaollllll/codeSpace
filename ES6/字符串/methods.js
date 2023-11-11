// let str = 'abcdefg'
// console.log(str[2]);
// console.log(str.at(2));
// console.log(str.startsWith('a'));

let obj = {
    a: 1,
    b: 2
}
// console.log(obj.toString());
let str = JSON.stringify(obj);
console.log(str);
console.log(JSON.parse(str));//变回对象

