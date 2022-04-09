const express = require("express");
const mongoose = require('mongoose');
const argon2 = require("argon2");

const router = express.Router();


const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  line1: String,
  line2: String,
  cityName: String,
  zipCode: String,
  stateName: String,
  attending: Boolean,
  role: {
    type: String,
    default: ""
  }
});




// create a User model from the User schema
const User = mongoose.model('User', userSchema);


/* API Endpoints */

/* All of these endpoints start with "/" here, but will be configured by the
   module that imports this one to use a complete path, such as "/api/user" */

// create a new user
router.post('/', async (req, res) => {
  if (!req.body.firstName || !req.body.line1)
    return res.status(400).send({
      message: "Name and Street Address are required"
    });

  try {
    // create a new user and save it to the database
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      line1: req.body.line1,
      line2: req.body.line2,
      cityName: req.body.cityName,
      zipCode: req.body.zipCode,
      stateName: req.body.stateName,
      attending: req.body.attending
    });
    await user.save();
  // set user session info
  // send back a 200 OK response, along with the user that was created
  return res.send({
    user: user
  });
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});



module.exports = {
  routes: router,
  model: User,
};
