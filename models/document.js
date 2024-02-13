module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("document", {
      documentId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      path: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
   
    return document;
  };
  