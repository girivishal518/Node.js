// a = 90
// console.log("This is indedx file");
import fs from 'node:fs'

// console.log(fs);

let file =fs.open("./file1.txt",(eee,data)=>{
    if(eee){
        throw eee;
    }
    console.log(data);

});
// let file =fs.openSync("./file1.txt",'r');
console.log(file);
fs.appendFileSync(file,"dua")
let data =fs.readFileSync("./file1.txt","utf8")
console.log(data);

// fs.writeFileSync(file,"hiii mayank");
// fs.closeSync(file)