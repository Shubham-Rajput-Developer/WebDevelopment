const express = require("express");
const app = express();
const ExpressErr = require("./ExpressErr");
// app.use((req,res,next)=>{
//     console.log("Hi, I am 1st middlewares");
//     next();
// });

// app.use((req,res,next)=>{
//     console.log("Hi, I am 2nd middlewares");
//     next();
// });

//logger - morgan
// app.use((req,res,next)=>{
//     req.time = Date(Date.now()).toString();
//     console.log(req.method,req.host,req.path,req.time);
//     next();
// });

// app.use((req,res)=>{
//     res.send("page not found");
// });

app.use("/api",(req,res,next)=>{
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    throw new ExpressErr(402,("ACCESS DENIED"));
});

app.get("/api",(req,res)=>{
        res.send("dataa");
});

app.get("/",(req,res)=>{
    res.send("I am Root"); 
});

app.get("/random",(req,res)=>{
    res.send("I am random page");
});

app.get("/err",(req,res)=>{
    abcd = abcd;
});

app.use((err,req,res,next)=>{
    let {status=400, message="Error "} = err;
    res.status(status).send(message);
});

app.get("/admin",(req,res)=>{
    throw new ExpressErr(403,"Access Forbiden");
});

app.listen(8080,()=>{
    console.log("Server listenning on port 8080");
});