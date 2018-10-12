var express = require('express')
var router =express.Router()
var loginModal=require('../../modal/UserModals/loginModal')

//save user     
registerUser=(reqData,callback)=>{       
    var query = {'Mobile_Number':reqData.Mobile_Number};
    loginModal.findOneAndUpdate(query, reqData, {new:true,upsert:true,returnNewDocument:true}, function(err, doc){
        if (err) callback({success:false,error:err}) 
        else{   
            console.log("in updated doc",doc)
            callback({success:true,data:doc})      
        }   
    });   
}



checkUSer=(reqData,callback)=>{

    loginModal.findOne({Mobile_Number:reqData.Mobile_Number}).then(doc=>{
        console.log(doc)
        if(doc==null){  
            callback({
                success:true,
                docExists:false
            })
        }   
        else{               
            callback({
                success:true,
                docExists:true,
                Data:doc}
            )
        }
   
    }).catch(err=>{
        console.log(err)
      callback(err)    
    })
}



  
module.exports=({
    registerUser:registerUser,
    checkUSer:checkUSer  
})