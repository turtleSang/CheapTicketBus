'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trips extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Station,Trips}) {
      this.belongsTo(Station, {foreignKey: "fromStation", as: 'from'});
      this.belongsTo(Station, {foreignKey: "toStation", as : "to"});
      this.hasMany(Trips, {foreignKey: 'trip_id'});
    }
  }
  Trips.init({
    startTime: DataTypes.DATE,
    price: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Trips',
  });
  return Trips;
};