const router = require('express').Router()
const productDetailsController = require('../controllers/product-details.controller')


router.get('/', productDetailsController.getProducts)
router.get('/:id', productDetailsController.getProduct)


module.exports = router