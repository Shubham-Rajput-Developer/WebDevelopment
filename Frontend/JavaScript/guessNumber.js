const max = prompt("Enter Max Number : ");
const random = Math.floor(Math.random()*max)+1;
console.log(random);

let guess = prompt("Guess Number : ");

while(true){
    if(guess == "quit"){
        console.log("Uesr Quit");
        break;
    }

    if(guess==random){
        console.log("your are right!!");
        break;
    }
    else if(guess<random){
        guess = prompt("hint : you are guess to small , plzn try again : ");
    }
    else{
        guess = prompt("hint : You are guess to large , Please tyr again !!");
    }
}