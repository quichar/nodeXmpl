const request = require('request')
const express = require('express')
const app = express()

const url = 'http://api.weatherstack.com/current?access_key=bc1e4339a4ebbbaaa81d6d4fe4c558a7&query=37.8267,-122.4233'

request({ url:url},(error,response)=>{
 
    const data = JSON.parse(response.body)
    console.log(` I am here at ${data.location.name} 
    and the weather is ${data.current.weather_descriptions}`)
})
