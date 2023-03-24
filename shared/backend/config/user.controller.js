
//for public access
exports.allAccess =(req, res) => {
  res.status(200).send("Public Content.");
};

// for logged in user
exports.userBoard =( req, res) => {
  res.status(200).send("User Content.");
};

// for admin
exports.adminBoard =( req, res) => {
  res.status(200).send("Admin Content.");
};

