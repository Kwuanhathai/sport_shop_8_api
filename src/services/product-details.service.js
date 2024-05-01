const productDetailsRepository = require('../repositories/product-details.repository');


exports.findAll = async () => await productDetailsRepository.findAll()

exports.findById = async (id) => await productDetailsRepository.findById(id)
