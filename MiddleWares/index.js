const express = require("express");
const app = express();

app.use((req,res,next)=>{
    console.log("Hi, I am 1st middlewares");
    next();
});

app.use((req,res,next)=>{
    console.log("Hi, I am 2nd middlewares");
    next();
});
 
app.get("/",(req,res)=>{
    res.send("I am Root");
});

app.get("/random",(req,res)=>{
    res.send("I am random page");
});

app.listen(8080,()=>{
    console.log("Server listenning on port 8080");
});