// let msg = "         Shubham Bhai        ";
// console.log(msg.trim());
// console.log(msg);

// let str = "Shubham";
// console.log("String in LowerCase : ",str.toLowerCase());
// console.log("String in UpperCase : ",str.toUpperCase());

// console.log(msg.trim().toUpperCase());
// console.log(str.slice(2));
// console.log(str.slice(-4));

// let msg = "I Love Coding";
// let str = "Shubham"
// console.log(msg.replace("Love","do"));
// console.log(str.repeat(3));

//Question 1
// let msg = "help!";
// console.log(msg.trim().toUpperCase());

// //Question 2
// let fname = "apanacollege";
// console.log(fname.slice(4,9));
// console.log(fname.indexOf("na"));
// console.log(fname.replace("apana","our"));


// //Array creation
// let student = ["Shubham","samarth","Abhishek"];
// console.log(student);

// let data = ["Shubham",75,8.50];
// console.log(data);

// //Array are Mutable
// data[2] = 9.50;
// console.log(data);

// let cars = ["Auddi","BMW","Farrari"];
// console.log(cars);
// cars.push("Toyata");
// console.log(cars);
// console.log(cars.pop()); //Delete last element and also return 
// console.log(cars);
// cars.unshift("Nexon");
// console.log(cars);
// console.log(cars.shift());
// console.log(cars);

// //Question 1
// let month = ["january","july","march","august"];
// console.log(month);
// console.log(month.shift());
// console.log(month.shift());
// month.unshift("june");
// month.unshift("july");
// console.log(month);

// indexof method
// let color = ["red","yellow","orange","pink"];
// console.log(color.indexOf("blue"));
// console.log(color.indexOf("orange"));

//concat,revrse,slice method
// let m1 = [1,2,3,4];
// let m2 = [5,6,7,8];
// let newArr = m1.concat(m2);
// console.log(newArr);
// console.log(newArr.reverse());
// console.log(newArr.slice(3,6));
// console.log(newArr.slice(3));

//spice method
// let color = ["red","green","yellow","orange","blue","voilet"];
// console.log(color);
// console.log(color.splice(5));
// console.log(color);
// console.log(color.splice(0,2,"mango","apple"));
// console.log(color);
// console.log(color.sort());

//Question 1
// let month = ["january","july","march","august"];
// month.splice(0,2,"july","june");
// console.log(month);

//Question 2
// let lang = ["C","C++","html","javaScript","Python","java","C#","sql"];
// console.log(lang);
// console.log("Indexof of javaScript is: ",lang.reverse().indexOf("javaScript"));

// //Question 3
// let num = [1,2,3,4,5,6,7,8];
// let n = 4;
// console.log(num.slice(0,n));
// console.log(num.slice(-n));

// //Question 4
// let str = "Shubham";
// if(str == 0){
//     console.log("Empty String ");
// }
// else{
//     console.log("Not Empty String");
// }

// //Question 5
// let str = "Shubham Rajput";
// let idx = 0;
// if(str[idx]==str[idx].toLowerCase()){
//     console.log("Its lower case");
// }
// else{
//     console.log("Its upper case");
// }

// //Question 6
// let arr = [12,34,43,55,45,22,90];
// let num = 3;
// if(arr.includes(num)){
//     console.log("Array exist element ",num);
// }
// else{
//     console.log("Array does not exist element ",num);
// }

// //Array reference
// let arr1 = [1,2,3,4];
// let arr2 = [];
// console.log(arr1);
// console.log(arr2);
// arr2 = arr1;
// console.log(arr1);
// console.log(arr2);

// //Nested array 
// let nums = [[1,2],[3,4],[5,6],[7,8]];
// console.log(nums);
// console.log(nums[2][0]);

//Tic tac 
let table = [['X',null,'O'],[null,'X',null],['O',null,'X']];
console.log(table);
table[0][1]='O';
console.log(table);