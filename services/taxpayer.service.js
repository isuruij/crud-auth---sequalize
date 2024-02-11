const db = require("../db");
const bcrypt = require("bcrypt");

module.exports.addTaxpayer = async (obj) => {


  const hashedPw = await bcrypt.hash(obj.password.toString(), 8);

  // Insert new taxpayer
  const query =
    "INSERT INTO details (email,password,name,address,tin,nameofemployer,mobileno,officeno,homeno,birthday) VALUES (?,?,?,?,?,?,?,?,?,?)";
  const queryParams = [
    obj.email,
    hashedPw,
    obj.name,
    obj.address,
    obj.tin,
    obj.nameofemployer,
    obj.mobileno,
    obj.officeno,
    obj.homeno,
    obj.birthday,
  ];

  try {
    const [result] = await db.query(query, queryParams);
  } catch (error) {
    console.error("Error executing SQL query:", error);
    throw error;
  }
};


module.exports.loginTaxpayer = async (obj) => {

  // Insert new taxpayer
  const query =
    "SELECT * FROM details WHERE email = ?";
  const queryParams = [
    obj.email
  ];

  try {
    const [[data]] = await db.query(query, queryParams);
    const isMatch = await bcrypt.compare(obj.password.toString(),data.password)
    if(!isMatch){
      throw new Error()
    }else{
      return data
      data
    }
    

  } catch (error) {
    console.error("Error in login:", error);
    throw error;
  }
};




