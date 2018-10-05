var express = require('express')
var driverAuthModal=require('../../modal/DriverModals/driverAuthModal')




checkDriver=(reqData,callback)=>{

    driverAuthModal.find({Mobile_Number:reqData.Mobile_Number}).then(doc=>{
        console.log(doc)
        if(doc==null || doc.length==0){
            callback({
                docExists:false
            })
        }   
        else{
             
            callback({docExists:true,
                Data:doc}
            )
        }

    }).catch(err=>{
        console.log(err)
      callback(err)    
    })
}

registerDriver=(reqData,callback)=>{
         
    var driverAuthModal2=new driverAuthModal(reqData)
    var query = {'Mobile_Number':reqData.Mobile_Number};
    driverAuthModal.findOneAndUpdate(query, reqData, {new:true,upsert:true,returnNewDocument:true}, function(err, doc){
        if (err) callback({success:false,error:err}) 
        else{   
            console.log("in updated doc",doc)
            callback({success:true,data:doc})      
        }   
    });   
}   


module.exports=({
    checkDriver:checkDriver,
    registerDriver:registerDriver
})   