const express=require("express")
const {connection}=require("./config/db")
const {productRoute}=require("./router/product")
const {userRouter}=require("./router/user")
const cors=require("cors")
const app=express()
require('dotenv').config()
app.use(cors())
app.use(express.json())



app.use(productRoute)
app.use(userRouter)




app.listen(process.env.port,async()=>{
    try {
        await connection
    } catch (error) {
        console.log(error)
        console.log("Db is connected")
        
    }
    console.log(`http://localhost:${process.env.port}`);
})
