const Sequelize = require('sequelize');
const db = require('../config/database');
const User = require('../models/User');


const connect = new Sequelize(db);

User.init(connect);

module.exports = connect;

