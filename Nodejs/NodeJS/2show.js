const fs = require("fs");
/*
//To write the text
fs.writeFile("test.txt","Write file",
(err)=>{
    console.log("Completed");
}
);
*/
//To read the text
fs.appendFile("test.txt","read file",
(err)=>{
    console.log("read file");
}
);
// fs.readFile("test.txt",(err, data)=>{
// console.log("complete");}