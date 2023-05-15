const express = require('express')
const task = require("./routes/task.js")
const connectDb = require('./db/connect.js')
const dotenv = require('dotenv').config()


connectDb();



app = express()
const port = 3000

app.listen(port,()=>{
    console.log(` server is running on  port ${port}  `)
})

app.use(express.static('./'))
app.use(express.json())



app.use('/api/v1/tasks',task)