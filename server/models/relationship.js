const { DataTypes, Model } = require('sequelize');
const sequelize = require('../DB/dbConfig');
const User = require('./user');

class Relationship extends Model {}

Relationship.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        unique: true
    },
    followerUserId:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id'
        }
    },
    followedUserId:{
        type: DataTypes.INTEGER,
        references:{
            model: User,
            key: 'id'
        }
    }
},{
    sequelize,
    modelName: 'RelationShip'
});

Relationship.hasMany(User, { onDelete: 'cascade', hooks: true});

module.exports = Relationship;