require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const os = require('os');

// * IMPORTANT to be able to use mongoose queries
const User = require('../models/User');

// ^ MIDDLEWARE
// need to be with the function keyword, otherwise it doesn't work

//* ONLY FOR REGISTRATION to prevent duplicates - why are these not working properly?
// if you want it to move on to the next middleware, you can't do another res.send since these can only be sent once like return - that's why only one of the errors is being shown even if it is not the right one
// now this logic makes more sense
async function checkIfEmailExists(req, res, next) {
  let {email} = req.body;
  const emailExists = await User.exists({email});
  if (emailExists === null) {
    next();
  } else {
    console.log('Email exists');
    res.status(404).send({error: 'Email already registered!'});
  }
}

async function checkIfUsernameExists(req, res, next) {
  let {username} = req.body;
  const usernameExists = await User.exists({username});

  if (usernameExists === null) {
    next();
  } else {
    console.log('Username exists');
    res.status(404).send({error: 'Invalid username!'});
  }
}

//^ GET IP
router.get('/ip', function (req, res) {
  const networkInterfaces = os.networkInterfaces();
  const ip = networkInterfaces['eth0'][0]['address'];
  if (ip) {
    res.send(ip);
  }
});

// ^ POST register a user
router.post(
  '/register',
  checkIfEmailExists,
  checkIfUsernameExists,
  async (req, res) => {
    const {username, name, email, password} = req.body;
    const hashedPW = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS),
    );

    try {
      const newUser = await User.create({
        username,
        name,
        email,
        password: hashedPW,
      });

      res.send(newUser);
    } catch (err) {
      res.status(404).send({error: err.message});
    }
  },
);

// ^ POST login
router.post('/login', async (req, res) => {
  const {username, password} = req.body;

  //? not sure why a plain find was not working here, but findOne does
  //^ SOLUTION: find() never returns null so it always executes the catch block
  // https://stackoverflow.com/questions/40168478/find-and-findone-methods-in-mongodb-showing-different-results
  const user = await User.findOne({username});

  try {
    if (user !== null) {
      const passwordMatches = await bcrypt.compare(password, user.password);

      if (passwordMatches)
        res.status(200).send({
          message: `Welcome, ${user.name}!`,
          currentUser: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
          },
        });
      else res.status(404).send({error: 'Invalid password!'});
    } else {
      res.status(404).send({error: 'Invalid username!'});
    }
  } catch (err) {
    res.status(404).send({error: err.message});
  }
});

module.exports = router;
