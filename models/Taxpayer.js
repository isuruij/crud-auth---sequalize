
module.exports = (sequelize, DataTypes) => {
  
  const Taxpayer = sequelize.define("Taxpayer", {
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
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tin: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    introducedMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nameofemployer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    officeno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    homeno: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Taxpayer.associate = (models) => {
    Taxpayer.belongsTo(models.User, { foreignKey: 'userId' }); // Many-to-one relationship with User
};
  return Taxpayer;
};
