// @desc          Get All Bootcamps
// @route         GET /api/v1/bootcamps
// @access        Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show All Bootcamps" });
};

// @desc          Get Single Bootcamps
// @route         GET /api/v1/bootcamps/:id
// @access        Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Get Bootcamp with id ${req.params.id}` });
};

// @desc          Create new Bootcamp
// @route         POST /api/v1/bootcamps
// @access        Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create New Bootcamps" });
};

// @desc          Update Bootcamp
// @route         UPDATE /api/v1/bootcamps/:id
// @access        Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc          Delete Bootcamp
// @route         DELETE /api/v1/bootcamps/:id
// @access        Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};