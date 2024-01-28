const express = require("express");
const BandAdminController = require("../controllers/BandAdmin");
const router = express.Router();
router.get("/", BandAdminController.findAll);
router.get("/:id", BandAdminController.findOne);
router.post("/", BandAdminController.create);
router.patch("/:id", BandAdminController.update);
router.delete("/:id", BandAdminController.destroy);
module.exports = router;
