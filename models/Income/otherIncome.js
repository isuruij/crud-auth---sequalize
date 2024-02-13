module.exports = (sequelize, DataTypes) => {
    const otherIncome = sequelize.define("otherIncome", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      incomeId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      otherIncome: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return otherIncome;
  };
  