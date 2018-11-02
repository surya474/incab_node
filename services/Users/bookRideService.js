var express = require('express');
var app  = express();
var server = app.listen(8810)
var io = require('socket.io').listen(server);

// var http = require('http').Server(app);
// var io   = require('socket.io')(http);


var getNearcabsService = require('./getNearCabsService')

async function confirmRide(reqData) {
  console.log("in req data", reqData)
  return new Promise(resolve => {
    getNearcabsService.getNearCabs(reqData, function (res) {
      var tripID= + new Date()
    console.log(tripID)
      console.log("in confirm ride response", res)
      var cabsData = res.Data
      cabsData.sort(function (a, b) {
        return a.distanceValue - b.distanceValue
      })
         
let cabsarr=
resolve(cabsData)
sendMessagetoCabs(reqData,cabsData,tripID)


    }, (err) => {
      resolve(err)
    })
  })
}


async function settimeout(){  
  setTimeout(function(){ return true }, 20000);

}

async function sendMessagetoCabs(reqData,cabsData,tripID){


  for(let i=0;i<cabsData.length;i++){
    io.on('connection', function(socket){
      
        socket.on('driverResp',(data)=>{
            console.log("driver resp",data)
        })
        });

let sendData=await emitData(reqData,cabsData[i],tripID)

  }
  

}

async function emitData(reqData,cabData,tripId){
  io.on('connection', function(socket){
let obj=reqData      
    obj["driverId"]=cabData._id
    obj["tripId"]=tripId
    io.emit('reqCab', obj);
  });
}

module.exports = ({
  confirmRide: confirmRide,

})
