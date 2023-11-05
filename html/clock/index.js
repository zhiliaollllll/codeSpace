const secondHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')
// console.log(secondHand);
function setTime() {
    const now = new Date()
    // 获取当前秒数
    const seconds = now.getSeconds()  //30
    const secondsDegrees = seconds * 6 + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const mins = now.getMinutes()
    const minsDegrees = mins * 6 + 90
    minHand.style.transform = `rotate(${minsDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = hours * 30 + 90 + (mins / 60) * 30
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setTime()
setInterval(setTime, 1)