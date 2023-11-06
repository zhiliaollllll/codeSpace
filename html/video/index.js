var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')
// console.log(speed);
speed.addEventListener('mousemove', function (e) {
    var y = e.y - speed.offsetTop;
    var percent = y / speed.offsetHeight;//读到一个容器的高度
    var height = Math.round(percent * 100) + '%';
    bar.style.height = height;
    var min = 0.4
    var max = 3
    var playbackRate = percent * (max - min) + min
    bar.textContent = playbackRate.toFixed(2) + 'x'
    // console.log(height);
    //视频播放速度
    video.playbackRate = playbackRate
})