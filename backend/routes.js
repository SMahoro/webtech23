const express = require('express');
const router = express.Router();
const appointment = require('./models/appointment');


// get all = READ alle
router.get('/', async(req, res) => {
    const allAppointments = await appointment.find();
    res.send(allAppointments);
});

// post one = CREATE
router.post('/', async(req, res) => {
    const newAppointment = new appointment({
        datum: req.body.datum,
        termin: req.body.termin,
    })
    await newAppointment.save();
    res.send(newAppointment);
});
    
// get one = READ
router.get('/:id', async(req, res) => {
    try {
        const oneAppointment = await appointment.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(oneAppointment);
    } catch {
        res.status(404);
        res.send({
            error: "Dieser Termin ist nicht vorhanden!"
        });
    }
})


// update one member = UPDATE
router.patch('/:id', async(req, res) => {
    try {
        const updateAppointment = await appointment.findOne({ _id: req.params.id })

        if (req.body.datum) {
            updateAppointment.datum = req.body.datum
        }

        if (req.body.termin) {
            updateAppointment.termin = req.body.termin
        }

        await appointment.updateOne({ _id: req.params.id }, updateAppointment);
        res.send(updateAppointment)
    } catch {
        res.status(404)
        res.send({ error: "Dieser Termin existiert nicht!" })
    }
});

// delete one member via id DELETE
router.delete('/:id', async(req, res) => {
    try {
        await appointment.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Dieser Termin existiert nicht!" })
    }
});


module.exports = router;



