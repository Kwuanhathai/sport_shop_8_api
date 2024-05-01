const productDtailsService = require('../services/product-details.service');


exports.getProducts = async (req, res) => {
    res.json(await productDtailsService.findAll())
}

exports.getProduct = async (req, res) => {
    const result = await productDtailsService.findById(req.params.id)
    if (result) {
        res.json(result)
    } else {
        res.status(404).json({})
    }
}
