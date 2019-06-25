const Sequelize = require("sequelize");
const sequelize = require("../config/db");

class Leave extends Sequelize.Model { }
Leave.init({
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    reason: {
        type: Sequelize.STRING,
        allowNull: false
    },
    startDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userID: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    }    
}, { sequelize })

module.exports = Leave; 