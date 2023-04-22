const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    datum: {type:String, required:true},
    termin: {type:String, required:true}
});

module.exports = mongoose.model('Appointment', schema);
//MongoDB erstellt Schema und sucht nach appointment ( das Schema)
//klein und plural form Name als appointments
