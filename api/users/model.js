/**
 * Users Model
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'users',
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
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      firstLogin: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
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
      timestamps: true,
      paranoid: true,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] }
      },
      scopes: {
        // ..
      },
    }
  )
  Users.associate = function (models) {
    Users.hasOne(models.userInfo, {
      // as: 'userInfo',
      foreignKey: 'user_id',
      required: false
    })
  }
  return Users
}
