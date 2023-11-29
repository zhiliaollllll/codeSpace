// const coins = [2, 3, 5], amount = 11

// var coinChange = function (coins, amount) {
//     if (amount === 0) return { 0: 0 }

//     let max = {}
//     for (let i = coins.length - 1; i >= 0; i--) {
//         if (amount / coins[i] >= 1) { //找到了能用的最大面值
//             max[coins[i]] = Math.floor(amount / coins[i])
//             let rest = amount % coins[i]
//             return max = Object.assign(max, coinChange(coins, rest))
//         }
//     }
// };
// console.log(coinChange(coins, amount));
const coins = [2, 3, 5], amount = 11

var coinChange = function (coins, amount) {
    //每个目标金额对应的最少硬币个数
    const f = []
    f[0] = 0
    for (let i = 1; i <= amount; i++) {

    }
};
console.log(coinChange(coins, amount));
