const { Schema, model} = require('mongoose');

const UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
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

module.exports = model('User', UserSchema);