const { DataTypes } = require('sequelize');
const sequelize = require('../DB/dbConfig')

const User = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    username:{
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    name:{
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    coverPic:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    profilePic:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    city:{
        type: DataTypes.STRING(45),
        allowNull: true,
    },
    website:{
        type: DataTypes.STRING(45),
        allowNull: true,
    },
})


module.exports = User