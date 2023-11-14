
if (x < 0) {
    return false
} else {
    x_arr = x.toString().split(',')
    if (x.toString() === x_arr.reverse().toString()) {
        return true
    } else {
        return false
    }
}
