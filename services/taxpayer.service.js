const bcrypt = require("bcrypt");
const { Taxpayer } = require("../models");

module.exports.addTaxpayer = async (obj) => {
  try {
    const hashedPw = await bcrypt.hash(obj.password.toString(), 8);
    var data = obj;
    data.password = hashedPw;
    await Taxpayer.create(data);
    return obj;
  } catch (error) {
    console.error("Error executing SQL query:", error);
    throw error;
  }
};

module.exports.loginTaxpayer = async (obj) => {

  try {

    const taxpayer = await Taxpayer.findOne({
      where: {
        email: obj.email
      }
    });
 
    if (!taxpayer) {
      throw new Error('Taxpayer not found');
    }

    const isMatch = await bcrypt.compare(obj.password.toString(), taxpayer.password);

    if (!isMatch) {
      throw new Error;
    } else {
      return obj;
      
    }
  } catch (error) {
    console.error("Error in login:", error);
    throw error;
  }
};
