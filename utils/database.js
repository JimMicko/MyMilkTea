const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("mymilktea", "root", "FEFC@2023", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
