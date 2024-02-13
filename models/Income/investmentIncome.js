module.exports = (sequelize, DataTypes) => {
  const investmentIncome = sequelize.define("investmentIncome", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    incomeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    investmentIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return investmentIncome;
};
