const mongoose = require('mongoose');

const loginData=mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        index: true
    },
    last_name:{
        type: String,
        required: false,
        index: false
    },
    mobile_number:{
        type: Number,
        required: true,
        index: true,
        unique:true
    }


})

module.exports = mongoose.model('loginData', loginData); 