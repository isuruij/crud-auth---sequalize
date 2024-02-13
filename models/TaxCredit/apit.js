module.exports = (sequelize, DataTypes) => {
    const businessIncome = sequelize.define("apit", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      taxCreditId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      apit: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return apit;
  };
  