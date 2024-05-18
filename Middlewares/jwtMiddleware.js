const jwt=require('jsonwebtoken')


const jwtMiddlewareFun=(req,res,next)=>{
    console.log("inside jwtMiddleware");
    // res.status(404).json("middle")
    try{
        const token=req.headers.authorization.split(" ")[1]
        console.log(token);
        if(token){
            const result=jwt.verify(token,process.env.secret_key)
            console.log(result); 
            req.payload=result.userId
            next()
        }
        else{
            res.status(406).json("Please Login First!!")
        }
     
    }
    catch{
        res.status(406).json("Please Login ")
    }
    
}

module.exports=jwtMiddlewareFun