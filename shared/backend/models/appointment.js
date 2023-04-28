const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    datum: {type:Date},
    termin: {type:String}
});

module.exports = mongoose.model('Appointment', schema);
//MongoDB erstellt Schema und sucht nach appointment ( das Schema)
//klein und plural form Name als appointments
