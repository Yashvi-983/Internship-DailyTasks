require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const studRoutes = require('./Routes/studRoutes')

const app = express()
const MONGODB_URI = process.env.MONGODB_URI
const port = 3000

app.use(express.json())
    
mongoose.connect(MONGODB_URI)
.then(() => console.log(' 👏 Connection Successfull.'))
.catch((err) => console.log(' 👎 Connection failed!!', err))

app.use('/student', studRoutes)

app.listen(port, ()=> {
    console.log(` 🚀 Server listening on http://localhost:${port}`)
})