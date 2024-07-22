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
        id : "1a",
        username : "Shubham",
        content : "I love codding",
    },
    {
        id : "2b",
        username : "Akshada",
        content : "I have conduct a AI workshop in college",
    },
    {
        id : "3c",
        username : "Om",
        content : "I am Trader",
    },
];
app.get("/posts",(req,res)=>{
    res.render("index.ejs",{ posts });
})

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    posts.push({username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    console.log(post);
    res.send("Done");
});

app.listen(port,()=>{
    console.log(`Listeaning to port ${port}`);
})