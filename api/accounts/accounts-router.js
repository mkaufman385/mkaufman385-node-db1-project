const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    throw new Error("NOOOOOOOO");
  } catch (err) {
    next(err);
  }
});

router.get("/:id", (req, res, next) => {
  try {
    //later
  } catch (err) {
    next(err);
  }
});

router.post("/", (req, res, next) => {
  try {
    //later
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res, next) => {
  try {
    //later
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", (req, res, next) => {
  try {
    //later
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
