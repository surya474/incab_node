var express = require('express')
var router =express.Router()
var loginModal=require('../modal/loginModal')

//save user

saveUser=(reqData,callback)=>{
    console.log("in save user")
var login=new loginModal(reqData)
login.save().then(doc=>{
    console.log("in save ",doc)
  callback( doc)
}).catch(err=>{
    console.log("in error",err)
    callback(err)
})
}

checkandInsertUser=(reqData,callback)=>{

    loginModal.find({mobile_number:reqData}).then(doc=>{
        console.log(doc)
        if(doc==null || doc.length==0){
            callback({
                docExists:false
            })
        }
        else{
            callback(doc)
        }

    }).catch(err=>{
        console.log(err)
      callback(err)    
    })
}

module.exports=({
    saveUser:saveUser,
    checkandInsertUser:checkandInsertUser
})