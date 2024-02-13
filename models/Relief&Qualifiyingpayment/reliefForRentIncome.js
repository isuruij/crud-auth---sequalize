module.exports = (sequelize, DataTypes) => {
  const reliefForRentIncome = sequelize.define("reliefForRentIncome", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reliefid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reliefForRentIncome: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return reliefForRentIncome;
};
