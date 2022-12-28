const { env } = require("../dist");

//logger example function
function logger(name, message) {
  console[name](name, message);
}

//test env basic
console.log("ENV1:", env("ENV1", logger));

//test env with required (disable exit on error)
console.log("ENV2:", env("ENV2", logger, true, undefined, false));

//test env with fallback
console.log("ENV3:", env("ENV3", logger, true, "FALLBACK"));

//test env with required and no fallback (enabled exit on error)
console.log("ENV4:", env("ENV4", logger, true));
