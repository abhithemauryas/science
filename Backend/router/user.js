
const express = require("express")
const userRouter = express.Router()
const { userModel } = require("../model/user.model")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

userRouter.post("/signup", async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, pass } = req.body
    const signdata = await userModel.find({ email })
    if (signdata.length == 0) {
      bcrypt.hash(pass, 5, async (err, hash) => {
        if (!err) {
          let data = { name, email, pass: hash }
          const usedata = new userModel(data)
          await usedata.save();
          res.send({ "msg": "Successfully Signed Up" })
        } else {
          console.log(err);
          res.send({ "msg": "something wrong in hashing" })
        }
      })
    } else {
      res.send({ "msg": "you have been already Signed Up" })
    }
  } catch (error) {
    console.log(error);
    console.log("something went wrong");
    res.send({ "error": error })
  }
})

userRouter.post("/login",async(req,res)=>{
  try {
    let {email,pass}=req.body;
    let findemail=await userModel.find({email});
    if(findemail.length==1){
      bcrypt.compare(findemail[0].pass,pass,(err,result)=>{
        if(err){
          res.send({"msg":"wrong password"})
        }else{
          const token=jwt.sign({dataid:findemail[0]._id,email},process.env.token_secret);
          res.send({"msg":"successfully login",token})
        }
      })
    }
  } catch (error) {
    
  }
})


module.exports = {
  userRouter
}