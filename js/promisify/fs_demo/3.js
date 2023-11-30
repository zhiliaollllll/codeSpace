(async function () {
    try {
        const f1 = await readFileByPromise('./a.txt')
        const f2 = await readFileByPromise('./b.txt')
        const f3 = await readFileByPromise('./c.txt')
        console.log(f1, f2, f3)
    } catch (err) {
        console.log(err)
    }
})()