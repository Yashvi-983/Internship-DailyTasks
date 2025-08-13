const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Home page')
})

app.get('/about', (req, res) => {
    res.send('About page')
})

app.get('/contact', (req, res) => {
    res.send('Contact page')
})

app.get('/services', (req, res) => {
    res.send('Services page')
})

app.listen(port, () => {
    console.log(`Server listening on port: http://localhost:${port}`)
})