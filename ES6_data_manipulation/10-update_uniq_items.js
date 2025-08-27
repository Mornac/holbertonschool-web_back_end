/* eslint-disable */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const entry of map) {
    const key = entry[0];
    const value = entry[1];

    if (value === 1) {
      map.set(key, 100);
    }
  }

  return map;
}
