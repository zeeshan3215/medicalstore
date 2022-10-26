const express = require("express");
const router = express.Router();

const medicinekeeperController = require('../controllers/medicinekeeper.controllers');
const checkAuth = require('../middleware/user-auth');

// router.get("/",medicinekeeperController.sampleUser);
router.get("/",checkAuth, medicinekeeperController.getAll);
router.post("/login", medicinekeeperController.loginUser);
router.post("/register", medicinekeeperController.registerUser);
router.get("/:_id",medicinekeeperController.getSingleUser);
// router.post("/",medicinekeeperController.addUser);
router.put("/:_id", medicinekeeperController.updateUser);
router.delete("/:_id", medicinekeeperController.deleteUser);


module.exports = router;