const { Router } = require('express');
const { getTypes } = require('../routesLogic/routesLogic')
const router = Router();


router.use('/', getTypes)

module.exports = router