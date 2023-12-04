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
        .catch(err => {
            console.log(err)
        })


}











