import connectDB from "./db/db.js";
// require('dotenv').config({path:'./env'})
import dotenv from 'dotenv'

dotenv.config({
    path:'./env'
})

connectDB()









/*
import express from 'express';
const app=express()
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("Error: ",error);
            
        })
        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on PORT ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("Error: ",error)
        throw error
    }
})()
*/