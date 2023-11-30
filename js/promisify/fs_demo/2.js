// fs 读取文件
// promise + then / async + await 解决方案
const fs = require('fs')

function readFileByPromise() {
    ReadA('./a.txt', 'utf-8')
        .then(data => {
            console.log(data)
            return ReadA('./b.txt', 'utf-8')
        })
        .then(data2 => {
            console.log(data2)
            return ReadA('./c.txt', 'utf-8')
        })
        .then(data3 => {
            console.log(data3)
        })
        .then(err => {
            console.log(err)
        })


}





















const fs = require('fs')
// - 硬盘到内存
// - 文件大小
fs.readFile('./a.txt', 'utf-8', ((err, data) => {
    // 后端 稳定性第一
    if (err) {
        console.log(err)
        return
    }
    // buffer 二进制流
    console.log(data)
    fs.readFile('./b.txt', 'utf-8', ((err, data2) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data2)
    }))
    fs.readFile('./c.txt', 'utf-8', ((err, data3) => {
        if (err) {
            console.log(err)
            return
        }
        console.log(data3)

    }))
}))