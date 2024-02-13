module.exports = (sequelize, DataTypes) => {
  const whtWhichIsNotDeducted = sequelize.define("whtWhichIsNotDeducted", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assessmentId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whtWhichIsNotDeducted: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return whtWhichIsNotDeducted;
};
