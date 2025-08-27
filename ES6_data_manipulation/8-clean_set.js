/* eslint-disable */
export default function cleanSet(startString) {
  if (typeof startString !== 'string' || startString.length === 0) 
    return '';
  }

  const strings = [...set]
    .filter((value) => value && value.startsWith(startString))
    .map((value) => value.slice(startString.length));
  
  return strings.join('-');
