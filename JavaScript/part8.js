//BreakPoints

// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function three(){
//     let ans = two()+one();
//     console.log(ans);
// }

// three();

//Js is Single threaded
// setTimeout(() => {
//     console.log("Shubham");
// }, 2000);
// console.log("Rajput"); 

//Callback hell

// h1 = document.querySelector('h1');

// setTimeout(()=>{
//     h1.style.color = "red";
// },1000);
// setTimeout(()=>{
//     h1.style.color = "yellow";
// },2000);
// setTimeout(()=>{
//     h1.style.color = "green";
// },3000);

// h1 = document.querySelector('h1');

// function changeColor(color,delay,nextChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextChange) nextChange();
//     },delay);
// }

// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("orange",1000);
//     });
// });

// function saveDB(data,success,failure){
//     let internateSpeed = Math.floor(Math.random()*10)+1;
//     if(internateSpeed>4){
//         success();
//     }
//     else{
//         failure();   
//     }
    
// }
// saveDB("Shubham",()=>{
//     console.log("Your data was save");
//     saveDB("Rajput",()=>{
//         console.log("Success 2 saved");
//         saveDB("Bhai",()=>{
//             console.log("Success 3 saved");
//         }, ()=>{
//             console.log("Failed");
//         });
//     }, ()=>{
//         console.log("Failed");
//     });
// },
// ()=>{
//     console.log("Week Connection!!! Data was not save");
// })


// //Promises
// function saveDB(data){
//     return new Promise((resolved,reject) =>{
//         let internateSpeed = Math.floor(Math.random()*10)+1;
//         if(internateSpeed>4){
//             resolved("Saved");
//         }else{
//             reject("failed");
//         }
//     });
// }

// let request = saveDB("Shubham");
// // console.log(request);
// request.then((result)=>{
//     console.log("Save 1 : promise was resolved",result);
//     return saveDB("rashi");
// })
// .then((result)=>{
//     console.log("Saved 2",result);
//     return saveDB("gopi");
// })
// .then((result)=>{
//     console.log("Saved 3",result);
// })
// .catch((error)=>{
//     console.log("promise was reject",error);
// })

// h1 = document.querySelector('h1');

// function changeColor(color,delay){
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             resolved("Change done");
//         },delay);
//     });
// }

// changeColor("red",1000,()=>{
//     changeColor("yellow",1000,()=>{
//         changeColor("orange",1000);
//     });
// });

// changeColor("red",1000)
// .then(()=>{
//     console.log("red completes");
//     return changeColor("orange",1000);
// })
// .then(()=>{
//     console.log("orange completes");
//     return changeColor("purple",1000);
// })
// .then(()=>{
//     console.log("Green completes");
// })
// .catch(()=>{
//     console.log("failed");
// })

// //async function
// async function greet(){
//     //throw "Random error occur";
//     return "hello";
// }

// greet()
// .then((result)=>{
//     console.log("promised was resolved...");
//     console.log(result);
// })
// .catch((err)=>{
//     console.log("promised was rejected...",err);
// })

// let demo = async ()=>{
//     return "demo";
// }


//Await keyword
// function getNum(){
//     return new Promise((resolved,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*10)+1;
//             console.log(num);
//             resolved();
//         },1000);
//     });
// }

// async function getDemo(){
//     await getNum();
//     await getNum();
// }

h1 = document.querySelector('h1');

function changeColor(color,delay){
    return new Promise((resolved,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
            if(num<4){
                reject("Reject");
            }
            h1.style.color = color;
            console.log("Color changed to : ",color);
            resolved("Change done");
        },delay);
    });
}

async function demo(){
    try{
    await changeColor("red",1000);
    await changeColor("green",1000);
    await changeColor("yellow",1000);
    await changeColor("purple",1000);
    }
    catch(err){
        console.log("Error occured : ",err);
    }
    let n = 4;
    console.log(n);
    console.log("Nem Number : ",n+1);
}