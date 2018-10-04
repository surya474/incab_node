var express = require('express')
var driverTokenModal=require('../../modal/DriverModals/driverNotificationModal')

async function UpdateDriverToken(reqData,callback){
    console.log(reqData)
    var query = {'Mobile_Number':reqData.Mobile_Number};
     var driverTokenModal2= new driverTokenModal(reqData)
   var data = await checkDoc(reqData,query)
    if(data==null){
    driverTokenModal2.save().then(doc=>{
          callback({success:true,   
              data:doc})
    }).catch(err=>{    
        callback({success:false,
            error:err})   
    })    
    }

}

checkDoc=(reqData,query)=>{    
new Promise(resolve=>{
    driverTokenModal.findOneAndUpdate(query, reqData, {upsert:true}, function(err, doc){
        if (err) resolve(err) 
       else{
           resolve(doc)      
       }
    });   
})
}
module.exports=({

    UpdateDriverToken:UpdateDriverToken
})