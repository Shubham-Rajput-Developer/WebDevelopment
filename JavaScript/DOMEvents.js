let btns = document.querySelectorAll("button");
console.dir(btns);

// btn.onclick = function(){
//     alert("Shubham  Bhai");
// }
for(btn of btns){
    // btn.onclick = sayHello;
    // btn.onmouseenter = function(){
    // console.log("Entered");
    // }
    btn.addEventListener("click",sayHello);
    btn.addEventListener("click",sayName);
}
function sayHello(){
    alert("Hello bhai");
}
function sayName(){
    alert("Shubham Rajput");
}