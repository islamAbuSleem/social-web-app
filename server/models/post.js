const { DataTypes } = require('sequelize');
const sequelize = require('../DB/dbConfig')

const User = require('./user');

const Post = sequelize.define('Post',{
    id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    desc:{
        type: DataTypes.STRING,
    },
    image:{
        type: DataTypes.STRING,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: User,
            key: 'id'
        }
    }
})

Post.hasOne(User,{onDelete: 'cascade', hooks: true})

module.exports = Post