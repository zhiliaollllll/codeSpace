// nums = [4, 3, 2, 7, 8, 2, 3, 1]
// nums = [-, -, -, -, 5, 6, -, -]

var findDisappearedNumbers = function (nums) {
    let arr = []
    const len = nums.length
    for (let i = 0; i < len; i++) {
        let newIndex = Math.abs(nums[i]) - 1
        nums[newIndex] = -Math.abs(nums[newIndex])
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) {
            arr.push(i + 1)
        }
    }
    return arr
};
