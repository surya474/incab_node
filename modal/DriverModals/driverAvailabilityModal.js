const mongoose = require('mongoose');
    

const driverAvailabilty=mongoose.Schema({

    isAvailable: {
        type: Boolean,
        required: true,
        index: false  
    },
    Mobile_Number:{  
        type: Number,
        required: true,
        index: true
    }

})

module.exports=mongoose.model('driverAvailabilty', driverAvailabilty);