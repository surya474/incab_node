const mongoose = require('mongoose');

const ridePriceDetails=mongoose.Schema({
    lat: {
        type: String,
        required: true,
        index: true
    },
    lng:{
        type: String,
        required: false,
        index: false
    },
    city:{
        type: String,
        required: true,
        index: true,
        unique:true
    },  
    price:{
        type:Number,
        required: true,
        index: true
    }


})

module.exports = mongoose.model('ridePriceDetails', ridePriceDetails); 