var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
const bookRideService=require('../../services/Users/bookRideService')
router.post('/confirmRide',function(req,res){
   var obj={
       "lat":req.body.lat,
       "lng":req.body.lng  
   }  
bookRideService.confirmRide(req.body).then(result=>{
    console.log("in result")   
    res.json(result)
})
   
})




module.exports = router;