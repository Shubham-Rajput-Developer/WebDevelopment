const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");

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
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

app.get("/",(req,res)=>{
    res.send("root is working");
});

//Index route
app.get("/chats", async(req,res)=>{
    let chats = await Chat.find();
    res.render("index.ejs",{chats});
});
//Create new message
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});
//add new message
app.post("/chats",(req,res)=>{
    let {from,to,message} = req.body;
    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    newChat.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    });
    res.redirect("/chats");
});
//Edit 
app.get("/chats/:id/edit",async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs",{chat});
});
//Update
app.put("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let {message:newMessage} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, {message:newMessage},{runValidators:true,new:true});
    console.log(updatedChat);
    res.redirect("/chats"); 
});
//destroy
app.delete("/chats/:id", async(req,res)=>{
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
});

app.listen(8080,()=>{
    console.log("Sever is listenning at port 8080");
});