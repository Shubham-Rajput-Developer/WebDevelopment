const express = require("express");
const app = express();

let port = 8080;

app.use(express.static("public/CSS"));
app.use(express.static("public/JS"));
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
    let {username} = req.params;
    const instaData = require("./data.json");
    let data = instaData[username];
    if(data){
    res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});

