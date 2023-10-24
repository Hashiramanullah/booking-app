const mongoose = require('mongoose');

let SignUpData = mongoose.Schema({
    AgentCode:Number,
    Name:String,
    City:String,
    Password:Number,
})

let SignUpUser  = mongoose.model('SignUpData', SignUpData);

module.exports = SignUpUser