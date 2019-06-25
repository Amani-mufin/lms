const Sequelize = require("sequelize");
const sequelize = require("../config/db");

class User extends Sequelize.Model { }
User.init({
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    roleID: {
        type: Sequelize.STRING,
        allowNull: false
    }    
}, { sequelize })

module.exports = User; 