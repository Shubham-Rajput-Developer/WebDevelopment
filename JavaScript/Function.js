function Hello(){
    console.log("Hello javaScript");
}

function printName(){
    console.log("Shubham Rajput");
}

function print1TO5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}

function printPoem(){
    console.log("Twinkel Twinkel, littel star ");
    console.log("how I wonder what you are ");
}

function rollDice(){
    console.log(Math.floor(Math.random()*6)+1);
}

function personInfo(name,age){
    console.log(`${name}s age is ${age}`);
}

function printTable(num){
    for(let i=1;i<=10;i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

function printSum(num1,num2){
    let result = num1+num2;
    return result;
}

function printSum1TO10(){
    let sum = 0;
    for(let i=1;i<=10;i++){
        sum += i;
    }
    return sum;
}

function printConcateString(arr){
    let newString = "";
    for(let i=0;i<arr.length;i++){
        newString += " "+arr[i];
    }
    return newString;
}

function outerFunction(){
    let x = 10;
    let y = 20;
    function innerFunction(){
        let z = 30;
        console.log(x);
        console.log(y);
    } 
    innerFunction();
}

// let sum = function(a,b){
//     return a+b;
// };
// console.log(sum(7,2));

function multipleGreet(myfun,n){
    for(let i=0;i<n;i++){
        myfun();
    }
}
let greet = function(){
    console.log("Shubham");
}

const calculator = {
    add: function(a,b){
        return a+b;
    },
    sub: function(a,b){
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    },
    div: function(a,b){
        return a/b;
    }
}

// console.log(calculator.add(5,6));
// console.log(calculator.mul(3,4));

//Question 1
function check(arr,num){
    for(i=0;i<arr.length;i++){
        if(arr[i]>num){
            console.log(arr[i]);
        }
    }
}
// let arr = [2,3,4,6,1,9,5,0];
// let num = 6;
// check(arr,num);

//Question 2
function extract(){
    let str = "shubham rajput";
    let ans = "";
    for(let i=0;i<str.length;i++){
        let currChar = str[i];
        if(ans.indexOf(currChar)==-1){
            ans+=currChar;
        }
    }
    console.log(ans);
}
// extract();

//Question 3
let arr = ["india","china","United state of America","japan","tokiyo"];
function Check(arr){
    let IDX = 0;
    for(let i=0;i<arr.length;i++){
        let currLen = arr[i].length;
        let ansLen = arr[IDX].length;
        if(currLen>ansLen){
            IDX = i;
        }
    }
    return arr[IDX];
}
//console.log(Check(arr));

//Question 4
let str = "Shubham Rajput ";
function CheckVowel(str){
    let count = 0;
    for(let i=0;i<str.length;i++){

        if(str.charAt(i) =='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'){
            count++;
        }
    }
    return count;
}
//console.log(CheckVowel(str));

//Question 5
let start = 70;
let end = 100;
function generateRandom(start,end){
    let diff = end-start;
    return Math.floor(Math.random()*diff)+start;
}
//console.log(generateRandom(start,end));


// let odd = function(n){
//     console.log(n%2!=0);
// }
// let even = function(n){
//     console.log(n%2==0);
// }
// function oddEvenFactory(request){
//     if(request=="odd"){
//         return odd;
//     }
//     else{
//         return even;
//     }
// }
// oddEvenFactory("odd");



// multipleGreet(greet,4);
// Hello();
// printName();
// print1TO5();
// printPoem();
// printPoem();
// rollDice();
// rollDice();
// rollDice();
// personInfo("Shubham",19);
// printTable(5);
// printTable(77);
// console.log(printSum(2,9));
// console.log(printSum(printSum(4,5),6));
//console.log(printSum1TO10());
// let arr = ["lft.","Shubham","Bhagatsing","Rajput"];
// console.log(printConcateString(arr));
// outerFunction();
