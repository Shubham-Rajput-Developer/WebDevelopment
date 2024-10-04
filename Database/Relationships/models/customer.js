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

const orderSchema = new Schema({
    item : String,
    price : Number,
});

const customerSchema = new Schema({
    name:String,
    orders:[
        {
            type:Schema.Types.ObjectId,
            ref:"order"
        },
    ],
});

// customerSchema.pre("findOneAndDelete",async()=>{
//     console.log("PRE MIDDLEWARES ");
// });

customerSchema.post("findOneAndDelete",async(customer)=>{
    if(customer.orders.length){
        let res = await order.deleteMany({_id: { $in: customer.orders } });
        console.log(res);
    } 
});


const order = mongoose.model("order",orderSchema);
const customer = mongoose.model("customer",customerSchema);

const addOrder = async()=>{
    let result = await order.insertMany([
        {item:"samosa",price:20},
        {item:"chips",price:10},
        {item:"chocolate",price:40}
    ]);
    console.log(result);
}
// addOrder();

const addCustomer = async()=>{
    let customer1 = new customer({
        name:"Shubham"
    });

    let order1 = await order.findOne({item:"samosa"});
    let order2 = await order.findOne({item:"chips"});

    customer1.orders.push(order1);
    customer1.orders.push(order2);

    let result = await customer1.save();
    console.log(result);
};
//addCustomer();

const findCustomer = async ()=>{
    let result = await customer.find({}).populate("orders");
    console.log(result[0]);
};

//findCustomer();

const addCust = async()=>{
    let  newCust =  new customer({
        name:"karan",
    });

    let newOrder = new order({
        item:"Jalebi",
        price:50
    });

    newCust.orders.push(newOrder);

    await newOrder.save();
    await newCust.save();

    console.log("Added new customer");      
};
//addCust();

const deleteCust = async()=>{
    let data = await customer.findByIdAndDelete("67003bbd087f65c0411deaf0"); 
    console.log(data);
}
deleteCust();

