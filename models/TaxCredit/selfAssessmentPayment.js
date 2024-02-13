module.exports = (sequelize, DataTypes) => {
    const selfAssessmentPayment = sequelize.define("selfAssessmentPayment", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taxCreditId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      selfAssessmentPayment: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return selfAssessmentPayment;
  };
  