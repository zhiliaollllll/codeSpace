var arr = [1, [2, [3, 4]]]
var sum = arr.reduce {
    function(pre, item,)
}

var arr = [1, [2, [3, 4]]]
function flaten(arr) {
    return arr.reduce(function (pre, item) {
        return pre.concat(Array.isArray(item) ? flaten(item) : item)
    }
    )
}
console.log(flaten(arr));