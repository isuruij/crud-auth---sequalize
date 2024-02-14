
module.exports = (sequelize, DataTypes) => {
    const SuperAdmin = sequelize.define("SuperAdmin", {
      // Admin-specific attributes...
    });
  
    SuperAdmin.associate = (models) => {
        SuperAdmin.belongsTo(models.User, { foreignKey: 'userId' }); // Many-to-one relationship with User
    };
  
    return SuperAdmin;
  };
  