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
    driverAuthModal2.save().then(doc=>{
        console.log("in save ",doc)
      callback(doc)
    }).catch(err=>{
        console.log("in error",err)
        callback(err)
    })    

}   


module.exports=({
    checkDriver:checkDriver,
    registerDriver:registerDriver
})   