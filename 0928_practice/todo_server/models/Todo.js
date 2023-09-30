const { DataTypes } = require('sequelize');

const TodoModel = (sequelize) => {
  const Todo = sequelize.define('todo', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    done: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
  });
  return Todo;
};
module.exports = TodoModel;
