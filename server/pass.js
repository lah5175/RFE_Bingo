require('dotenv').config();
const {SECRET_PASSWORD} = require('../secrets');

let pass;

if (process.env.NODE_ENV === "production") {
  pass = process.env.PASSWORD;
}
else {
  pass = SECRET_PASSWORD;
}

module.exports = pass;