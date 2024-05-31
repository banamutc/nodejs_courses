const connection = require("../config/database");
const { getAllUser } = require("../services/CRUDServices");

const getHomePage = (req, res) => {
  res.render("home");
};

const getTest = (req, res) => {
  res.render("sample");
};

const getCreate = (req, res) => {
  res.render("create");
};

const getDeleteUser = (req, res) => {
  res.render("delete");
};

const getUpdate = async (req, res) => {
  const userId = req.params.id;
  let [results, fields] = await connection.query(
    "SELECT * FROM Users where id =?",
    [userId]
  );
  const users = results[0];
  res.render("edit", { users });
};

const createUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email, name, city)
    value (?, ?, ?)`,
    [email, name, city]
  );
  res.send("Created user success!");
};

const updateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.params.id;
  let [results, fields] = await connection.query(
    `UPDATE Users set name =?, email =?, city =?
    where id =?`,
    [name, email, city, userId]
  );
  res.send("Updated user success!");
};

const deleteUser = async (req, res) => {
  let userId = req.params.id;
  let [results, fields] = await connection.query(
    `DELETE FROM Users where id =?`,
    [userId]
  );
  res.send("Delete user success!");
};

const getListUser = async (req, res) => {
  let results = await getAllUser();
  res.render("list-user", { listUser: results });
};
module.exports = {
  getHomePage,
  getTest,
  createUser,
  getListUser,
  getCreate,
  getUpdate,
  updateUser,
  deleteUser,
};
