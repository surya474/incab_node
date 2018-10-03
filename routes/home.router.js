var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var JoiValidationSchema = require('../schemas/joiValidationschema')
var userLoginService = require('../services/saveuser')


router.post('/saveUser', function (req, res) {

    var params = {
        'first_name': req.body.first_name,
        'last_name': req.body.last_name,
        'mobile_number': req.body.phone_number
    }
    console.log(params)
    userLoginService.saveUser(params, JoiValidationSchema.loginschema, function (response) {
        console.log("in home router login servvcie ", response)
        res.json(response)
    
    })

}
)

router.post('/checkUser',function(req,res){
  var mobile_number=req.body.mobile_number
    userLoginService.checkandInsertUser(mobile_number,function(response){
  res.json(response)
    })
})

module.exports = router;