const config = require ("../config/auth.config");
const db = require ("../models");
const User = db.user;
const Role = db.role;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {signup} = require("./auth.controller");

// function to create new user in db
exports.signup = (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8),
  });

  user.save((err, user) => {
    if(err) {
      res.status(500).send({ message: err });
      return;
    }

    if (req.body.roles) {
      Role.find (
        {
          name: { $in: req.body.roles},
        },
      (err, roles) => {
        if(err) {
          res.status(500).send({ message: err });
          return;
        }

        user.roles = roles.map((role) => role._id);
        user.save((err) => {
          if(err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "Benutzer wurde erfolgreich registriert!"});
        });
      }
      );
    } else {
      Role.findOne({ name:"user"}, (err, role) => {
        if(err) {
          res.status(500).send({ message: err });
          return;
        }
        user.roles =[role._id];
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }

          res.send({ message: "Benutzer wurde erfolgreich registriert!"});
        });
      });
    }
  });
};

// function to sign in => find username in db and compare passwords in db usying bcrypt if correct.

exports.signin = (req, res) => {
  User.findOne({ // find if username of request exist in db
    username: req.body.username,
  })
    .popstate("roles")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({message: err});
        return;
      }
      if(!user) {
        return res.status(500).send({message: "Benutzer nicht gefunden.."});
      }

      const passwordIsValid = bcrypt.compareSync(  // compare password with the one in db
        req.body.password,
        user.password
      );
      if(!passwordIsValid) {
        return res.status(401).send({message: "Ungültiges Passwort!"});
      }

      const token = jwt.sign({ id: user.id}, config.secret, { // generate a token
        expiresIn: 86400 // 24hrs
      });

      const authorities = [];
      for (let i = o; i< user.roles.length; i++) {
        authorities.push(("ROLE_" + user.roles[i].name.toUpperCase())); // return user info and access token
      }

      req.session.token = token;

      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        roles: authorities,
      });
    });
};


// clear current session
exports.signout = async (req, res) => {
  try {
    req.session = null;
    return  res.status(200).send({ message: "Du wurdest abgemeldet!"});
  } catch (err) {
    this.next(err);
  }
};
