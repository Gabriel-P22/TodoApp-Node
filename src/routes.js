const { Router } = require('express') 
const routes =  require('./initialTest')

const router = Router()

router.use("/a", routes);

module.exports =  router