/* eslint-disable import/no-unresolved */
/* eslint-disable camelcase */
const express = require('express');
// const { validateUser, validateUserLogin } = require('../middleware');
const controller = require('../controller/userController');
const { validateUser, validateUserLogin } = require('../middleware');

const userRoutes = express.Router();

userRoutes.post('/register', validateUser, controller.userRegister);

userRoutes.post('/login', validateUserLogin, controller.userLogin);

module.exports = userRoutes;
