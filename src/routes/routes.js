const router = require('express').Router()
const jwt = require('../configs/jwt')

router.use('/api/products', jwt.verifyToken, require('./products.route')) //For admin
router.use('/api/account', require('./account.route'))
router.use('/api/product-details', require('./product-details.route')) //For user

module.exports = router