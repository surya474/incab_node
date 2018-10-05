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
    }

})

module.exports=mongoose.model('driverAvailabilty', driverAvailabilty);