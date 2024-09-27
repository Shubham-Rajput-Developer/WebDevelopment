const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressErr = require("./ExpressErr.js");

app.set("views", path.join(__dirname,"views"));
app.set("view engine","ejs"); 
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride("_method"));
main()
.then(()=>{
    console.log("connection successfull");
})
.catch((err)=>{
    console.log(err);
});
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/Fakewhatsapp");
}

app.get("/",(req,res)=>{
    res.send("root is working");
});

//Index route
app.get("/chats", async(req,res,next)=>{
    try{
        let chats = await Chat.find();
        res.render("index.ejs",{chats});
    }
    catch(err){
        next(err);
    }
    
});
//Create new message
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
//add new message
app.post("/chats",async(req,res,next)=>{
    try{
    let {from,to,message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats"); 
    }catch(err){
        next(err);
    }
});

function asyncWrap(fn){
    return function(req,res,next){
        fn(req,res,next).catch((err)=> next(err));
    };
}
//new example routes
app.get("/chats/:id",asyncWrap(async(req,res,next)=>{
        let {id} = req.params;
        let chat = await Chat.findById(id);
        if(!chat){
            next( new ExpressErr(404,"chat not found"));
        }
        res.render("edit.ejs",{chat});
}));

//Edit 
app.get("/chats/:id/edit",async(req,res,next)=>{
   try{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
   }catch(err){
    next(err);
   }
});
//Update
app.put("/chats/:id", async(req,res,next)=>{
    try{
    let {id} = req.params;
    let {message:newMessage} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message:newMessage},{runValidators:true,new:true});
    console.log(updatedChat);
    res.redirect("/chats"); 
    }catch(err){
        next(err);
    }
});
//destroy
app.delete("/chats/:id", async(req,res,next)=>{
    try{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
    }catch(err){
        next(err);
    }
});

const ValidationError = (err)=>{
    console.log("This is validation error... follow ruless");
    return err;
}

//print specific error name and handle it using ValidationError function
app.use((err,req,res,next)=>{
    console.log(err.name);
    if(err.name === "ValidationError"){
        ValidationError(err);   
    }
    next(err);
});

//Default erro handling middlewares
app.use((err,req,res,next)=>{
    let {status=500,message="some error"} = err;
    res.status(status).send(message);
});

app.listen(8080,()=>{
    console.log("Sever is listenning at port 8080");
});