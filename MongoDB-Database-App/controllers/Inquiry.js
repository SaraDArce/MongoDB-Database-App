const InquiryModel = require("../model/inquiry");
// Create new inquiry
exports.create = async (req, res) => {
  if (
    !req.body.email &&
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.phone &&
    !req.body.inquiry
  ) {
    res.status(400).send({ message: "Fields cannot be empty!" });
  }

  const user = new InquiryModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
    inquiry: req.body.inquiry,
  });

  await user
    .save()
    .then((data) => {
      res.send({
        message: "Inquiry sent!",
        user: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "An error occurred while creating inquiry, please try again or call or text: 917.555.1212",
      });
    });
};
// Retrieve all inquiries
exports.findAll = async (req, res) => {
  try {
    const user = await InquiryModel.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Find a single Inquiry by id
exports.findOne = async (req, res) => {
  try {
    const user = await InquiryModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Update inquiry by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Inquiry must be amended in order to save!",
    });
  }

  const id = req.params.id;

  await UserModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Inquiry not found.`,
        });
      } else {
        res.send({ message: "Inquiry successfully updated." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
// Delete a user with the specified id in the request
exports.destroy = async (req, res) => {
  await InquiryModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Inquiry not found.`,
        });
      } else {
        res.send({
          message: "Inquiry deleted!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
