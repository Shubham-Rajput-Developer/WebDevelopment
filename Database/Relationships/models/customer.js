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
addCustomer();