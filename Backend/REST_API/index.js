const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const {v4:uuidv4}=require('uuid');
const methodOverride = require("method-override");

app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));

app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));

let posts = [
    {
        id : uuidv4(),
        username: "Shubham",
        content : "If programming is developed by humans, then why don't they make it easier? Here, the programmer has probably written out his program by hand, so that he can refer to the code while typing. He has to do this because what he types isn’t going onto a screen that he can review and edit, it’s going onto a series of punched cards. Once he has finished, he has to take his cards and hand them to one of the engineers who maintain the precious mainframe. At some point in the next day or so, his cards may be fed to the mainframe and his program run. If he’s lucky, the program worked and he gets a print-out of the result. Otherwise, he gets some cryptic information about how his program failed and has to try to work out in his head what he did wrong, before starting the whole process over again."
    },
    {
        id : uuidv4(),
        username: "Om",
        content : "What are the differences between parallel, concurrent, and asynchronous programming?   ṅ>Parallel programs distribute their tasks to multiple processors, that actively work on all of them simultaneously.  >Concurrent programs handle tasks that are all in progress at the same time, but it is only necessary to work briefly and separately on each task, so the work can be interleaved in whatever order the tasks require. >An asynchronous program dispatches tasks to devices that can take care of themselves, leaving the program free do something else until it receives a signal that the results are finished."
    },
    {
        id : uuidv4(),
        username: "Abhishek",
        content : "I got Internship at microsoft."
    },

];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});

app.get("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log(`listenning to port ${port}`);
});