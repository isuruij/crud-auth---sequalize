module.exports = (sequelize, DataTypes) => {
    const document = sequelize.define("document", {
      documentId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
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
  