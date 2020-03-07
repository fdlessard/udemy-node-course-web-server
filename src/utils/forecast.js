const request = require('request')

const forecast = (longitude, latitude, callback) => {

    const url = 'https://api.darksky.net/forecast/033f2b994ee4a62d3aa1f0cb63eb5057/' + longitude +',' + latitude
 
    request( {url,  json: true}, (error, {body}) => {

        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error){
            callback('Unable to find location!', undefined)
        } else {
            const temperature = body.currently.temperature
            const precipitationProbability = body.currently.precipProbability
            callback(undefined, {
                msg: body.daily.data[0].summary + 'It is currently ' + temperature + ' degrees out. there is a ' + precipitationProbability + '% chance of rain.'
            })
        }
    })
}

module.exports = forecast