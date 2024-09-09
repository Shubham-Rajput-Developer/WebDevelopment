const figlet = require("figlet");

figlet("Shubham",function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data);
});