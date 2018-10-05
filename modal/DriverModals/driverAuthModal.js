const mongoose = require('mongoose');
    

const driverData=mongoose.Schema({
    Firstname: {
        type: String,
        required: true,
        index: true
    },
    Lastname: {
        type: String,
        required: false,
        index: true
    },
    Mobile_Number: {
        type: Number,
        required: true,
        index: true
    },
    AdharNumber: {
        type: String,
        required: true,
        index: false
    },
    LicenseNumber: {
        type: String,
        required: true,
        index: false
    },
    Cbook: {
        type: String,
        required: false,
        index: false
    },
    Adharpic: {
        type: String,
        required: true,
        index: false
    },
    Licensepic: {
        type: String,
        required: true,
        index: false
    },
    Cbookpic: {
        type: String,
        required: true,
        index: false
    },
    Address: {
        type: String,
        required: true,
        index: false
    },
    CreatedDate: {
        type: Date,
        default: Date.now()
    }

})

module.exports=mongoose.model('driverData', driverData);