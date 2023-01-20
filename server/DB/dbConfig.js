const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('socialWebApp', 'root', 'root', {
    host: 'localhost',
    dialect:'mysql'
  });
  
// sync all models
sequelize.sync()

  module.exports = sequelize