var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var driverAuthService = require('../../services/Driver/driverAuthService')


router.post('/checkDriver', function (req, res) {
  var Mobile_Number = req.body.Mobile_Number
  var obj = {
    Mobile_Number: Mobile_Number
  }

  driverAuthService.checkDriver(obj, function (result) {
    res.json(result)
  })
})

router.post('/register',function(req,res) {
var obj={
  Firstname:req.body.Firstname,
Lastname:req.body.Lastname,
Mobile_Number:req.body.Mobile_Number,
AdharNumber:req.body.AdharNumber,
LicenseNumber:req.body.LicenseNumber,
Cbook:req.body.Cbook,
Adharpic:req.body.Adharpic,
Licensepic:req.body.Licensepic,
Cbookpic:req.body.Cbookpic,
City:req.body.City,
Address:req.body.Address
}
   
driverAuthService.registerDriver(obj,function(result){
  res.json(result)
})   

})

module.exports = router;