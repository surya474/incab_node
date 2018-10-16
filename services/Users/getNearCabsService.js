var express = require('express')
var driverAvailabilityModal = require('../../modal/DriverModals/driverAvailabilityModal')
var distance = require('google-distance');
distance.apiKey = 'AIzaSyAgvBTAhW8XSP6z0-U3jESNTSIZo7Gmus0';
var minDistance = 5

async function getNearCabs(reqData, callback) {



  driverAvailabilityModal.find({ isAvailable: true }).lean().then(res => {

    calcDistance(reqData, res).then(result => {

     // console.log("final resp", result)
      callback(result)
    })
  }, err => {
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
    if (res[i].distanceValue < minDistance) {
      finalData.push(res[i])
    }
  //  console.log("final data", res)
  }    
  //console.log(res)    
  return ({success:true,Data:finalData})
}


async function googleDist(reqData, res) {

  return new Promise(resolve => {
    // console.log("in gogle dist")
    distance.get(
      {
        index: 1,
        units: 'metric',
        origin: `${reqData.lat},${reqData.lng}`,
        destination: `${res.lat},${res.lng}`
      },
      function (err, data) {
        if (err) {
          resolve(err)
        }
        else {
          //  console.log("in distance ",data)   

          resolve(data)
        }
      });
  })

}
module.exports = ({
  getNearCabs: getNearCabs,

})



/*
var query=

  [  {$geoNear: {
        near: {
            type: "Point", 
            coordinates: [reqData.lat, reqData.lng] 
          },
        distanceField: "dist.calculated", 
      
        includeLocs:"dist.location", 
        num: 10, 
        spherical :true,
        maxDistance : 2500, 

        }
      }]
data=await driverAvailabilityModal.aggregate(query).then((response)=>{
    console.log(response)
  callback(response)
},(err)=>{
 console.log(err)
 callback(err)
}
)

*/