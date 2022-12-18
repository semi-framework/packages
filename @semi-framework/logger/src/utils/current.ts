import { twoDigit } from "./strings";

//create a function that retuns date string
export function date() {
  //create current date
  const { getDay, getFullYear, getMonth } = new Date();

  //create partial strings
  const year = twoDigit(getFullYear().toString());
  const month = twoDigit(getMonth().toString());
  const day = twoDigit(getDay().toString());

  //return message
  return `${year}-${month}-${day}`;
}

//create a function that retuns time string
export function time() {
  //create current date
  const { getHours, getMinutes, getSeconds } = new Date();

  //create partial strings
  const hour = twoDigit(getHours().toString());
  const minute = twoDigit(getMinutes().toString());
  const second = twoDigit(getSeconds().toString());

  //return message
  return `${hour}:${minute}:${second}`;
}
