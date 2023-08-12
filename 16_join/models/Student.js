const { DataTypes } = require("sequelize");

const studentModel = (sequelize) => {
  const Student = sequelize.define("student", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    userid: {
      type: DataTypes.STRING(31),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(255), // 암호화 처리를 하기 위해
      allowNull: false,
    },
    email: DataTypes.STRING(63), // 속성값이 하나만 있으면 이렇게 사용 가능
  });
  return Student;
};

module.exports = studentModel;
