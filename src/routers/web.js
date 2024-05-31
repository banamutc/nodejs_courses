const express = require("express");
const {
  getHomePage,
  getTest,
  createUser,
  getListUser,
  getCreate,
  getUpdate,
  updateUser,
  deleteUser,
} = require("../controllers/HomeController");
const router = express.Router();

router.get("/", getHomePage);

router.get("/test", getTest);

router.get("/create", getCreate);
router.get("/update/:id", getUpdate);
router.post("/create-user", createUser);
router.post("/update-user/:id", updateUser);
router.get("/list-user", getListUser);
router.post("/delete-user/:id", deleteUser);
module.exports = router;
