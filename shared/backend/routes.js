const express = require('express');
const router = express.Router();
const appointment = require('./models/appointment');
const user = require('./models/user');
const bcrypt = require('bcryptjs');


// signup --> function to hash the password and save data in the database

router.post('/signup', async(req, res) => {
  const existingUsername = await user.findOne({username: req.body.username}); // check if user exist
  if(!existingUsername) {  // if user does not exist, create new user
    bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const person = new user({
          username: req.body.username,
          password: hash
        })
        person.save()
          .then(result => {
            res.status(201).json({
              message: 'user created',
              result: result
            })
          })
          .catch(err => {
            res.status(500).json({
              message: 'user not created',
              error: err
            })
          })
      })
  } else {
    res.status(400).json({error: 'username exist already'})
  }
})


// login page -> compare entered credentials with those stored in the database
// check the username(method: use "getone" or "findone") if it exist. if yes, check the password
//password : decrypt the password. use "async" and compare with end point.

//get all users
router.get('/', async (req, res) => {
  const allUsers= await user.find();
  console.log(allUsers);
  res.send(allUsers);
})

//username and password login
router.post('/login',  async (req, res) =>{
  const existingUsername = await user.findOne( { username: req.body.username});
  if(existingUsername){
    bcrypt.compare(req.body.password, existingUsername.password).then((result) => {
      if(result){
        res.status(201).json({ message: 'logged in'});
      } else {
        res.status(204).send(); // incorrect password
      }
    })
      //.catch((err) => res.status(400).json({ error: 'Something went wrong'}))
  } else {
    res.status(400).json({ error: ' User does not exist'});
  }
} );


// post one = CREATE appointment
router.post('/appointment', async(req, res) => {
  const newAppointment = new appointment({
    datum: req.body.datum,
    termin: req.body.termin,
  })
  await newAppointment.save();
  //res.status(404);
  res.send(newAppointment);
});


// get all appointments = READ alle
router.get('/table', async(req, res) => {
    const allAppointments = await appointment.find();
  console.log(allAppointments);
    res.send(allAppointments);
});

// delete one appointment via id DELETE
router.delete('/:id', async(req, res) => {
  try {
    await appointment.deleteOne({ id: req.params.id })
    res.status(204).send()
  } catch {
    res.status(404)
    res.send({ error: "Dieser Termin existiert nicht!" })
  }
});




// Update an appointment
router.get('/table/:id', async(req, res) => {
    try {
        const oneAppointment = await appointment.findOne({ id: req.params.id });
        console.log(req.params);
        res.send(appointment[0]);
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
        const updateAppointment = await appointment.findOne({ id: req.params.id })

        if (req.body.datum) {
            updateAppointment.datum = req.body.datum
        }

        if (req.body.termin) {
            updateAppointment.termin = req.body.termin
        }

        await appointment.updateOne({ id: req.params.id }, updateAppointment);
        res.send(updateAppointment)
    } catch {
        res.status(404)
        res.send({ error: "Dieser Termin existiert nicht!" })
    }
});

module.exports = router;
