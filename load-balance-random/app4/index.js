const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello App4")
})

app.listen(3004)
