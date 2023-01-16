const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig');
const User = require('./user');
const Post = require('./post');

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
            model: User,
            key: 'id'
        },
    },
    postId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model: Post,
            key: 'id'
        },
    }
},{
    sequelize,
    modelName: 'Comment'
})

Comment.hasOne(Post,{onDelete: 'cascade',hooks: true});
Comment.hasMany(User,{onDelete: 'cascade',hooks: true});

module.exports = Comment;