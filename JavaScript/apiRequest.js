let url = "https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     return res.json();
// })
// .then((data)=>{
//     console.log(data.fact);
//     fetch(url)
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data2)=>{
//         console.log(data2.fact);
//     })
// })
// .catch((err)=>{
//     console.log(err);
// })

// console.log("Shubham Rajput");

// async function getFacts(){
//     try{
//     let res = await fetch(url);
//     let data =  await res.json();
//     console.log(data.fact);

//     let res2 = await fetch(url);
//     let data2 =  await res2.json();
//     console.log(data2.fact);
//     }
//     catch(e){
//         console.log(e);
//     }
// }

let btn = document.querySelector("#factBtn");
btn.addEventListener("click",async ()=>{
        let result = await getFacts();
        let para = document.querySelector("#fact");
        para.innerText = result;
})
async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(e){
        return "No fact found";
    }
}

let url2 = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector("#imageBtn");
btn2.addEventListener("click", async ()=>{
    let result = await getImage();
    let setImg = document.querySelector("#image");
    setImg.setAttribute("src",result);
})
async function getImage(){
    try{
        let res = await axios.get(url2);
        return res.data.message;
    }
    catch(e){
        return "/";
    }
}