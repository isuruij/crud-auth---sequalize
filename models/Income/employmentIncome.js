module.exports = (sequelize, DataTypes) => {
  const employeeIncome = sequelize.define("employeeIncome", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    incomeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    employmentIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return employeeIncome;
};
