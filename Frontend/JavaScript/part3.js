// for(let i=1 ; i<=10;i++){
//     console.log(i);
// }

//ODD Number from 1 to 15
// for(let i=1;i<=15;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

//Even Number from 1 to 15
// for(let i=1;i<=15;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

//infinite loop
// for(let i=1;i<0;i++){
//    console.log(i);
// }


// Table of 5
// let n = prompt("Enter Number : ");
// n = parseInt(n);
// for(let i=n;i<=n*10;i=i+n){
//         console.log(i);
// }

//Nested loops 
// for(let i=1;i<=3;i++){
//     console.log(`outer loop ${i}`);
//     for(let j=1;j<=3;j++){
//         console.log(j);
//     }
// }

// //while loop
// let i=5;
// while(i>0){
//     console.log(i);
//     i--;
// }
// let j=1;
// while(j<=5){
//     console.log(j);
//     j++;
// }

// //favorite movie
// const fav = "Major";
// let guess = prompt("Guess :");
// while((fav != guess)&&(guess!="quit")){
//     guess  = prompt("Wrong!!! plz try again : ");
// }
// if(guess == fav){
//     console.log("Congrats !!");
// }
// else{
//     console.log("You quit");
// }

// let fruits = ["apple","banana","mango","orange","lemon"];
// console.log("Array : ");
// for(let i=0;i<fruits.length;i++){
//     console.log(i, fruits[i]);
// }

// console.log("Array in reverse : ");
// for(let i=fruits.length-1;i>=0;i--){
//     console.log(i,fruits[i]);
// }

//nested loops for multidimensional array 
// let MD = [["Thor","IronMan","Hulk"],["SRK","Govinda","Akshay"],["JNTR","Thalapati","Poshpha"]];
// for(let i=0;i<MD.length;i++){
//     console.log(`List ${i+1} is : `);
//     for(let j=0;j<MD[i].length;j++){
//         console.log(MD[i][j]);
//     }
// }
 
// let student = [["Shubham",75],["Akshada",81],["Pranav",76],["Sahil",78]];
// for(let i=0;i<student.length;i++){
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
// }

//For of loop
// let fruits=["banana","orange","mango","apple","pineapple"];
// for(i of fruits){
//     console.log(i);
// }