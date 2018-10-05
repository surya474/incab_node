var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var driverAvailabilityService=require('../../services/Driver/driverAvailabilityService')

router.post('/updateDriverAvailabilty',function(req,res){

    var reqData={
        "Mobile_Number":req.body.Mobile_Number,
        "isAvailable":req.body.isAvailable
    }      

    driverAvailabilityService.UpdateDriverAvailability(reqData,function(result){
        res.json(result)
    })
})   

module.exports = router;