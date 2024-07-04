// let list = [];
// let req = prompt("Enter your Request : ");
// while(true){
//     if(req=="quit"){
//         console.log("quitting app ");
//         break;
//     }

//     if(req=="add"){
//         let task = prompt("Enter task do you want to add : ");
//         list.push(task);
//         console.log("Task added");
//     }
//     else if(req=="list"){
//         console.log("----------------------");
//         for(let i=0;i<list.length;i++){
//             console.log(i, list[i]);
//         }
//         console.log("----------------------");
//     }
//     else if(req=="delete"){
//         let idx = prompt("Enter task index do you want to delete : ");
//         list.splice(idx,1);
//         console.log("Task deleted");
//     }
//     else{
//         console.log("Wrong request");
//     }
//     req = prompt("Enter your Request : ");
// }


let btn = document.querySelector("button");
let task = document.querySelector("input");
let list = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = task.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);    
    list.appendChild(item);
    task.value = "";
})

list.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
});

//here event delegation used means add eventlistener add on parent child
// let delbtns = document.querySelectorAll(".delete");
// for(del of delbtns){
//     del.addEventListener("click",function(){
//         let par = del.parentElement;
//         par.remove();
//     });
// }