const express=require("express");
const productRoute=express.Router();
const {productModel}=require("../model/probuct.model")
const {CartModel}=require("../model/cart.model")
const {babyproduct}=require("../product")


productRoute.post("/post",async(req,res)=>{
    try {
        let data= await productModel.insertMany(babyproduct)
        res.send({"msg":"Product data post"})
    } catch (error) {
        console.log(error)
        res.send({"msg":"something went wrong"})
    }
})
productRoute.get("/get",async(req,res)=>{
    try {
        let data =await productModel.find()
        res.send(data)
    } catch (error) {
        console.log(error)
        console.log({"msg":"something went wrong"})
    }
})
productRoute.post("/cart/post",async(req,res)=>{
    try {
        const data1=req.body;
        console.log("1",data1)
        let data =new CartModel(data1)
        await data.save()
        res.send({"msg":"your data is addeed in cart",data}) 
        console.log(data)
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"}); 
    }
})


productRoute.get("/cart/get",async(req,res)=>{
    try {
        const data=await CartModel.find()
        res.send({"msg":"your data is addeed in cart",data})
    } catch (error) {
        console.log(error);
        res.send({"msg":"something went wrong"});
        
    }
})


module.exports={
    productRoute
}