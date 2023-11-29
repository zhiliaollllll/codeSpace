const nums = [1, 2, 3, 1]

var containsDuplicate = function (nums) {
    nums.sort()
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] = nums[i + 1]) {
            return true
        }
    }
    return false
};

console.log(containsDuplicate(nums));