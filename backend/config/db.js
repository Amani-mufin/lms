const Sequelize = require("sequelize");

const sequelize = new Sequelize('lms', "root", "blessing", {
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize; 