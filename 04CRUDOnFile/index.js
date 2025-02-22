const { error } = require('console')
const fs  = require('fs')
const path = require('path')
const dirPath = path.join(__dirname,'crud')
// file ko create krne ka trika hai 
// fs.writeFileSync(`${dirPath}/apple.txt`,"this is the first project file made by me") 

// ye hai file ko read karne ka trika hai 

// fs.readFile(`${dirPath}/apple.txt`,'utf8', (err, item) => {
// console.log(item)
// })       

// file ko update krne ka trika 
// fs.appendFile(`${dirPath}/apple.txt`,'and this is a simple text file',(err)=>{
//     if(!err)console.log("file is updated")
// })

// file ko rename krne ka trika 

// fs.rename(`${dirPath}/apple.txt`,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)console.log("file is reanmed")
// })

// file ko delete krne ka trika
fs.unlinkSync(`${dirPath}/fruit.txt`)

//Interview Question
//What is Buffer? this is a temporary memory location 
