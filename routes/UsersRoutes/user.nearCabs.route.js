var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var JoiValidationSchema = require('../../schemas/joiValidationschema')
var nearCabService=require('../../services/Users/getNearCabsService')
    

router.post('/getNearbyCabs',function(req,res){  
    console.log(req.body)
  
var params={  
    "lat":req.body.lat,
    "lng":req.body.lng,
      
}  
      
nearCabService.getNearCabs(params,function(result){
    res.json(result)
})
     
})


module.exports = router;