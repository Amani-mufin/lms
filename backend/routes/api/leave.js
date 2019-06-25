const express = require("express");
const userController = require("../../controllers/leave");
const router = express.Router();

router.get("/:id", userController.getSingleLeave);
router.get("/", userController.getLeave);
router.post("/", userController.postLeave);
router.delete("/:id", userController.deleteLeave);

module.exports = router