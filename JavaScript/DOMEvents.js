// let btns = document.querySelectorAll("button");
// console.dir(btns);

// btn.onclick = function(){
//     alert("Shubham  Bhai");
// }
// for(btn of btns){
//     // btn.onclick = sayHello;
//     // btn.onmouseenter = function(){
//     // console.log("Entered");
//     // }
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);
// }
// function sayHello(){
//     alert("Hello bhai");
// }
// function sayName(){
//     alert("Shubham Rajput");
// }

// let para = document.querySelector('p');
// para.addEventListener("mouseenter",function(){
//     para.style.color="red";
// })



// let btn = document.querySelector('button');
// let h1 = document.querySelector('h1');
// let h3 = document.querySelector('h3');
// let p = document.querySelector('p');

// function changeColor(){
//     console.log(this.innerText);
//     this.style.backgroundColor="blue";
// }
// btn.addEventListener("click",changeColor);

// h1.addEventListener("click",changeColor);

// h3.addEventListener("click",changeColor);

// p.addEventListener("click",changeColor);

// let btn = document.querySelector('button');

// btn.addEventListener("dblclick",function(event){
//     console.log(event);
// })

// let input = document.querySelector('input');

// input.addEventListener("keypress",function(event){
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key pressed");
// });

// let form = document.querySelector('form');
// let userName = document.querySelector('#user');
// let userPasswrod = document.querySelector('#password');

// form.addEventListener("submit",function(event){
//     // event.preventDefault(); //That stop redirecting page
//     //alert("Shubham Bhai");
//     // console.log(userName.value);
//     // console.log(userPasswrod.value);
//     // let user = this.elements[0];
//     // let pass = this.elements[1];
//     alert(`Hii ${userName.value}, your passsword is set to ${userPasswrod.value}`);

// });



// let userName = document.querySelector('#user');

// userName.addEventListener("input",function(){
//     console.log("Changed occured");
//     console.log(userName.value);
// });


// let inputText = document.querySelector("input");
// let Display = document.querySelector('h1');
// inputText.addEventListener("input",function(){
//     Display.innerText = inputText.value;
// });

//Question 1
// let Display = document.querySelector('h1');
// Display.addEventListener("mouseout",function(){
//     Display.style.backgroundColor="gray";
// });
// let inputText = document.querySelector('input');
// let ScrollCount = 0;

// inputText.addEventListener("load",function(){
//     console.log(ScrollCount);
//     ScrollCount++;
// });
// let btn = document.querySelector('button');
// btn.addEventListener("load",function(){
//     console.log("Its load occurs");
// });

// let btn = document.createElement('button');
// let body = document.querySelector('body');
// body.append(btn);
// btn.innerText = "Dabaye";
// btn.addEventListener("click",function(){
//     btn.style.backgroundColor = "green";
// });

//That is event bubbling
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let lis = document.querySelectorAll('li');

div.addEventListener("click",function(){
    console.log("Div was clicked");
});

ul.addEventListener("click",function(){
    console.log("Ul was clicked");
});

for (li of lis){
    li.addEventListener("click",function(){
        console.log("list item was clicked");
    });
}