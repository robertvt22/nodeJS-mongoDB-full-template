const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    }
});

const Schema = mongoose.model('Schema', modelSchema);

module.exports = Schema;