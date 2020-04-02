var router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/userModel');
const {
  signUpValidation,
  signInValidation
} = require("../validators/userValidator");

/* POST users sign-up */
router.post('/sign-up', signUpValidation, async (req, res, next) => {

  const emailExist = await User.findOne({
    email: req.body.email
  })
  if (emailExist) return res.status(400).send('email already exists')

  var salt = bcrypt.genSaltSync(10);
  var hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  })
  try {
    const savedUser = await user.save();
    // res.status(200).send({user_id:savedUser._id});
    res.status(200).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

/* POST users sign-in */
router.post('/sign-in', signInValidation , async (req, res, next) => {
  const user = await User.findOne({
    email: req.body.email
  })
  if (!user) return res.status(400).send('email or password is wrong')
  const validPass = bcrypt.compareSync(req.body.password, user.password);
  if (!validPass) return res.status(400).send('email or password is wrong')

  // create and assign jwt token
  const token = jwt.sign({
    _id: user._id
  }, process.env.TOKEN_SECRET)
  res.status(200).header('auth_token', token).send(token);
});

module.exports = router;