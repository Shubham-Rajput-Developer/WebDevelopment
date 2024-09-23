const mongoose = require("mongoose");

main()
.then(()=>{
    console.log("Connection Successful");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
}

const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        maxLength:30,
    },
    author:{
        type:String,
    },
    price:{
        type:Number,
        min:[1,"Price is to low"],
    },
    discount:{
        type:Number,
        default:0,
    },
    category:{
        type:String,
        enum:["fiction","non-fiction"],
    },
});

const Book = mongoose.model("Book",bookSchema);

Book.findByIdAndUpdate("66f19983a598ac7cc2f0e641",{price:-200},{runValidators:true})
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err.errors.price.properties.message);
})

// let book1 = new Book({
//     title:"Thor",
//     author:"Chakku",
//     price:150,
//     category:"fiction",
// });

// book1.save()
// .then(res=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// });