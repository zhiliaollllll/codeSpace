var isAnagram = function (s, t) {
    const charCount1 = {}
    const charCount2 = {}
    for (const char1 of s) {
        charCount1[char1] = (charCount1[char1] || 0) + 1
    }
    for (const char2 of t) {
        charCount2[char2] = (charCount2[char2] || 0) + 1
    }
    charCount1[char1] === charCount2[char2] ? true : false

};