'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Station extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Trips}) {
      this.hasMany(Trips, {foreignKey: "fromStation", as: 'from'});
      this.hasMany(Trips, {foreignKey: "toStation", as : 'to'});
    }
  }
  Station.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // len: [3,10],
        notEmpty: true,
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        // checkLen(value){
        //   if (value.lenght >= 5 && value.lenght <= 50) {
        //     return true
        //   } else {
        //     throw new Error("Độ dài từ 5 - 10");
        //   }
        // }
      }
      
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate:{
      //   isIn: [['HCM', 'DN']]
      // }
    }
  }, {
    sequelize,
    modelName: 'Station',
  });
  return Station;
};