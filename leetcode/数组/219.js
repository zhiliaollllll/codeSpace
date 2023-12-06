// var containsNearbyDuplicate = function (nums, k) {
//     const len = nums.length
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (i !== j && nums[i] === nums[j] && Math.abs(i - j) <= k) {
//                 return true
//             }
//         }
//     }
//     return false
// };
// 哈希表
var containsNearbyDuplicate = function (nums, k) {
    const hashTable = {}
    const len = nums.length
    for (let i = 0; i < len; i++) {
        let cur = nums[i]
        if (cur in hashTable && i - hashTable[cur] <= k) {
            return true
        }
        hashTable[cur] = i
    }
    return false
};