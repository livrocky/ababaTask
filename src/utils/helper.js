require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

function hashPassword(plainTextString) {
  return bcrypt.hashSync(plainTextString, 10);
}

function passWordsMatch(enteredPass, storedHash) {
  return bcrypt.compareSync(enteredPass, storedHash);
}

function generateJwtToken(payload) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('generateJwtToken no secret');
  return jwt.sign(payload, jwtSecret, { expiresIn: '2h' });
}

function verifyJwtToken(token) {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error('verifyJwtToken no secret');
  try {
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  } catch (err) {
    throw new Error('verifyJwtToken');
  }
}

module.exports = {
  passWordsMatch,
  generateJwtToken,
  verifyJwtToken,
  hashPassword,
};
