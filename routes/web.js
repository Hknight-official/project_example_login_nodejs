const express = require('express');
const Router = express.Router();

const Auth = require('../controller/Auth');

// # register xử lý
Router.get('/', Auth.Index_Register);
Router.post('/register', Auth.Register);

Router.get('/login', Auth.Index_Login);

module.exports = Router;