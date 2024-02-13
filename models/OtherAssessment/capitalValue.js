module.exports = (sequelize, DataTypes) => {
    const capitalValue = sequelize.define("capitalValue", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      assessmentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capitalValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    });
  
    return capitalValue;
  };
  