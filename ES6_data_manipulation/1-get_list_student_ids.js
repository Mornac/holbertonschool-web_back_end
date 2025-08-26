/* eslint-disable */
export default function getListStudentsIds(arr) {
  if (Array.isArray(arr) === false || arr.every((obj) => typeof obj !== 'object')) {
    return [];
  }

  return arr.map((obj) => obj.id);
}
