module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
    User.associate = (models) => {
      User.hasOne(models.SuperAdmin, { foreignKey: 'userId' }); // One-to-one relationship with Admin
      User.hasOne(models.Taxpayer, { foreignKey: 'userId' }); // One-to-one relationship with Taxpayer
      User.hasOne(models.SecondAdmin, { foreignKey: 'userId' }); // One-to-one relationship with Taxpayer
    };
    return User;
  };
  