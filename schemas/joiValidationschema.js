const Joi = require('joi');

var loginschema=Joi.object({
"first_name":Joi.string().required(),
"last_name":Joi.string(),
"mobile_number":Joi.number().required()
})




module.exports={
loginschema:loginschema
}