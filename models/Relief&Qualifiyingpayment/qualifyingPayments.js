module.exports = (sequelize, DataTypes) => {
  const qualifyingPayments = sequelize.define("qualifyingPayments", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reliefid: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    qualifyingPayments: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return qualifyingPayments;
};
