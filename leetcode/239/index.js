// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// var maxSlidingWindow = function (nums, k) {
//     let left = 0, right = k - 1, res = []
//     while (right < nums.length) {
//         const max = calMax(left, right)
//         res.push(max)
//         left++
//         right++
//     }
//     function calMax(a, b) {
//         let maxNums = -Infinity
//         for (let i = a; i <= b; i++) {
//             if (nums[i] > maxNums) {
//                 maxNums = nums[i]
//             }
//         }
//         return maxNums
//     }
//     return res
// };

// console.log(maxSlidingWindow(arr, 4));
// 超时

// 双端队列做法

function maxSlidingWindow(nums, k) {
    let result = [];
    let window = [];

    for (let i = 0; i < nums.length; i++) {
        // 弹出队列中小于当前元素值的索引
        while (window.length > 0 && nums[i] > nums[window[window.length - 1]]) {
            window.pop();
        }

        // 弹出超出窗口范围的索引
        if (window.length > 0 && window[0] < i - k + 1) {
            window.shift();
        }

        // 将当前索引加入队列
        window.push(i);

        // 将窗口中的最大值加入结果集
        if (i >= k - 1) {
            result.push(nums[window[0]]);
        }
    }

    return result;
}

// 示例
let nums = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;
let result = maxSlidingWindow(nums, k);
console.log(result);  // 输出: [3, 3, 5, 5, 6, 7]
