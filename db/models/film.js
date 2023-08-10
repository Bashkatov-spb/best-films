'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Film extends Model {
    static associate({ User, Comment, Favorite }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.hasMany(Comment, { foreignKey: 'film_id' });
      this.hasMany(Favorite, { foreignKey: 'film_id' });
    }
  }
  Film.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    },
    {
      sequelize,
      modelName: 'Film',
    }
  );
  return Film;
};
