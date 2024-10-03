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

const userSchema = new Schema({
    username : String,
    address : [
        {
            _id:false,
            location: String,
            country: String,
        },
    ],
});

const user = mongoose.model("user",userSchema);

const addUsers = async()=>{
    let user1 = new user({                                                    //parent document
        username:"Shubham",
        address:[                                                   //chid document
            {
                location:"pune",
                country:"India"
            },
            {
                location:"jalgoan",
                country:"India",
            }
        ],
    });
    let result = await user1.save();
    console.log(result);
}

addUsers();
