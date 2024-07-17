//Module export and equire() function

// const sum = (a,b)=> a+b;
// const mul = (a,b)=> a*b;
// const PI = 3.14;
// const g = 9.4;

//Way 1
// module.exports = "Hello";

//Way 2
// module.exports = {
//     sum:sum,
//     mul:mul,
//     PI:PI,
//     g:g
// }

//Way 3
// module.exports.sum = (a,b)=> a+b;
// module.exports.mul = (a,b)=> a*b;
// module.exports.PI = 3.14;
// module.exports.g = 9.4;

//Way 4
exports.sum = (a,b)=> a+b;
exports.mul = (a,b)=> a*b;
exports.PI = 3.14;
exports.g = 9.4;

