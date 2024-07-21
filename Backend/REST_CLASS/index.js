const express = require("express");
const app = express();

let port = 8080;

const path = require("path");

app.use(express.urlencoded({extended:true}));

app.set("views engine","ejs");
app.set("views", path.join(__dirname,"views"));

app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        username : "Shubham",
        content : "I love codding",
    },
    {
        username : "Akshada",
        content : "I have conduct a AI workshop in college",
    },
    {
        username : "Om",
        content : "I am Trader",
    },
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
})


app.listen(port,()=>{
    console.log(`Listeaning to port ${port}`);
})