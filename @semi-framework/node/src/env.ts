import type { Loggerfunction } from "@semi-framework/logger";

//function declaration overloads
//return string when required is true
export function env(
  name: string,
  logger: Loggerfunction,
  required: true,
  fallback?: string,
  exitOnError?: boolean,
): string;

//return string when fallback is set
export function env(
  name: string,
  logger: Loggerfunction,
  required: boolean | undefined,
  fallback: string,
  exitOnError?: boolean,
): string;

//return string or undefined when required and fallback are optional
export function env(
  name: string,
  logger: Loggerfunction,
  required?: boolean,
  fallback?: string,
  exitOnError?: boolean,
): string | undefined;

//env variable function
export function env(
  name: string,
  logger: Loggerfunction,
  required?: boolean,
  fallback?: string,
  exitOnError: boolean = true,
) {
  //check if env var is set
  const isSet = typeof process.env[name] === "string";

  //check if env var is not set, required and has no fallback
  if (!isSet && required && fallback === undefined) {
    //log error
    logger(
      "error",
      `ENV-Var: process.env.${name} is not set, required and has no fallback!`,
    );

    //exit process when exitOnError is true (default)
    if (exitOnError) process.exit(1);
  }

  //check if env var is not set, required but has a fallback
  if (!isSet && required && typeof fallback === "string")
    logger(
      "warn",
      `ENV-Var: process.env.${name} is not set, required but has a fallback!`,
    );

  //return env when set else return fallback
  return isSet ? process.env[name] : fallback;
}
