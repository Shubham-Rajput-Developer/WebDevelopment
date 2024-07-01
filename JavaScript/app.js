// let smallImg = document.getElementsByClassName("oldImg");
// for(let i=0;i<smallImg.length;i++){
//     smallImg[i].src = "assets/spiderman_img.png" ;
//     console.dir(smallImg[i].src);
//     console.log(`Value of image no. ${i+1} is changed.`);
// }

// console.log(document.getElementsByTagName("p"));

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("div a"));

// console.dir(document.querySelectorAll(".oldImg"));

// let para = document.querySelector('p');
// console.dir(para);
// console.log(para.innerText);
// console.log(para.textContent);
// console.log(para.innerHTML);
// para.innerText = "Shubham Rajput";
// para.innerHTML = "<b>Shubham Rajput</b>";

// let img = document.querySelector('img');
// console.log(img.getAttribute('id'));
// img.setAttribute('id',"spiderImg");
// console.log(img.getAttribute('id'));

// let img = document.querySelector('img');
// console.log(img.classList);
// img.classList.add("Shubham");
// console.log(img.classList);

// let heading = document.querySelector('h1');
// heading.classList.add("green");

// let H4 = document.querySelector('h4');
// console.log(H4.parentElement);
// console.log(H4.children);
// console.log(H4.nextElementSibling);
// console.log(H4.previousElementSibling);

// let newPara = document.createElement('p');
// newPara.innerText = "Shubham Rajput";
// console.log(newPara);
// let body = document.querySelector('body');
// body.appendChild(newPara);

// let box = document.querySelector('.box');
// console.log(box);
// let newBtn = document.createElement('button');
// newBtn.innerText = "Click me";
// console.log(newBtn);
// box.append(newBtn);

// let body = document.querySelector('body');
// body.remove();


//Practice Question
let para1 = document.createElement('p');
para1.innerText = "I am red";
document.querySelector('body').append(para1);
para1.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText = "I am Blue";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let Div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerText = "I am in div";
para2.innerText = "Me too!";

Div.append(h1);
Div.append(para2);
Div.classList.add('box');
document.querySelector('body').append(Div);

//Question 1
let Input = document.createElement('input');
let Heading = document.createElement('h1');
Heading.innerText = "Enter Details ";
let BTN = document.createElement('button');
BTN.innerText = "Click me!!";
document.querySelector('body').append(Heading);
document.querySelector('body').append(Input);
document.querySelector('body').append(BTN);

//Question 2
Input.placeholder = "username";
BTN.id = "btn";

//Question 3
let BTN1 = document.querySelector('#btn');
BTN1.classList.add("btnStyle");

//Question 4
let H1 = document.createElement('h1');
H1.innerHTML="<u>DOM practice</u>";
document.querySelector('body').append(H1);

//Question 5
let para3 = document.createElement('p');
para3.innerHTML = "Apana college <b>Delta</b> practice";
document.querySelector('body').append(para3);