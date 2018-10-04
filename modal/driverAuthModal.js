const mongoose = require('mongoose');


const driverData=mongoose.Schema({
    Firstname: {
        type: String,
        required: true,
        index: true
    },
    Lastname: {
        type: String,
        required: true,
        index: true
    },
    Phonenumber: {
        type: String,
        required: true,
        index: true
    },
    AdharNumber: {
        type: String,
        required: true,
        index: true
    },
    LicenseNumber: {
        type: String,
        required: true,
        index: true
    },
    Cbook: {
        type: String,
        required: true,
        index: true
    },
    Adharpic: {
        type: String,
        required: true,
        index: true
    },
    Licensepic: {
        type: String,
        required: true,
        index: true
    },
    Cbookpic: {
        type: String,
        required: true,
        index: true
    },
    Address: {
        type: String,
        required: true,
        index: true
    }

})