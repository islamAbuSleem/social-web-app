const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig')

const User = require('./user');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    }
}, {
    sequelize,
    modelName: 'Post'
})

User.hasMany(Post, { onDelete: 'cascade', hooks: true })
Post.belongsTo(User)

module.exports = Post