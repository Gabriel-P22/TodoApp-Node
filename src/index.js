const express = require('express')
const Router = require('./routes.js')

const app = express()

app.use(express.json())
app.use(Router)

app.listen(3000, () => {
    console.log("The server is the listening on port 3000")
})