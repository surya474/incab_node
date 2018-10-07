var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var JoiValidationSchema = require('../../schemas/joiValidationschema')
var userLoginService = require('../../services/Users/saveuser')


router.post('/RegisterUser', function (req, res) {

  var params = {
      'First_Name': req.body.First_Name,     
      'Last_Name': req.body.Last_Name,       
      'Mobile_Number': req.body.Mobile_Number
  }         
  console.log(params)
  userLoginService.registerUser(params, function (response) {
      console.log("in user router login servvcie ", response)
      res.json(response)
  })

}
)

router.post('/checkUser',function(req,res){
    var mobile_number=req.body.mobile_number
      userLoginService.checkUSer(mobile_number,function(response){
    res.json(response)      
      })
  })    

module.exports = router;