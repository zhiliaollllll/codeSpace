var arr = [1, [2, [3, 4]], 5]
function flatten(arr) {
    var result = []
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            var nextArr = flatten(arr[i])
            result = result.concat(nextArr)
        } else {
            result.push(arr[i])
        }
    }
    return result
}
console.log(flatten(arr));