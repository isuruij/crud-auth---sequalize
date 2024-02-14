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
    Taxpayer.hasMany(models.businessIncome, {
      foreignKey: 'taxpayerId', // This is the foreign key in the BusinessIncome model
      as: 'businessIncomes', // Alias to use when querying the associations
    });

    Taxpayer.hasMany(models.whtOnInvestmentIncome, {
      foreignKey: 'taxpayerId', // This is the foreign key in the WhtOnInvestmentIncome model
      as: 'whtOnInvestmentIncomes', // Alias to use when querying the associations
    });

    Taxpayer.hasMany(models.whtOnServiceFeeReceived, {
      foreignKey: 'taxpayerId', // This is the foreign key in the WhtOnServiceFeeReceived model
      as: 'whtOnServiceFeeReceiveds', // Alias to use when querying the associations
    });

    Taxpayer.hasMany(models.selfAssessmentPayment, {
      foreignKey: 'taxpayerId', // This is the foreign key in the SelfAssessmentPayment model
      as: 'selfAssessmentPayments', // Alias to use when querying the associations
    });

    
  };

  return Taxpayer;
};
