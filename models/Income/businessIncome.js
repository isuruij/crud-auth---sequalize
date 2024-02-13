module.exports = (sequelize, DataTypes) => {
  const businessIncome = sequelize.define("businessIncome", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    incomeId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    businessIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return businessIncome;
};
