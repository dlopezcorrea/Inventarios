const{ Schema, model} = require('mongoose');

const BrandSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive'],
    },
    date_created: {
        type: Date,
        default: Date.now,
        required: true,
    },
    date_updated: {
        type: Date,
        default: Date.now,
        required: true,
    }
});

module.exports = model('Brand', BrandSchema);