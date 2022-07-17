const { Router } = require('express') 

const initialRoute = require('./initialRoute')

const router = Router()

router.use("/", initialRoute);

module.exports =  router