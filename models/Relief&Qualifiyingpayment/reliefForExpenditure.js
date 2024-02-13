module.exports = (sequelize, DataTypes) => {
  const reliefForExpenditure = sequelize.define("reliefForExpenditure", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reliefid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    reliefForExpenditure: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return reliefForExpenditure;
};
