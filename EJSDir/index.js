const express = require("express");
const app = express();

let port = 8080;

app.listen(port,()=>{
    console.log(`listenning on port ${port}`);
});

app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("home");
})

app.get("/rollDice",(req,res)=>{
    let dicevalue = Math.floor(Math.random()*6)+1 ;
    res.render("rollDice.ejs",{num : dicevalue});
});

app.get("/ig/:username",(req,res)=>{
    const user = ["shubs","abhi","chetya","omya"];
    let {username}=req.params;
    res.render("instagram.ejs",{username,user});
});

