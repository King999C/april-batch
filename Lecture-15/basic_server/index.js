// const express = require('express') //commonjs (default)
import express from 'express'; //esmodule
const app = express(); //instance of your application

app.get( '/' , (req,res)=>{
    // console.log(req , "req");
    res.send("welcome to express my lovely friends")
} )


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
} )

