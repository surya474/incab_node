const mongoose = require('mongoose');
    

const driverToken=mongoose.Schema({

    Token: {
        type: String,
        required: true,
        index: false  
    },
    Mobile_Number:{
        type: String,
        required: true,
        index: false
    }

})

module.exports=mongoose.model('driverToken', driverToken);