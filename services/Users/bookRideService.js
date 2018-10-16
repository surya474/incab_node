
var getNearcabsService=require('./getNearCabsService')

async function confirmRide(reqData){          
 console.log("in req data",reqData)  
 return new Promise(resolve=>{
    getNearcabsService.getNearCabs(reqData,function(res){
        console.log("in confirm ride response",res)
        var cabsData=res.Data
        cabsData.sort(function(a, b){   
                return a.distanceValue-b.distanceValue
            })
     resolve(res)
    },(err)=>{       
  resolve(err)   
    })
 })
  
         
}        
                           

module.exports = ({
    confirmRide: confirmRide, 
  
  })
    