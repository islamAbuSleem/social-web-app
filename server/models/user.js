const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig')
const jwt = require('jsonwebtoken');

class User extends Model{
    generateToken(){
        return jwt.sign({id: this.id}, process.env.jwtPrivteKey);
    }
}

User.init({
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
},{
    sequelize,
    modelName:'User'
})


module.exports = User