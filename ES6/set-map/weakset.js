let obj = { name: '德玛西亚' }

let ws = new WeakSet()
ws.add(obj)//垃圾回收机制不管这个。所以上面的环境还是会被回收

// obj = null//标记，告诉垃圾回收可以干掉他，相当于把垃圾回收机制喊过来清除掉他
// console.log(obj.name);
console.log(ws);//这里是假设垃圾回收还没来，所以页面上展开还是有值