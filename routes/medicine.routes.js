const express = require("express");
const checkAuth = require('../middleware/user-auth');
const router = express.Router();

const bookController = require('../controllers/medicine.controllers');

router.get("/",checkAuth, bookController.getAll);
router.post("/add",bookController.add);
// router.get("/:_id",bookController.getSingleBook);
// router.put("/:_id", bookController.updateBook);
// router.delete("/:_id", bookController.deleteBook);


module.exports = router;