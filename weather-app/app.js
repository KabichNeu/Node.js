 const request = require('request')
 const geocode = require('./geocode.js')

//  const url = 'https://api.darksky.net/forecast/216df07630a7ce0b4c24d5d97928c27a/37.8267,-122.4233?units=si'

//  request({ url: url, json: true}, (error,response)=>{
//         //console.log(response.body.currently)\
//         if(error){
//             console.log('Unable to connect to the wather service!')

//         }else if(response.body.error){
//             console.log('Unable to find location')
//         }else{
//             console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + ' percent chance of range.')

//         }
//  })

 //Geocoding 
//Address -> Lat/Long - > weather

// const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYnNoZXNoIiwiYSI6ImNrOGcyZGRpZDBhZGIzZ3A0MHhscDM0aWUifQ.PDFtGY_1eMN2NH5QkROUOA&limit=1'

// request({url:geocodeURL, json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to the geo api ')
//     }else if(response.body.features.length === 0){
//         console.log('Unable to find geoapi')
//     }else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude,longitude)

//     }
    
// })



geocode('Nepal',(error,data)=>{
    console.log('error',error)
    console.log('Data', data)
})