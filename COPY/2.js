// let a = { name: '俊熙' }
// let b = Object.create(a)
// a.name = '君儿'
// console.log(b.name);

let a = {
    name: '俊熙', like: {
        n: 'coding'
    }
}
let b = Object.assign({}, a)
a.like.n = 'running'
console.log(b);