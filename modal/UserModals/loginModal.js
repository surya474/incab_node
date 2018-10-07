const mongoose = require('mongoose');

const Users=mongoose.Schema({
    First_Name: {
        type: String,
        required: true,
        index: true
    },
    Last_Name:{
        type: String,
        required: false,
        index: false
    },
    Mobile_Number:{
        type: String,
        required: true,
        index: true,
        unique:true
    },  
    CreatedDate: {
        type: Date,
        default: Date.now()
    },


})

module.exports = mongoose.model('Users', Users); 