const path = require("path");
const fs = require("fs");

const dirPath = path.join(__dirname,'/folders');

fs.readdir(dirPath, function(err, files){
    files.forEach(function(file){
        console.log(file);
    })
});