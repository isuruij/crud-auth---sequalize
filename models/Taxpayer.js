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

    //Income
    Taxpayer.hasMany(models.investmentIncome, {
      foreignKey: 'taxpayerId', 
      as: 'investmentIncome', 
    });

    Taxpayer.hasMany(models.businessIncome, {
      foreignKey: 'taxpayerId', 
      as: 'businessIncomes', 
    });

    Taxpayer.hasMany(models.employmentIncome, {
      foreignKey: 'taxpayerId', 
      as: 'employmentIncome', 
    });
 
    Taxpayer.hasMany(models.otherIncome, {
      foreignKey: 'taxpayerId', 
      as: 'otherIncome', 
    });

    //Tax credit
    Taxpayer.hasMany(models.apit, {
      foreignKey: 'taxpayerId', 
      as: 'apit', 
    });

    Taxpayer.hasMany(models.whtOnInvestmentIncome, {
      foreignKey: 'taxpayerId', 
      as: 'whtOnInvestmentIncomes', 
    });

    Taxpayer.hasMany(models.whtOnServiceFeeReceived, {
      foreignKey: 'taxpayerId', 
      as: 'whtOnServiceFeeReceiveds', 
    });

    Taxpayer.hasMany(models.selfAssessmentPayment, {
      foreignKey: 'taxpayerId', 
      as: 'selfAssessmentPayments', 
    });

    //Other assesment
    Taxpayer.hasMany(models.capitalValue, {
      foreignKey: 'taxpayerId', 
      as: 'capitalValue', 
    });

    Taxpayer.hasMany(models.terminalBenefits, {
      foreignKey: 'taxpayerId', 
      as: 'terminalBenefits', 
    });

    Taxpayer.hasMany(models.whtWhichIsNotDeducted, {
      foreignKey: 'taxpayerId', 
      as: 'whtWhichIsNotDeducted', 
    });


    //Relief&Qualifiyingpayment
    Taxpayer.hasMany(models.qualifyingPayments, {
      foreignKey: 'taxpayerId', 
      as: 'qualifyingPayments', 
    });

    Taxpayer.hasMany(models.reliefForExpenditure, {
      foreignKey: 'taxpayerId', 
      as: 'reliefForExpenditure', 
    });

    Taxpayer.hasMany(models.reliefForRentIncome, {
      foreignKey: 'taxpayerId', 
      as: 'reliefForRentIncome', 
    });

    
  };

  return Taxpayer;
};
