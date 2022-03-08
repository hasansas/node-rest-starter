/**
 * User Info Model
 */

'use strict';

module.exports = (sequelize, DataTypes) => {
  const UserInfo = sequelize.define(
    'userInfo',
    {
      userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        unique: true,
        references: { model: 'users', key: 'id' },
        onDelete: 'CASCADE',
        allowNull: false,
        field: 'user_id',
        primaryKey: true
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        field: 'date_of_birth',
      },
      placeOfBirth: {
        type: DataTypes.STRING,
        field: 'place_of_birth',
      },
      gender: {
        type: DataTypes.ENUM,
        values: ['male', 'female']
      },
    },
    {
      tableName: 'user_infos',
      freezeTableName: true,
      defaultScope: {
        attributes: { exclude: ['createdAt', 'updatedAt'] }
      },
      scopes: {
        // ..
      },
    }
  )
  UserInfo.associate = function (models) {
    // associations can be defined here
  }
  return UserInfo
}
