const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig');
const User = require('./user');


class Story extends Model {}

Story.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        unique: true,
        primaryKey: true
    },
    img:{
        type: DataTypes.STRING
    },
    userId:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id'
        }
    }
},{
    sequelize,
    modelName: 'Story'
})

Story.hasMany(User, {onDelete: 'cascade', hooks: true});

module.exports = Story;