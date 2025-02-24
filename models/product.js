const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const product = sequelize.define('products', {
  
  id:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title:{
   type: Sequelize.STRING
  }, 
  price: {
    type: Sequelize.DOUBLE,
    allowNull: false
  },
  imageUrl:{
    type: Sequelize.STRING,
    allowNull: false
  },
  description:{
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = product;