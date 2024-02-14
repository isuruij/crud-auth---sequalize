module.exports = (sequelize, DataTypes) => {
  const employeeIncome = sequelize.define("employeeIncome", {

    incomeId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    employmentIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return employeeIncome;
};
