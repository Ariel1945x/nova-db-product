const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Speciality = sequelize.define('speciality', {
    speDoc: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Speciality;