const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery', true);
const app = express();
const PORT = 3000;
const cors = require('cors');
const cookieSession = require("cookie-session");
app.use(cors({ origin: 'http://localhost:4200', credentials: true}));

app.use(express.json());
app.use('/', routes);

app.use(
  cookieSession({
    name: "kalendaer-session",
    secret: "kalendar-secret-key",  // use as env variable
    httpOnly: true   // cookie to be sent only via http
  })
)


const db= require("./models");
const Role = db.role;

//routes while signin
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

//connecting to db
db.mongoose.connect(process.env.DB_CONNECTION, { dbName: process.env.DATABASE });
//const db = mongoose.connection;

db.on('error', err => {
  console.log(err);
});
db.once('open', () => {
    console.log('connected to DB');
});

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(`Server started and listening on port ${PORT} ... `);
    }
});

//
//  function helps to create User/ admin

function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}
