const productsService = require('../services/products.service');
const multer = require('multer')
const multerConfig = require('../configs/multer');
const upload = multer(multerConfig.config).single(multerConfig.keyUpload)

exports.getProducts = async (req, res) => {
    res.json(await productsService.findAll())
}

exports.getProduct = async (req, res) => {
    const result = await productsService.findById(req.params.id)
    if (result) {
        res.json(result)
    } else {
        res.status(404).json({})
    }
}

exports.addProduct = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(`error: ${JSON.stringify(err)}`)
            return res.status(500).json({ message: err.message })
        }
        return res.status(201).json(await productsService.add(req.body, req.file))

    })
}

exports.updateProduct = (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.log(`error: ${JSON.stringify(err)}`)
            return res.status(500).json({ message: err.message })
        }
        const result = await productsService.update(req.params.id, req.body, req.file)
        if (result) {
            res.json(result)
        }
        else {
            res.status(404).json({})
        }
    })
}

exports.deleteProduct = async (req, res) => {
    const result = await productsService.remove(req.params.id)
    if (result) {
        res.status(204).json()
    } else {
        res.status(404).json({})
    }
}