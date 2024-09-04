const Sequelize = require("sequelize");

const sequelize = new Sequelize("sequelize-youtube", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
