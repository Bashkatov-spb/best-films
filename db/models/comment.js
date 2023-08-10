'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Film }) {
      this.belongsTo(User, { foreignKey: 'user_id' });
      this.belongsTo(Film, { foreignKey: 'film_id' });
    }
  }
  Comment.init(
    {
      comment: {
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
      modelName: 'Comment',
    }
  );
  return Comment;
};
