// 07-npm — your work goes in this file, and in package.json.
//
// Read 07-npm/README.md first and work through its numbered steps.
// Nothing here runs until you have done step 1:  npm install dayjs
//
// Careful: this file is only step 3 of five. Steps 1, 2 and 5 happen in the
// terminal, and step 4 is an edit to the package.json at the root of the repo.
// Finishing this file is not finishing the module.
//
// Check your work with: npm test 07


import dayjs from "dayjs";

/**
 * Lays a date out the way people write it here.
 */
export function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY");
}

/**
 * The year a date falls in, as a number.
 */
export function yearOf(dateString) {
  return dayjs(dateString).year();
}

/**
 * Returns that many days later in YYYY-MM-DD form.
 */
export function addDays(dateString, days) {
  return dayjs(dateString).add(days, "day").format("YYYY-MM-DD");
}

/**
 * The package YOU chose from the registry.
 */
export const myPackage = "lodash";
