//require mango
const mongoose = require('mongoose');

//calling main() and connect node.js to database
main()
    .then(()=>{
        console.log("Connection Successfull");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
} 

//create schema for document
const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

//cunstruct models that create document
const User = mongoose.model("User",userSchema); 
// const Employee = mongoose.model("Employee",userSchema); 

//insert single data
// const user1 = new User({name:"Shubham",email:"shubham@gmail.com",age:19});
// const user2 = new User({name:"om",email:"om@gmail.com",age:20});
// const user3 = new User({name:"sahil",email:"sahil@gmail.com",age:21});
//user1.save();
//user2.save();
//user3.save();

//insert many data
// User.insertMany([
//     {name:"tony",email:"tony@gmail.com",age:90},
//     {name:"peter",email:"peter@gmail.com",age:89},
// ]).then((result)=>{
//     console.log(result);
// });

// //find data
// User.findById("66ec592ad084848ee8bb5c01").then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.log(err);
// })
// //update method 
// User.updateMany({age:{$gt:25}},{age:30}).then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })
// //find and update method
// User.findOneAndUpdate({name:"tony"},{age:15},{new:true})
// .then((res)=>{
//     console.log(res);
// })
// //delete method
// User.deleteMany({age:{$gte:20}}).then((res)=>{
//     console.log(res);
// })
// //find AND delete
// User.findByIdAndDelete("66ec533763e105a53e9c3790").then((res)=>{
//     console.log(res);
// });
// User.findOneAndDelete({name:"Shubham"}).then((res)=>{
//     console.log(res);
// });