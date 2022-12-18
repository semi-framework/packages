const { createLogger, Logger } = require("../dist");

//functional method
const logger1 = createLogger({
  debug: process.env.DEBUG === "1" ? true : false,
  info: true,
  warn: true,
  error: true,
  format: "[%L] [%l] %d %t %m",
});

//class method
const logger2 = new Logger({
  debug: process.env.DEBUG === "1" ? true : false,
  info: true,
  warn: true,
  error: true,
  format: "[%L] [%l] %d %t %m",
});

//debug log boolean (log string method)
logger1.log("debug", true);

//info log number (log string method)
logger1.log("info", 123);

//warn log string (log string method)
logger1.log("warn", "new Error");

//error log null (log string method)
logger1.log("error", null);

//debug log Error (wrapper function method)
logger2.debug(new Error("test"));

//info log undefined (wrapper function method)
logger2.info(undefined);

//warn log object (wrapper function method)
logger2.warn({ a: 1, b: { c: 2 } });

//error log callback return type [error without stack] (wrapper function method)
logger2.error(() => {
  const err = new Error("test");
  err.stack = undefined;
  return err;
});
