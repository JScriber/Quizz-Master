/**
 * Makes a deep copy of the given object.
 * @param {*} obj
 * @returns {*} - Copied object.
 */
export const copy = (obj) => JSON.parse(JSON.stringify(obj));
