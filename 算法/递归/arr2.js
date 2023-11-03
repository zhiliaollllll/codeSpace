var arr = [1, [2, [3, 4]]]
function flatten(arr) {
    var result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            var nextArr = flatten(arr[i])
            result = result.concat(nextarr)
        } else {
            result.push(arr[i])
        }
    }

    return result
}
console.log(flatten(arr));
判断数组
arr instanceof Array(true)
Array.isArray(arr)(true)

合并数组
let a = [1, 2], b = [3, 4]
a.concat(b)
[].concat(a, b)
[...a,...b]