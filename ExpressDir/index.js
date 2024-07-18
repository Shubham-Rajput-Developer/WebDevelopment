const express = require("express");
const app = express();

let port = 8080;  //8080

app.listen(port, ()=>{
    console.log(`App is listenning on port ${port}`);
});

app.use((req,res)=>{
    console.log(req);
    console.log("request received");
});