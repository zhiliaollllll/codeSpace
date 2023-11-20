// const { log } = require('console')
const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')
// const { log } = require('console')

https.get('https://movie.douban.com/top250', (res) => {
    // console.log(res)
    let html = ''
    res.on('data', (chunk) => {//监听数据读取
        console.log(chunk + '')
        html += chunk
    })
    res.on('end', (chunk) => {//源代码获取完毕
        const $ = cheerio.load(html)
        const result = []
        $('li .item').each(function () {
            const title = $('.info .title', this).text()
            const star = $('.info .bd .rating_num', this).text()
            const pic = $('.pic img', this).attr('src')
            result.push(
                {
                    title,
                    star,
                    pic
                }
            )
        })
        // console.log(result)
        fs.writeFile('./list.json', JSON.stringify(result), (err, data) => {
            if (err) {
                throw err
            } else {
                console.log('文件写入成功')
            }
        })
    })
})