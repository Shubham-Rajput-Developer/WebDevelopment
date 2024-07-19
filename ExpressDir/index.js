const express = require("express");
const app = express();

let port = 8080;  //8080

app.listen(port, ()=>{
    console.log(`App is listenning on port ${port}`);
});

// app.use((req,res)=>{
//     res.send("<h1>Shubham</h1>");
//     console.log("request received");
// });

app.get("/",(req,res)=>{
    res.send("you got res");
});

app.get("/apple",(req,res)=>{
    res.send("you on apple path");
});

app.get("/orange",(req,res)=>{
    res.send("you on orange path");
});

app.get("*",(req,res)=>{
    res.send(" does not exist");
});

app.post("/",(req,res)=>{
    res.send("It is Post root Path");
});
