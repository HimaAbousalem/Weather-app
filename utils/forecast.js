const request = require('request')

const forecast = (latitude, longitude, callback)=>{
    const url = 'https://api.darksky.net/forecast/7d3bb66ba0543d5c78996f825152dfe9/'+ latitude + ',' + longitude
    request({url: url, json: true},(error, response)=>{
        if(error){
             callback('Unable to connect to weather service!',undefined)
        }else if(response.body.error){
            callback(response.body.error,undefined)
        }else{
            const currently = response.body.currently
            callback(undefined,'it\'s currently '+ currently.temperature+' degrees out.'
             +' There\'s a '+ currently.precipProbability+'% chance of rain.')
        }
    })

}
module.exports = forecast