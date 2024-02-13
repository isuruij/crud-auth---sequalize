module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("TaxSummaryReport", {
      reportId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },

    });
   
    return TaxSummaryReport;
  };
  