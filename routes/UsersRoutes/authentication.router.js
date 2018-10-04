var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var JoiValidationSchema = require('../../schemas/joiValidationschema')
var userLoginService = require('../../services/Users/saveuser')


router.post('/checkUser',function(req,res){
    var mobile_number=req.body.mobile_number
      userLoginService.checkandInsertUser(mobile_number,function(response){
    res.json(response)
      })
  })

module.exports = router;