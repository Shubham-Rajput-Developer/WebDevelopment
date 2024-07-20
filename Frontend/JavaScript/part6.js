let student = {
    name : "Shubham",
    age  : 19,
    eng : 91,
    math : 88,
    phy : 92,
    getAvg(){
        let avg = (this.eng+this.math+this.phy)/3;
        console.log(`${this.name} got average ${avg} marks`);
    }
}
//student.getAvg();
// try{
//     console.log(a);
// }
// catch{
//     console.log("Not defined");
// }

//Arrow Function 
const func = (a,b) =>{
    console.log(a+b);
}
// func(2,3);

const cube = (n)=>
    ( n**3);
//cube(3);

const multiply = (a,b) => ( a*b );
//console.log(multiply(2,3));

// console.log("hi shubham");
// setTimeout( () => {
//     console.log("hi shubhangi ");
// },5000);
// console.log("hi samarth");

// setInterval( () =>{
//     console.log("Shubham Rajput");
// },3000 );

//Question 1
const sqr = (n) => {
    console.log(n**2);
}
//sqr(4);

//Question 2
// let id = setInterval( ()=> {
//     console.log("Hellow World");
// },2000);

// setTimeout( ()=>{
//     clearInterval(id);
//     console.log("Clear run ");
// },10000);

//Question 3
let arrayAverage = (arr) => {
    let sum = 0;
    for(let i=0; i<arr.length;i++){
        sum += arr[i];
    }
    console.log(sum);
};
let arr = [2,3,3,4,5,6,7,8];
//arrayAverage(arr);

//Question 4
let isEven = (n) =>{
    if(n%2==0){
        console.log("Even");
    }
    else{
        console.log("Not Even");
    }
}
//isEven(49);



