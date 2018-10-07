const Joi = require('joi');

var loginschema=Joi.object({
"First_Name":Joi.string().required(),
"Last_Name":Joi.string(),
"Mobile_Number":Joi.number().required()
})




module.exports={
loginschema:loginschema
}