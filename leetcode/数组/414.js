var thirdMax = function (nums) {
    const unique = [...new Set(nums.sort((a, b) => b - a))]
    return unique.length >= 3 ? unique[2] : unique[0]
};