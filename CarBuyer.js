const Pen = require("./Pen.js");

const bluePen = new Pen("blue");
bluePen.write("Nissan Sentra 1982");
bluePen.setHasInk(false);

// handle this error possibility
try {
  bluePen.sign("Patrick B");
} catch (error) {
  console.error(error.message);
}
