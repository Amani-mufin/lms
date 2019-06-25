const Sequelize = require("sequelize");

const sequelize = new Sequelize('student', "root", "blessing",{
    dialect: "mysql",
    host: "localhost"
});

module.exports = sequelize; 