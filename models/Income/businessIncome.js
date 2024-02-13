module.exports = (sequelize, DataTypes) => {
  const businessIncome = sequelize.define("businessIncome", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    incomeId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return businessIncome;
};
