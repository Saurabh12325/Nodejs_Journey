const fs  = require('fs')
const path = require('path');
const dirPath = path.join(__dirname,'files')
console.log(dirPath)

for(i= 0;i<5;i++){
   fs.writeFileSync( dirPath +'/File'+i+'.txt' , "simple")
}
//now read the file and listing the file
fs.readdir(dirPath, (error, files) => {
  files.forEach((element )=> {
    console.log(element)
  })
})