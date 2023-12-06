var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b)
    const len = nums.length
    let sum = 0
    for (let i = 0; i < len; i = i + 2) {
        sum = sum + nums[i]
    }
    return sum
};