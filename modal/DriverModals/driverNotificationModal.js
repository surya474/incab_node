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
        index: true
    },
    upatedDate: {   
        type: Date,
        default: Date.now()
    },

})

module.exports=mongoose.model('driverToken', driverToken);