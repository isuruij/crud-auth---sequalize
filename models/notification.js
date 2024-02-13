module.exports = (sequelize, DataTypes) => {
  const notification = sequelize.define("notification", {
    notificationId: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    message: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return notification;
};
