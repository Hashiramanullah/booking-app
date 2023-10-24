// Backend Build
const express = require('express');

let SignUpData = require("./models/SignUpData");
let product = require("./models/test");

const mongoose = require("mongoose");

const app = express();


app.use(express.json());



mongoose.connect('mongodb://localhost:27017/db12').then((connection)=>{

//  let SgData = new SignUpData();
//  SgData.save();
//  let p = new product();
// p.name = "Hello EveryOne";
// p.save()


 let SgData = new SignUpData();

console.log(connection);
}).catch((err)=>{
    console.log(err)
})


//yeh SignUpData Mangwya ha 

app.post("/SignUpData",async(req,res)=>{
    console.log(req.body);

     let nyaUser = new SignUpData(req.body);
     await nyaUser.save()
    res.json({})
})

app.post("/LoginData",  async(req,res)=>{
try{
    const AgentId = req.body.LoginAgent;
    const LoginPin = req.body.LoginPassword;

    const userDone = await SignUpData.findOne({AgentCode:AgentId});
    
    if(userDone){
        console.log("Yes AgentCode MAtch Kar Gya ha ");
        res.send("ok")
    }else{
        console.log("Not! Agent Code Is Not Match");
    }
}  catch(error){
    console.log("Invalid");
}

    console.log(req.body);
 
     

     

})



app.listen(9080,()=>{
    console.log("Server is Running on Port 9080");
})