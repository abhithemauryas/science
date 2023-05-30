const mongoose=require("mongoose");

const CartSchema=mongoose.Schema({
    image: String,
   additional:String,
   price: String,
   brand: String
});

const CartModel=mongoose.model("Cart",CartSchema);

module.exports={
    CartModel
}