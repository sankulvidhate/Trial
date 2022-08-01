const express = require('express')
const app = express()
const path = require('path')

app.get("/",(req,res) => {
    res.send(
        
        // "This is my express application"
        // "Company Information"
        // "Santeck Pvt Ltd"
        )
})

app.get("/aboutus",(req,res) => {
    res.sendFile(path.join(__dirname,'/Company.html'))
})

app.listen(3000, () => {
    console.log('Server listening at 3000')
})