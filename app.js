const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


// const url = 'https://api.darksky.net/forecast/7d3bb66ba0543d5c78996f825152dfe9/37.8267,-122.4233'

// request({url: url, json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }else if(response.body.error){
//         console.log(response.body.error)
//     }else{
//     const currently = response.body.currently
//     console.log('it\'s currently '+ currently.temperature+' degrees out.'
//     +' There\'s a '+ currently.precipProbability+'% chance of rain.' )
//     }
// })

geocode('cairo',(error, data)=>{
    console.log('error: ',error )
    console.log('data: ' , data )
})

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })