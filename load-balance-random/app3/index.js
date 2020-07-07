const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Hello App3")
})

app.listen(3003)
