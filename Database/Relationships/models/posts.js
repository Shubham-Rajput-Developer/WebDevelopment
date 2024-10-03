const mongoose = require('mongoose');
const {Schema} = mongoose;

main()
.then(()=>{
    console.log("DB Connecton Successful");
})
.catch(err => {
    console.log(err);
});

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const useerSchema = new Schema({
    username: String,
    email:String
});

const postSchema = new Schema({
     content:String,
     likes:Number,
     user:{
        type:Schema.Types.ObjectId,
        ref:"user"
     }
});

const user = mongoose.model("user",useerSchema);
const post = mongoose.model("post",postSchema);

const addData = async()=>{
    // let user1 = new user({
    //     username:"Shubham",
    //     email:"ShubhamRajput@gmail.com"
    // });
    let user1 = await user.findOne({username:"Shubham"});

    let post1 = new post({
        content:"I am third year student",
        likes: 2000
    });

    post1.user = user1;

    await user1.save();
    await post1.save();
};
//addData();

const addData2 = async()=>{
    let user1 = await user.findOne({username:"Shubham"});

    let post2 = new post({
       content:" By by pes modern",
       likes:30000,
    });
    post2.user = user1;
    await post2.save();
};

//addData2();

const getData = async()=>{
    let result = await post.findOne({}).populate("user","username");
    console.log(result);
};
getData();
