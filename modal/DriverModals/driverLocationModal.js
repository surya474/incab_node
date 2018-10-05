const mongoose = require('mongoose');    
const driverLocation=mongoose.Schema({

    lat: {
        type: String,
        required: true,
        index: false  
    },

    Mobile_Number:{
        type: String,
        required: true,
        index: true
    },
    lng: {   
        type: String,
        required:true,
        index: false
    },
   
    LastUpated:{
        type:Date,
        default:Date.now()
    }

})

module.exports=mongoose.model('driverLocation', driverLocation);