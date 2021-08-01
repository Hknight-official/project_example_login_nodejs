const express = require('express');
const Router = express.Router();

const Auth = require('../controller/Auth');
const UserManage = require('../controller/Manage_User');
const MiddlewareAuth = require('../middleware/AuthCheck');

// # register xử lý
Router.get('/', Auth.Index_Register);
Router.post('/register', Auth.Register);

Router.get('/login', Auth.Index_Login);
Router.post('/login', Auth.Login);

Router.get('/users',MiddlewareAuth.Check, UserManage.Index);

module.exports = Router;