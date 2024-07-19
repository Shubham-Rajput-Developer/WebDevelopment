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
