// firstly we understand a basic example and understand why we use the promises with this example it is clear that for update in the value of 
// b = 30 it will take 2s time and output is given 10 due to asynchronous programming so to handle such type of action promises are used 
let a= 10;
let b = 0;
 setTimeout(()=>{
    b=30;
 },2000)
 console.log(a+b) 

//  now use the promises in above example by changing the variable 
let X  = 10;
let y = 0;
let waitingData = new Promise((resolve,reject)=>{ //using the callback fn
  setTimeout(()=>{
    resolve(30)
  },2000)
})
waitingData.then((data)=>{
    y = data;
    console.log(X+y)
})
// to yha pe promises use krke time bound ko resolve kr liya gya hai 