const express = require('express')
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const router = express.Router()
// const usermiddleware = require("../middleware/userauth")
const {Taxpayer} = require("../models")

router.post('/register',async (req,res)=>{
    try{

        const taxpayer  = await Taxpayer.create(req.body)
        res.json({Status:"Success",Data:taxpayer})
        // await service.addTaxpayer(req.body)
        // const data = req.body
        // const token = jwt.sign({data},"key")
        // res.cookie("token",token)
        // res.json({Status:"Success",Data:data})
        // res.status(201).send('created successfully !.')
    }catch(error){
        res.json({Status:"Falied to register"})
    }
})

// router.post('/login',async (req,res)=>{
//     try{
//         const data = await service.loginTaxpayer(req.body)
//         const token = jwt.sign({data},"key")
//         res.cookie("token",token)
//         res.json({Status:"Success",Data:data})
//         //res.status(201).send('created successfully !.')
//     }catch(error){
//         res.json({Status:"Falied to login"})
//     }
// })

// router.get("/auth",usermiddleware.verifyuser, async (req, res) => {
//     res.json({Status:"Success",Data:req.name})
// });

// router.get("/logout", async (req, res) => {
//     res.clearCookie("token")
//     res.json({Status:"Success",Data:"Logged out"})
// });



module.exports = router;