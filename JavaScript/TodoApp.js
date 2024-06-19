let list = [];
let req = prompt("Enter your Request : ");
while(true){
    if(req=="quit"){
        console.log("quitting app ");
        break;
    }

    if(req=="add"){
        let task = prompt("Enter task do you want to add : ");
        list.push(task);
        console.log("Task added");
    }
    else if(req=="list"){
        console.log("----------------------");
        for(let i=0;i<list.length;i++){
            console.log(i, list[i]);
        }
        console.log("----------------------");
    }
    else if(req=="delete"){
        let idx = prompt("Enter task index do you want to delete : ");
        list.splice(idx,1);
        console.log("Task deleted");
    }
    else{
        console.log("Wrong request");
    }
    req = prompt("Enter your Request : ");
}