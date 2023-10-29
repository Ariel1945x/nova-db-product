const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Doctor = sequelize.define('doctor', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descript: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    specialityId: {
        type: DataTypes.INTEGER
    },
});

module.exports = Doctor;