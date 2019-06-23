'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserClass = sequelize.define('UserClass', {
    classId: DataTypes.INTEGER,
    class: DataTypes.INTEGER
  }, {});
  UserClass.associate = function(models) {
    // associations can be defined here
  };
  return UserClass;
};