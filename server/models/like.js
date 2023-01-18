const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig');
const User = require('./user');
const Post = require('./post');


class Like extends Model {}

Like.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id'
        }
    },
    postId:{
        type: DataTypes.INTEGER,
        references:{
            model: Post,
            key: 'id'
        }
    },
},{
    sequelize,
    modelName: 'Like'
})

Like.hasMany(User, {onDelete: 'cascade', hooks: true});
Like.hasOne(Post, {onDelete: 'cascade', hooks: true});

module.exports = Like;