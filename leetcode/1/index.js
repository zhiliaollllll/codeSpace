// nums数组
// target整数目标值
var twoSum = function (nums, target) {
    // 要筛选满足x+y=target的x和y
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return i, j
            }
        }
    }
    // x和y在这个数组中的下标放在一个数组中
    // return 这个数组
};

twoSum([2, 2, 2, 5, 4], 9)