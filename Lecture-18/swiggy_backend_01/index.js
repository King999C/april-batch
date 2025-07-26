import express from "express"
const app = express(); //instance of application
import mongoose from 'mongoose';
import {restaurantRoutes} from "./routers/restaurant.router.js"

mongoose.connect('mongodb+srv://samarthvohraindia:59I4d4VJTCTV4MR1@cluster0.w5iljze.mongodb.net/') //returns a promise
.then(()=>{
    console.log("DB connected");
    
})
.catch((err)=>{
    console.log("DB failed" , err);
})

app.use(express.json()) //body parsing middleware becoz by default req.body is undefined

app.get('/' , (req,res)=>{
    res.send("Welcome to Rooot route")
})

restaurantRoutes(app);

const PORT = 8080;
app.listen(PORT,()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
})





// samarthvohraindia
// 59I4d4VJTCTV4MR1
// mongodb+srv://samarthvohraindia:59I4d4VJTCTV4MR1@cluster0.w5iljze.mongodb.net/