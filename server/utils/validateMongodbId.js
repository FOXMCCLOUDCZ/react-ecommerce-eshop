const mongoose = require('mongoose')
const validateMongoDbId = (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if (!isValid) throw new Error('ID nenalezeno nebo není platné')
}
module.exports = validateMongoDbId