const express = require("express");
const InquiryController = require("../controllers/Inquiry.mjs");
const router = express.Router();
router.get("/", InquiryController.findAll);
router.get("/:id", InquiryController.findOne);
router.post("/", InquiryController.create);
router.patch("/:id", InquiryController.update);
router.delete("/:id", InquiryController.destroy);
module.exports = router;
