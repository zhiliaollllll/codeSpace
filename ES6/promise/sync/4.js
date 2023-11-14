function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('吃早饭');
            resolve('吃完早饭啦!')
        }, 2000)
    })
}
function lunch() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('吃中饭');
            resolve('吃完中饭啦!')
        }, 1000)
    })
}
function dinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('吃晚饭');
            resolve('吃完晚饭啦!')
        }, 500)
    })
}

breakfast()
    .then((res) => {
        console.log(res);
        return lunch()
    })
    .then(res2 => {
        console.log(res2);
        return dinner()
    })
