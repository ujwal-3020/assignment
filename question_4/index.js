const fs = require("fs");
let data = "";

const readStream = fs.createReadStream('largeFile.txt');

readStream.on("data",(chunk)=>{
    data+= " " + chunk;
});

readStream.on("end",()=>{
    console.log(data);
});
