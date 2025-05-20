const { DataTypes } = require('sequelize');

const db = require('../db/connection');

const User = require('./User');

const Address = db.define('Address', {
    city: {
        type: DataTypes.STRING,
        require: true,
    },
    street: {
        type: DataTypes.STRING,
        require: true,
    },
    cep: {
        type: DataTypes.STRING,
        require: true,
    },
    number: {
        type: DataTypes.STRING,
        require: true,
    }
});

User.hasMany(Address);

Address.belongsTo(User)

module.exports = Address;