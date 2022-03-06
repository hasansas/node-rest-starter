/**
 * Users Model
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      phoneNumber: {
        type: DataTypes.STRING,
        field: 'phone_number'
      },
      password: {
        type: DataTypes.STRING
      },
      firstLogin: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        field: 'first_login'
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'users',
      freezeTableName: true,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      scopes: {
        // ..
      },
    }
  )
  Users.associate = function (models) {
    // associations can be defined here
  }
  return Users
}
