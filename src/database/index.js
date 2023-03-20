const Sequelize = require('sequelize');
const db = require('../config/database');

const User = require('../models/User');
const Address = require('../models/Address');
const Tech = require('../models/Tech');


const connect = new Sequelize(db);

User.init(connect);
Address.init(connect);
Tech.init(connect);

User.associate(connect.models);
Address.associate(connect.models);
Tech.associate(connect.models);


module.exports = connect;

