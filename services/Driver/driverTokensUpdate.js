var express = require('express')
var driverTokenModal=require('../../modal/DriverModals/driverNotificationModal')

async function UpdateDriverToken(reqData,callback){
    console.log(reqData)
    var query = {'Mobile_Number':reqData.Mobile_Number};
     var driverTokenModal2= new driverTokenModal(reqData)
     let result=await checkDoc(reqData,query)
     console.log("in promise return")
          callback(result)
}

checkDoc=(reqData,query)=>{    
return new Promise(resolve=>{
    driverTokenModal.findOneAndUpdate(query, reqData, {new:true,upsert:true,returnNewDocument:true}, function(err, doc){
        if (err) resolve({success:false,error:err}) 
        else{   
            console.log("in updated doc",doc)
            resolve({success:true,data:doc})      
        }
    });     
})
}
module.exports=({

    UpdateDriverToken:UpdateDriverToken
})