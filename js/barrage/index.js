// 历史弹幕
let data = [
    { value: '今天你听妈妈的话了嘛？', color: 'pink', fontSize: 22, time: 5 },
    { value: '沙发', color: 'purple', fontSize: 19, time: 8 },
    { value: '前排', color: 'green', fontSize: 25, time: 10 }
]
// 整理弹幕数据
canvasBarrage.prototype.render = function () {
    // 清除画布
    this.clear()
    this.renderBarrage() //弹幕被绘制在画布上

    if (!this.ispaused) { //播放状态
        requestAnimationFrame(this.render.bind(this))
    }
}
function canvasBarrage(canvas, video, opts = {}) {
    if (!canvas || !video) return
    this.video = video
    this.canvas = canvas
    // 设置canvas的宽高和video一致
    this.canvas.width = video.width
    this.canvas.height = video.height
    // 获取画布
    this.ctx = canvas.getContext('2d')
    //初始化弹幕
    let defOpts = {
        color: '#e91e62',
        fontSize: 20,
        speed: 1.5,
        opacity: 0.5,
        data: []
    }
    Object.assign(this, defOpts, opts)
    //视频播放，弹幕才出现
    this.ispaused = true
    //获取到所有弹幕
    this.barrages = data
    //移动弹幕
    this.render()


}
let canvas = document.getElementById('canvas')
new canvasBarrage(canvas, video, { value: '前排', color: 'green', fontSize: 25, time: 10 })

