const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `https://api.darksky.net/forecast/a3d93ac9588eed9cb4a50329c24c3a7e/${latitude},${longitude}?units=si`

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' The higher temperature of the day is ' + body.daily.data[0].temperatureHigh + ' degress out. And lowest ' + body.daily.data[0].temperatureLow + '.')
        }
    })
}

module.exports = forecast