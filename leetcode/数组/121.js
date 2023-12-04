var maxProfit = function (prices) {
    if (!prices || prices.length < 2) {
        return 0
    }
    let min = prices[0]
    let getMax = 0
    for (let i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i])
        const current = prices[i] - min
        getMax = Math.max(getMax, current)
    }
    return getMax
};