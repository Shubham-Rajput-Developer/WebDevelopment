//Way 1 for exports 
// module.exports.sum = (a,b)=> a+b;
// module.exports.mul = (a,b)=> a*b;
// module.exports.div = (a,b) => a/b;
// module.exports.PI = 3.14;

//way 2 for exports data from file math.js
// let obj = {
//     sum : sum,
//     mul : mul,
//     div : div,
//     PI : PI,
// }
// module.exports = obj;

//way 3 , we used only exports ensted of module.exports
// exports.sum = (a,b)=> a+b;
// exports.mul = (a,b)=> a*b;
// exports.div = (a,b) => a/b;
// exports.PI = 3.14;
//Thus all are used in case of require used 

//But

//For import we used like
export const PI = 3.14;
export const sum = (a,b)=>a+b;

