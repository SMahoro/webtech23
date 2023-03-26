const { verifySignUp} = require("shared/backend/Sec"); //
const controller = require("shared/backend/config/auth.controller");
const cors = require('cors');

app.use(cors({
  origin: '*'
}));
//authentication routing
// POST signup, signin and signout actions

module.exports= function(app) {
  app.use(function (req, res, next) {
    res.header(
      "Access.Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
//signup routing
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
   controller.signup()
  );
//routing for signin and signout
  app.post("/api/auth/signin", controller.signin);

  app.post("/api/auth/signout", controller.signout);
};
