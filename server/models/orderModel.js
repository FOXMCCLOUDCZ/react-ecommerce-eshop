const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var orderSchema = new mongoose.Schema({
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
            },
            count: Number,
        },
    ],
    paymentIntent: {},
    orderStatus: {
        type: String,
        default: 'Nezpracováno',
        enum: [
            'Nezpracováno',
            'Dobírka',
            'Zpracovává se',
            'Odesláno',
            'Zrušeno',
            'Doručeno',
        ],
    },
    orderby: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
    },
    {
        timestamps: true,
    }
);

//Export the model
module.exports = mongoose.model('Order', orderSchema);