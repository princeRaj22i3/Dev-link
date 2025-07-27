const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const userModel = require('../models/signin');

const secretKey = 'helloWorld';

router.post('/signin',async (req,res)=>{
    const {username,password} = req.body;
    if(!username||!password) return res.status(400).json({msg:"Username or password not found"});

    const existingUser = await userModel.findOne({username});
    if(existingUser){
        return res.status(409).json({
            success:false,
            message: "Username already exists. Please choose a different username."
        });
    }
    const result = await userModel.create({
        username,
        password
    })
    res.status(200).json({
        success: true,
        message: "User created successfully!" 
    });
})

module.exports = router