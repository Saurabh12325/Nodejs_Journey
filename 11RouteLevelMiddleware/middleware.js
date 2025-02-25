//Route middleware is a function that runs before or after a request reaches a specific route. 
// It is used for tasks like authentication, logging, validation, or modifying requests/responses.
module.exports= reqFilter=(req,res,next)=>{
if(!req.query.age){
    res.send('please provide the age')
}
else if(req.query.age<18){
    res.send('you are not able access this page')
}
next()
}

