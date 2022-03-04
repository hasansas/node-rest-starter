

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      tableName: 'Users',
      defaultScope: {
        // attributes: { exclude: ['firstName'] }
      },
      scopes: {
        // ..
      }
    }
  )
  User.associate = function (models) {
    // associations can be defined here
  }
  return User
}
