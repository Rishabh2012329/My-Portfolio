const express = require('express')
const app = express()
const path = require('path')

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views/index.html'))
})


const port = process.env.PORT||5000
app.listen(port,(err)=>{
    if(err)
        return console.log(err)
    console.log("server is started listening at port ",port)
})