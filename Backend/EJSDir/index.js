const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.use(express.static("public"));
app.use(express.static(path.join(__dirname,"public/CSS")));
app.use(express.static(path.join(__dirname,"public/JS")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"));

app.get("/",(req,res)=>{
 res.render("home");
});

app.get("/sample",(req,res)=>{
    res.send("Hello Shubham");
});
   
app.get("/rollDice",(req,res)=>{
    let rollValue = Math.floor(Math.random()*6)+1;
    res.render("rollDice",{rollValue});
});

// app.get("/instagram/:username",(req,res)=>{
//     const followers = ["abc","xyz","pyq","srt","wxr"];
//     let {username} = req.params;
//     res.render("instagram.ejs",{username,followers});
// });

app.get("/instagram/:username",(req,res)=>{
    let {username} = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs",{data});
    }
    else{
        res.render("error.ejs");
    }
});

app.listen(port,()=>{
    console.log(`listenning on port ${port}`);
});
