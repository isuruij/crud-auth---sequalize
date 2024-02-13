module.exports = (sequelize, DataTypes) => {
  const terminalBenefits = sequelize.define("terminalBenefits", {
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    assessmentId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    terminalBenefits: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  });

  return terminalBenefits;
};
