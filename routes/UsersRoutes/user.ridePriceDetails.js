var express = require('express');
var router = express.Router();   
const ExpressJoi = require('express-joi-validator');
var JoiValidationSchema = require('../../schemas/joiValidationschema')
var ridePriceDetailsService=require('../../services/Users/ridePriceServie')


router.post('/savePrice',function(req,res){  
    console.log(req.body)
  
var params={  
    "lat":req.body.lat,
    "lng":req.body.lng,
    "price":req.body.price,
    "city":req.body.city
      
}         
      
ridePriceDetailsService.savePrice(params,function(result){
    res.json(result)
})
     
})

   

router.post('/getPrice',function(req,res){  
    console.log("in get Price req",req.body)
  
var params={  
    "lat":req.body.lat,
    "lng":req.body.lng,
    "uid":req.body.uid
}         
      
ridePriceDetailsService.getRidePrice(params,function(result){
    res.json(result)
})
})   


router.post('/getDistance',function(req,res){  
    console.log("in get Price req",req.body)
  
var params={  
    "fromlat":req.body.fromlat,
    "fromlng":req.body.fromlng,
    "tolat":req.body.tolat,
    "tolng":req.body.tolng,
    "uid":req.body.uid
}         
      
ridePriceDetailsService.getDistance(params,function(result){
    res.json(result)
})
})   


module.exports = router;