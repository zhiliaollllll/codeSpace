function mul() {
    // n != n * (n - 1)
    if (n == 1) {
        return 1
    }
    return n * mul(n - 1)
}
mul(6)
