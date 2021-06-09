const express = require("express");
const app = express();
const port = process.argv[2];

app.get("/",(req,res)=>{
    res.send("Hello world");
})

app.listen(port);
console.log("The port is " + port);