const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    date: String,
    termin: String,
});

module.exports = mongoose.model('Termin', schema);
