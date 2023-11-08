var findTheLongestBalancedSubstring = function (s) {
    if (!s?.length) return 0;
    let sum = 0;
    let L0 = 0;
    let L1 = 0;
    for (const l of s) {
        if (l === '0') {
            if (L1) {
                L0 = 0;
                L1 = 0;
            }
            L0 += 1;
            if (L0 === L1 && (L0 + L1) > sum) {
                sum = L0 + L1;
                L0 = 0;
                L1 = 0;
            }
        } else {
            L1 += 1;
            if (L0 >= L1 && L1 * 2 > sum) {
                sum = L1 * 2;
            }
            if (L0 === L1 && (L0 + L1) > sum) {
                sum = L0 + L1;
                L0 = 0;
                L1 = 0;
            }
        }
    }
    return sum
};

