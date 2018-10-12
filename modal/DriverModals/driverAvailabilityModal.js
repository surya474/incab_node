const mongoose = require('mongoose');
    

const driverAvailabilty=mongoose.Schema({

    isAvailable: {
        type: Boolean,
        required: true,
        index: false  
    },
    Mobile_Number:{  
        type: String,
        required: true,
        index: true
    },
    loc: {
        type: [Number],
        required: true,
        index: '2d'
     
    },
    lat:{
        type: String,
        required: true,
        index: true
    },
    lng:{
        type: String,
        required: true,
        index: true
    }

   
})  
driverAvailabilty.index({loc:"2dsphere",lat:"",lng:"",Mobile_Number:"",isAvailable:true})
module.exports=mongoose.model('driverAvailabilty', driverAvailabilty);