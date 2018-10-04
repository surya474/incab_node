var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var driverNotificationService=require('../../services/Driver/driverTokensUpdate')

router.post('/updateDriverToken',function(req,res){

    var reqData={
        "Mobile_Number":req.body.Mobile_Number,
        "Token":req.body.Token
    }

    driverNotificationService.UpdateDriverToken(reqData,function(result){
        res.json(result)
    })
})   

module.exports = router;