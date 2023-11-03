// 斐波那锲数列
function fb(n) {
    if (n == 2 || n == 1) {
        return 1
    }
    return fb(n - 1) + fb(n - 2)
}

console.log(fb(5));