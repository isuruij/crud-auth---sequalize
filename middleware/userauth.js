const jwt = require("jsonwebtoken")

module.exports.verifyuser = async (req,res,next)=>{
    try{
        console.log("came to validation")
        const token = req.cookies.token
        console.log(token)
        const decoded = jwt.verify(token,"key")
        console.log(decoded)
        req.name = decoded.name
        console.log(decoded.name) 
        next()
    }
    catch(e){
        res.status(401).send({error:"please authenticate"})
    }
    
}