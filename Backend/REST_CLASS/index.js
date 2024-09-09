const express = require("express"); //1
const app = express(); //2

let port = 8080;//3

const {v4:uuidv4} = require("uuid"); //20


const path = require("path"); //5

const methodoverride = require("method-override"); //25
app.use(methodoverride("_method")); //26 

app.use(express.urlencoded({extended:true})); //9

app.set("views engine","ejs"); //6
app.set("views", path.join(__dirname,"views")); //7

app.use(express.static(path.join(__dirname,"public"))); //8

let posts = [  //10   //17 create new id to array
    {
        id : uuidv4(),
        username : "Shubham",
        content : "I love codding",
    },
    {
        id : uuidv4(),
        username : "Akshada",
        content : "I have conduct a AI workshop in college",
    },
    {
        id : uuidv4(),
        username : "Om",
        content : "I am Trader",
    },
];
app.get("/posts",(req,res)=>{ //11    //12 create index.ejs file in views folder  //13 create style.css file in public folder
    res.render("index.ejs",{ posts });
})

app.get("/posts/new",(req,res)=>{ //14   //15 create new.ejs file in views folders
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{  //16  this work after submiting form data then that display on /posts page 
    let {username,content} = req.body;
    let id = uuidv4();          //21
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{   //18 create new path for specific id
    let {id} = req.params;
    let post = posts.find((p)=>id === p.id);
    res.render("show.ejs",{post});              //19 create show.ejs 
});

app.patch("/posts/:id",(req,res)=>{   //22
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{   //23   //24 create edit.ejs file 
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
})
app.listen(port,()=>{ //4
    console.log(`Listeaning to port ${port}`);
});