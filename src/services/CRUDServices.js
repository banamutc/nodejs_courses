const connection = require("../config/database");

const getAllUser = async () => {
  let [results, fields] = await connection.query("SELECT * FROM Users");
  return results;
};

module.exports = { getAllUser };
