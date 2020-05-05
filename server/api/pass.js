const express = require("express");
const router = express.Router();
const { SECRET_PASSWORD } = require("../../secrets");

router.get("/", async (req, res, next) => {
  try {
    let pass;

    if (process.env.NODE_ENV === "production") {
      pass = process.env.PASSWORD;
    } else {
      pass = SECRET_PASSWORD;
    }

    res.json(pass);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
