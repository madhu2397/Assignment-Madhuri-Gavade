var items=[{
    id:"A1",
    name:"Potato",
    price: 80
},

{
    id:"A2",
    name:"Finger",
    price: 90
},

{
    id:"A3",
    name:"Pineapple",
    price: 70
},

{
    id:"A4",
    name:"Apple",
    price: 100
},
]
const express = require("express");
const app = express();

app.get("/items",(req,res)=>{
    res.send(items);
})

// app.get("/items",(req,res)=>{
//     items.forEach((item)=>{
//         console.log(item.id);
//     })
// })
//1-items
// app.post("/items",(req,res)=>{
//     res.send(items);
// })

//3-Get
app.get('/items/:id',(req,res)=>{
    const itemId = (req.params.id);
    const item = items.find(item => item.id === itemId);
    if(item){
        res.send(item);
    }
    else {
        res.send({message:`item ${itemId} not exist`});
    }
});

//2-post
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/items",(req,res)=>{
    var item = req.body;
    
    items.push(item); 
    console.log(item);
    res.send("item added successfully");
});

app.listen(3000,(req,res)=>{
    console.log("port 3000");
})  
