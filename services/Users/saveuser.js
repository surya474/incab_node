var express = require('express')
var router =express.Router()
var loginModal=require('../../modal/UserModals/loginModal')

//save user
     
saveUser=(reqData,callback)=>{
    console.log("in save user")
var login=new loginModal(reqData)
var query = {'Mobile_Number':reqData.Mobile_Number};
var data = await checkDoc(reqData,query)
if(data==null){
    login.save().then(doc=>{
     callback({success:true,   
         data:doc})
}).catch(err=>{    
   callback({success:false,
       error:err})   
})    
}  
else{
   callback({success:true,
       data:data})
}

}

checkandInsertUser=(reqData,callback)=>{

    loginModal.findOne({mobile_number:reqData}).then(doc=>{
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

checkDoc=(reqData,query)=>{    
    new Promise(resolve=>{
        loginModal.findOneAndUpdate(query, reqData, {upsert:true}, function(err, doc){
            if (err) resolve(err) 
           else{   
               resolve(doc)      
           }
        });   
    })
    }    
  
module.exports=({
    saveUser:saveUser,
    checkandInsertUser:checkandInsertUser
})