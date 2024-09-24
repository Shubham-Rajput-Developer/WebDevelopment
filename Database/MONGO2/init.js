const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let Allchat = [
    {
        from:"shubham",
        to:"abhishek",
        message:"Ganpati visarjan",
        created_at: new Date(),
    },
    {
        from:"om",
        to:"chetan",
        message:"Trip plan",
        created_at: new Date(),
    },
    {
        from:"sahil",
        to:"pranav",
        message:"Shopping plan",
        created_at: new Date(),
    },
    {
        from:"omkar",
        to:"ajay",
        message:"cricket selection done",
        created_at:new Date(),
    },
];

Chat.insertMany(Allchat);