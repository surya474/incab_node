var express = require('express')
var driverAvailabilityModal=require('../../modal/DriverModals/driverAvailabilityModal')

async function UpdateDriverAvailability(reqData,callback){
    console.log(reqData)
    var query = {'Mobile_Number':reqData.Mobile_Number};
     var driverAvailabilityModal2= new driverAvailabilityModal(reqData)
   var data = await checkDoc(reqData,query)
    if(data==null){
        driverAvailabilityModal2.save().then(doc=>{
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

checkDoc=(reqData,query)=>{    
new Promise(resolve=>{
    driverAvailabilityModal.findOneAndUpdate(query, reqData, {upsert:true}, function(err, doc){
        if (err) resolve(err) 
       else{   
           resolve(doc)      
       }
    });   
})
}    
module.exports=({
    UpdateDriverAvailability:UpdateDriverAvailability
})