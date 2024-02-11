module.exports = (sequelize, DataTypes) => {
    const Taxpayer = sequelize.define("Taxpayer", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },password: {
            type: DataTypes.STRING,
            allowNull: false,
          }
    });
  
    return Taxpayer;
  };
  