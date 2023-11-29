// var rotateString = function (s, goal) {
//     return s.length = goal.length && (s + s).indexOf(goal) !== -1
// };
var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false
    return (s + s).includes(goal)
};