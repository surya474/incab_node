var express = require('express');
var router = express.Router();
var app = express()
const ExpressJoi = require('express-joi-validator');
var JoiValidationSchema = require('../../schemas/joiValidationschema')
var userLoginService = require('../../services/Users/saveuser')


  
module.exports = router;