const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('mymilktea', 'root', null, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;