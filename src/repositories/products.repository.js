const db = require('../db/models');


exports.findAll = async () => await db.Products.findAll()

exports.findById = async (id) => await db.Products.findByPk(id)

exports.add = async (product) => await db.Products.create(product)

exports.update = async (id, product) => await db.Products.update(product, {
    where: {
        id: id
    }
})

exports.remove = async (id) => await db.Products.destroy({
    where: {
        id: id
    }
})