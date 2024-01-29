const BandAdminModel = require("../model/bandAdmin");

// Create and Save a new band admin
exports.create = async (req, res) => {
  if (
    !req.body.email &&
    !req.body.firstName &&
    !req.body.lastName &&
    !req.body.phone
  ) {
    res.status(400).send({ message: "Fields cannot be empty!" });
  }

  const bandAdmin = new BandAdminModel({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phone: req.body.phone,
  });

  await bandAdmin
    .save()
    .then((data) => {
      res.send({
        message: "Rock On! Band admin created!",
        bandAdmin: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occurred while creating band admin",
      });
    });
};

// Retrieve all band admins from the database.
exports.findAll = async (req, res) => {
  try {
    const bandAdmin = await BandAdminModel.find();
    res.status(200).json(bandAdmin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Find a single band admin with an id
exports.findOne = async (req, res) => {
  try {
    const bandAdmin = await BandAdminModel.findById(req.params.id);
    res.status(200).json(bandAdmin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
// Update a band admin by the id in the request
exports.update = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Fields to update cannot be empty!",
    });
  }

  const id = req.params.id;

  await BandAdminModel.findByIdAndUpdate(id, req.body, {
    useFindAndModify: false,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Band admin not found.`,
        });
      } else {
        res.send({ message: "Band admin updated successfully." });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
// Delete a band admin with the specified id in the request
exports.destroy = async (req, res) => {
  await BandAdminModel.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Band admin not found.`,
        });
      } else {
        res.send({
          message: "Band admin deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
