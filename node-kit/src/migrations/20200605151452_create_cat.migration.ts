import { QueryInterface, DataTypes } from 'sequelize';

const migration = {
  up: (queryInterface: QueryInterface) => queryInterface.sequelize.transaction((t) => queryInterface.createTable('cats', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    created_at: {
      type: DataTypes.DATE,
    },
    updated_at: {
      type: DataTypes.DATE,
    },
  }, {
    transaction: t,
  })),
};

export default migration;
