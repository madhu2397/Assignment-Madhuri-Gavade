const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("Hello world!");
})

app.get("/time",(req,res)=>{
    const date= new Date();
    res.send(date);
})

app.listen(port);