var express = require('express')

var ridePriceModal=require('../../modal/UserModals/ridePriceDetails')
var nearcabservice=require('./getNearCabsService')
var distance = require('google-distance');
distance.apiKey = 'AIzaSyAgvBTAhW8XSP6z0-U3jESNTSIZo7Gmus0';

savePrice=(reqData,callback)=>{       
    var query = {'city':reqData.city};
    ridePriceModal.findOneAndUpdate(query, reqData, {new:true,upsert:true,returnNewDocument:true}, function(err, doc){
        if (err) callback({success:false,error:err}) 
        else{   
            console.log("in updated doc",doc)
            callback({success:true,data:doc})      
        }   
    });   
}
   

getDistance=(reqData,callback)=>{
      
          googleDist(reqData).then(distanceGot=>{
            console.log("distance", distanceGot.distanceValue)
            distanceGot.distanceValue = distanceGot.distanceValue / 1000;
              
          //console.log(res)       
          callback({success:true,Data:distanceGot})
          }).catch(err=>{
              callback(err)
          })
         
     
}



 getRidePrice=(reqData,callback)=>{
 
    ridePriceModal.find().lean().then(res=>{
  console.log("in locations retrieve",res)            
 calcDistance(reqData,res).then(result=>{
  console.log("in near city data",result)
  callback(result)     
        })
       
    }).catch(err=>{
      callback(err)
    })
}



async function calcDistance(reqData, res) {
    var finalData = []
    for (let i = 0; i < res.length; i++) {
      //console.log("in for loop",i)    
      let distanceGot = await googleDist(reqData, res[i])
      console.log("distance", distanceGot.distanceValue)
      res[i].distanceValue = distanceGot.distanceValue / 1000;
      finalData.push(res[i])    
    //  console.log("final data", res)
    }    
    //console.log(res)    
    return ({success:true,Data:finalData})
  }
  
    

 function googleDist(reqData) {

    return new Promise(resolve => {
      // console.log("in gogle dist")
      distance.get(
        {
          index: 1,   
          units: 'metric',
          origin: `${reqData.fromlat},${reqData.fromlng}`,
          destination: `${reqData.tolat},${reqData.tolng}`
        },  
        function (err, data) {
          if (err) {
            resolve(err)
          }
          else {
            console.log("in distance ",data)   
  
            resolve(data)
          }
        });
    })
  
  }
module.exports=({
    savePrice:savePrice,
    getRidePrice:getRidePrice,
    getDistance:getDistance
})