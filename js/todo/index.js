//监听用户敲击enter键
var input = document.getElementById('list-input')
var ul = document.getElementById('list')
input.onkeyup = function (e) {
    if (e.keyCode === 13) {
        //读取input里的值
        //生成li结构
        //将input中的值添加到li
        var todoList = `
            <li>
                <input type="checkbox">
                <span>${input.value} </span>
            </li>`
        //将li中的值添加到ul
        ul.insertAdjacentHTML('afterbegin', todoList)
        input.value = ''
    }
}
// function makeList() {
//     //循环数组todoItem，生成多份li结构，添加到
//     for/todoList.length
//     todiList[i]

// }




