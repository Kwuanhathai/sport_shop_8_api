const productsRepository = require('../repositories/products.repository');


exports.findAll = async () => await productsRepository.findAll()

exports.findById = async (id) => await productsRepository.findById(id)

exports.add = async (product, file) => await productsRepository.add({ ...product, picture: file ? file.filename : "" })


exports.update = async (id, product, file) => {
    const result = await productsRepository.findById(id)

    if (result) {
        const update = await productsRepository.update(result.id, { ...product, picture: file ? file.filename : result.picture })
        if (update) {
            return await productsRepository.findById(id)
        }
    } else null
}

exports.remove = async (id) => await productsRepository.remove(id)