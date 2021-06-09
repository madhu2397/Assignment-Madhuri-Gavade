const fs = require("fs");

fs.appendFile("read.txt","hey ho! lets go",
(err)=>{
    console.log("The file was saved");
}
);