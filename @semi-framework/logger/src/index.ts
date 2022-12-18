//type for all possible log levels
export type LogLevels = "debug" | "info" | "warn" | "error";

//all format identities
// %L -> The current LogLevel in UPPERCASE (e.g. "INFO")
// %l -> The current LogLevel in lowercase (e.g. "info")
// %d -> The current date as YYYY-MM-DD (e.g. "2022-01-10")
// %t -> The current time as HH:MM:SS (e.g. "21:04:32")
// %m -> The message for the logger (e.g. "404 Not Found")

//type for all primitive error message
type ErrorMessagePrimitive =
  | boolean
  | null
  | number
  | string
  | undefined
  | Error
  | Array<any>
  | Object;

//type for all error message
export type ErrorMessage =
  | ErrorMessagePrimitive
  | ((...args: any) => ErrorMessagePrimitive);
