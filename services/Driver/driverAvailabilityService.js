var express = require('express')
var driverAvailabilityModal=require('../../modal/DriverModals/driverAvailabilityModal')

async function UpdateDriverAvailability(reqData,callback){
    console.log(reqData)
    var query = {'Mobile_Number':reqData.Mobile_Number};
     var driverAvailabilityModal2= new driverAvailabilityModal(reqData)
 let result=await checkDoc(reqData,query)
 console.log("in promise return")
      callback(result)   
}   

checkDoc=(reqData,query)=>{    
return new Promise(resolve=>{        
    driverAvailabilityModal.findOneAndUpdate(query, reqData, {new:true, upsert:true,returnNewDocument:true}, function(err, doc){
        if (err) resolve({success:false,error:err}) 
       else{   
           console.log("in updated doc",doc)
           resolve({success:true,data:doc})      
       }
    });   
})  
}   

async function UpdateDriverLocation(reqData,callback){

    var query={'Mobile_Number':reqData.Mobile_Number}
    console.log(reqData)
    var driverAvailabilityModal2= new driverAvailabilityModal(reqData)
    let result=await checkDoc(reqData,query)
    console.log("in promise return")
         callback(result)
}
        
module.exports=({
    UpdateDriverAvailability:UpdateDriverAvailability,
    UpdateDriverLocation:UpdateDriverLocation
})