var arr = [1, [2, [3, 4]]]
方法
[1, [2, [3, 4]]].toString()
'1,2,3,4'
'1,2,3,4'.split(',')

function flaten(arr) {
    arr.toString().split(',').map(function (item) {
        return +item
    })
}
字符串转数字型
1.Number('1')
2. + '1'

