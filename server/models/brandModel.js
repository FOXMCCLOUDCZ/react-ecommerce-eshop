const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var brandSchema = new mongoose.Schema(
    {
    tecdocId: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    internalId: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    supplier: {
        type: String,
        required: true,
        unique: true,
        index: true,
    },
    numberOfArticles: {
        type: Number,
        required: true,
        unique: true,
        index: true,
    },
    description: {
        type: String,
        required: true,
        index: true,
    },
    images: []
    },
    {
        timestamps: true,
    }
)

//Export the model
module.exports = mongoose.model('brand', brandSchema);