var express = require('express');
var getNearcabsService = require('./getNearCabsService')
var app = express();
var server = app.listen(8810)
var io = require('socket.io').listen(server);
var redis = require('redis');
var client = redis.createClient();

client.on('connect', function() {
  console.log('connected');
});



io.on('connection', function (socket) {
  socket.on('driverRespForCabRequest', (data) => {    
    console.log("driver resp in socket", data)
    responsefromCab(data)  
  })
});




async function confirmRide(reqData) {
  console.log("in req data", reqData)
  var tripID = + new Date()+reqData.Mobile_Number
  let obj= {
    'lat': reqData.lat,
    'lng': reqData.lng,
    'from': reqData.from,
    'to':reqData.to,
    'date':new Date(),
    'userId':reqData.uid,
    'status':0, 
    'tripId':tripID       
}

  client.hmset(reqData.Mobile_Number,obj);

  return new Promise(resolve => {       
    getNearcabsService.getNearCabs(obj, function (res) {
    
      console.log(tripID)
      console.log("in confirm ride response", res)
      var cabsData = res.Data
      cabsData.sort(function (a, b) {
        return a.distanceValue - b.distanceValue
      })

      resolve(cabsData)
      sendMessagetoCabs(reqData, cabsData, tripID)


    }, (err) => {
      resolve(err)
    })
  })
}


async function settimeout() {
  setTimeout(function () { return true }, 20000);

}

async function sendMessagetoCabs(reqData, cabsData, tripID) {


  for (let i = 0; i < cabsData.length; i++) {

    let sendData = await emitData(reqData, cabsData[i], tripID)

  }


}

async function emitData(reqData, cabData, tripId) {
  let obj = reqData
  obj["driverId"] = cabData._id
  obj["tripId"] = tripId
  io.on('connection', function (socket) {

  });
  io.emit('reqCab', obj);
}


function responsefromCab(data){
  if(data.reqStatus==1){
    client.hgetall(data.Mobile_Number,function(err, object) {
      console.log("response from cab",data);
      console.log("redis data",object)    
      if(object.status==0){
        client.hmset(data.Mobile_Number,{   
          status:1,
          driverId:data.driverId
        })    
        data['driverId']=data.driverId
        data['status']=1
         io.on('connection', function (socket) {

  });
        io.emit('respfromserver',data)
        io.emit('tripReqStatus',data)      
      }
  
      else{
        let res={
          driverId:data.driverId,
          status:0
        }
        io.emit('respfromserver', res);
      }
  });
  }
}

module.exports = ({
  confirmRide: confirmRide
})   
