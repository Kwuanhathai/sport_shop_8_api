const router = require('express').Router()
const productsController = require('../controllers/products.controller')

router.get('/', productsController.getProducts)
router.get('/:id', productsController.getProduct)
router.post('/add', productsController.addProduct)
router.put('/update/:id', productsController.updateProduct)
router.delete('/delete/:id', productsController.deleteProduct)

module.exports = router