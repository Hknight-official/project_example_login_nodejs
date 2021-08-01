const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('users', new Schema({
    username: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, {timestamps: true}));