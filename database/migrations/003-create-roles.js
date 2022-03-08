'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('roles', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
        allowNull: false
      },
      createdBy: {
        type: Sequelize.UUID,
        field: 'created_by',
        references: { model: 'users', key: 'id' }
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
        allowNull: false
      },
      updatedBy: {
        type: Sequelize.UUID,
        field: 'updated_by',
        references: { model: 'users', key: 'id' }
      },
      deletedAt: {
        type: Sequelize.DATE,
        field: 'deleted_at'
      },
      deletedBy: {
        type: Sequelize.UUID,
        field: 'deleted_by',
        references: { model: 'users', key: 'id' }
      }
    })
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('roles')
  }
}
