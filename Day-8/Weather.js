require('dotenv').config()
const { error } = require('console')
let readline = require('readline')
const API_KEY = process.env.API_KEY;

const rl = readline.createInterface({input: process.stdin, output: process.stdout})

async function weatherApp(){
    const input = rl.question('Enter city: ', (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        
        fetch(url)
        .then((response) => {
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            return response.json()
        })
        .then((data) => {
            console.log(`Temperature in ${city}: ${data.main.temp}°C`)
            console.log(`Weather: ${data.weather[0].description}`)
        })
        .catch((error) => {
            console.error('Error fetching Data: ', error)
        })
    })
}
weatherApp()