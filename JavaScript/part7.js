//***********ForEach method************
let arr = [1,2,3,4,5];
// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print);

// arr.forEach(function(el){
//     console.log(el);
// }); 
// arr.forEach( (ele) => (console.log(ele)));

//*************map method**********
let double = arr.map(function(el){
    return el*el;
});
//console.log(double);

let student = [
    {
        name : "shubham",
        marks : 84
    },
    {
        name : "shubhangi",
        marks : 92
    },
    {
        name : "akshada",
        marks : 90,
    }
];
let gpa = student.map(function(el){
    return el.marks/10;
})
//console.log(gpa);

//filter function
let num = [1,2,3,4,5,6,7,8,9];
let ans = num.filter(function(el){
    return el%2 == 0;
});
//console.log(ans);

//Every function
let result = arr.every((el)=>(el%2==0));
//console.log(result);

//reduce function
let data = [1,2,3,4,5,6];
let final = data.reduce( (accu,ele)=>(accu+ele));
//console.log(final);

//Maximum element in array 
let data1 = [2,3,453,2,1935,55];
let maxElement = data1.reduce( (max,ele)=>{
    if(max<ele){
        return ele;
    }
    else{
        return max;
    }
});
//console.log(maxElement);

//check all element in array that multiple by 10 or not
let data2 = [10,20,30,40,50,60,70,80,90];
if(data2.every((ele)=>(ele%10==0))){
    console.log("Divisible by 10");
}
else{
    console.log("Not Divisible by 10");

}

//Find minimum element in array 
let data3 = [1,23,4,10,54,2];
let minElement = data3.reduce( (min,ele)=>{
    if(min>ele){
        return ele;
    }
    else
    {
        return min;
    }
});
//console.log(minElement);

//Diffault parameter 
function sum(a,b=9){
    return a+b;
}
//console.log(sum(7));

//console.log(..."Shubham");

function sum(...args){
    return args.reduce( (sum,ele)=>(sum+ele));
}
//console.log(sum(3,4,2,14,5));
//console.log(sum(3,2));

function min(...args){
    return args.reduce( (min,ele)=>{
        if(min>ele){
            return ele;
        }
        else
        {
            return min;
        }
    });
}
//console.log(min(3,0,2,14,5));

let names = ["shubham","akshada","shubhangi","priya"];
let [winner,runnerup,...others]=names;    
//console.log(winner,runnerup);
//console.log(others);


//Question 1
let Array1 = [1,2,4,7,4,3,3,2];
let sqaure = Array1.map( (ele)=>(ele*ele));
console.log(sqaure);
let Array1Sum = sqaure.reduce( (sum,ele)=>(sum+ele));
console.log(Array1Sum);
let avg = Array1Sum/Array1.length;
console.log(avg);


//Question 2
let Array2 = [2,3,4,6,3];
let newArray2 = Array2.map( (ele)=> (ele+5));
console.log(newArray2);

//Question 3
let Array3 = ['a','b','c','d','e'];
let newArray3 = Array3.map( (ele)=>(ele.toUpperCase()));
console.log(newArray3);

//Question 4
const doubleAndReturnArgs = (arr, ...args) => [console.log(...arr),console.log(...args.map( (v)=> v*2))];
doubleAndReturnArgs([1,3,3],2,7);

//Question 5
const mergeObjects = (obj1,obj2) => (console.log({...obj1,...obj2}));
mergeObjects({a:1,b:2},{c:3,d:4});