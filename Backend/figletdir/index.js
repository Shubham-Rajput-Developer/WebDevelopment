const figlet = require("figlet");

figlet("Shubhangi Shubham Rajput",function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
});