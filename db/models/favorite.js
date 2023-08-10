'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate({ User, Film }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Film, { foreignKey: 'film_id' });
    }
  }
  Favorite.init(
    {
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      film_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Films',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Favorite',
    }
  );
  return Favorite;
};
