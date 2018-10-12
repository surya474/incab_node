var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var driverAvailabilityService=require('../../services/Driver/driverAvailabilityService')

router.post('/updateDriverAvailabilty',function(req,res){

    var reqData={
        "Mobile_Number":req.body.Mobile_Number,
        "isAvailable":req.body.isAvailable,
        "lat":req.body.lat,
        "lng":req.body.lng         
    }      
    driverAvailabilityService.UpdateDriverAvailability(reqData,function(result){
        res.json(result)
    })
})   

router.post('/updateDriverLocation',function(req,res){
   var reqData={
         "Mobile_Number":req.body.Mobile_Number,
         "loc":[req.body.lat,req.body.lng]
   }
         
   driverAvailabilityService.UpdateDriverLocation(reqData,function(result){
       res.json(result)
   })
})

module.exports = router;