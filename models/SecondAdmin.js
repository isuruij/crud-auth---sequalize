// admin.js
module.exports = (sequelize, DataTypes) => {
    const SecondAdmin = sequelize.define("SecondAdmin", {
      // Admin-specific attributes...
    });
  
    SecondAdmin.associate = (models) => {
        SecondAdmin.belongsTo(models.User, { foreignKey: 'userId' }); // Many-to-one relationship with User
    };
  
    return SecondAdmin;
  };
  