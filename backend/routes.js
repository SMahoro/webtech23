const express = require('express');
const router = express.Router();
const Termin = require('./models/termine');


// get all members
router.get('/termine', async(req, res) => {
    const allTermine = await Termin.find();
    console.log(allTermine);
    res.send(allTermine);
});


// post one member
router.post('/termine', async(req, res) => {
    const newTermin = new Member({
        date: req.body.date,
        termin: req.body.termin,
    })
    await newTermin.save();
    res.send(newTermin);
});


// post one member via id
router.get('/members/:id', async(req, res) => {
    try {
        const termine = await Termin.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(termine);
    } catch {
        res.status(404);
        res.send({
            error: "Member does not exist!"
        });
    }
})


// update one member
router.patch('/members/:id', async(req, res) => {
    try {
        const member = await Termin.findOne({ _id: req.params.id })

        if (req.body.date) {
            member.date = req.body.date
        }

        if (req.body.termin) {
            member.termin = req.body.termin
        }


        await Termin.updateOne({ _id: req.params.id }, termine);
        res.send(termine)
    } catch {
        res.status(404)
        res.send({ error: "Termin does not exist!" })
    }
});


// delete one member via id
router.delete('/termine/:id', async(req, res) => {
    try {
        await Termin.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Termin does not exist!" })
    }
});




module.exports = router;
