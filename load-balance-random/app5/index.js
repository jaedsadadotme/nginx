const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello App5")
})

app.listen(3005)
