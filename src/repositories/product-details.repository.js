const db = require('../db/models');


exports.findAll = async () => await db.Products.findAll()

exports.findById = async (id) => await db.Products.findByPk(id)
