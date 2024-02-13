module.exports = (sequelize, DataTypes) => {
    const whtOnInvestmentIncome = sequelize.define("whtOnInvestmentIncome", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taxCreditId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      whtOnInvestmentIncome: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return whtOnInvestmentIncome;
  };
  