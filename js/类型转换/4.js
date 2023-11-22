//等于运算符
// If Type(x) is the same as Type(y), then

// If Type(x) is Undefined, return true.

// If Type(x) is Null, return true.

// If Type(x) is Number, then

// If x is NaN, return false.

// If y is NaN, return false.

// If x is the same Number value as y, return true.

// If x is + 0 and y is −0, return true.

// If x is −0 and y is + 0, return true.

// Return false.

// If Type(x) is String, then return true if x and y are exactly the same sequence of characters(same length and same characters in corresponding positions).Otherwise, return false.

// If Type(x) is Boolean, return true if x and y are both true or both false.Otherwise, return false.

// Return true if x and y refer to the same object.Otherwise, return false.

// If x is null and y is undefined, return true.

// If x is undefined and y is null, return true.

// If Type(x) is Number and Type(y) is String,
// return the result of the comparison x == ToNumber(y).

// If Type(x) is String and Type(y) is Number,
// return the result of the comparison ToNumber(x) == y.

// If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.

// If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).

// If Type(x) is either String or Number and Type(y) is Object,
// return the result of the comparison x == ToPrimitive(y).

// If Type(x) is Object and Type(y) is either String or Number,
// return the result of the comparison ToPrimitive(x) == y.

// Return false.

