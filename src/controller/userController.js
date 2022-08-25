/* eslint-disable no-unused-vars */
const bcrypt = require('bcryptjs');
const { addUserToDb, findUserByEmail } = require('../model/userModel');
const { passWordsMatch, generateJwtToken } = require('../utils/helper');

async function userRegister(req, res) {
  const gautasEmail = req.body.email;
  const { name, password } = req.body;
  const plainTextPassword = password;
  const hashedPassword = bcrypt.hashSync(plainTextPassword, 10);

  // tikrinam ar yra toks email jau uzregintas
  const foundUser = await findUserByEmail(gautasEmail);

  // jei yra toks email
  // if (foundUser) {
  //   res.status(400).json(`User with ${gautasEmail} e-mail already exists.`);
  //   return;
  // }

  const newUser = {
    name,
    email: gautasEmail,
    password: hashedPassword,
  };
  const insertResult = await addUserToDb(newUser.name, newUser.email, newUser.password);

  if (insertResult === false) {
    res.status(500).json('something wrong');
    return;
  }
  res.status(201).json('user created');
}

const userLogin = async (req, res) => {
  const receivedEmail = req.body.email;
  const receivedPassword = req.body.password;

  const foundUserArr = await findUserByEmail(receivedEmail);

  const foundUser = foundUserArr[0];

  if (!foundUser) {
    res.status(400).json('Email or password not found');
    return;
  }
  if (!passWordsMatch(receivedPassword, foundUser.password)) {
    res.status(400).json('Email or password not found');
    return;
  }

  // generate jwt token

  const payload = { userId: foundUser.id };
  const token = generateJwtToken(payload);
  res.json({ success: true, token, payload });
};

module.exports = {
  userRegister,
  userLogin,
};
