const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req,res)=>{
//     console.log("Request Received");
//     let code = "<h1>Cars</h1><li>BMW</li><li>Audii</li>";
//     res.send(code);
// });

app.get("/",(req,res)=>{
    console.log("Request recived")
    res.send("you search something");
});

app.get("/apple",(req,res)=>{
    console.log("Request recived");
    res.send("you search about apple");
});

// app.get("*",(req,res)=>{
//     console.log("Request recived");
//     res.send("you seach something thats route not exists");
// });

app.get("/:username/:id",(req,res)=>{
    console.log("request recived");
    console.log(req.params);
    let {username ,id } = req.params; 
    res.send(`Welcome @${username} , your id is : ${id}`);
});

app.get("/search",(req,res)=>{
    let {q} = req.query;
    if(!q){
        res.send("nothing search");
    }
    res.send(`search query is : ${q}`);
});