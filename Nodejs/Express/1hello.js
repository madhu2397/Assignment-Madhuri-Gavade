const express = require("express");
const app = express();
// const port = 8000;

app.get("/",(req,res)=>{
    res.send("Hello world!");
});

app.listen(8000,() => {
    console.log("Listening from port 8000");
});