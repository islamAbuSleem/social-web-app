const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig');
const User = require('./user')
class Comment extends Model {}

Comment.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    desc:{
        type: DataTypes.STRING,
        allowNull: false
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User
        }
    }
},{
    sequelize,
    modelName: 'Comment'
})